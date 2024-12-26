// utils/progressBar.ts
import { WFSlider } from "@xatom/slider";
import { WFComponent } from "@xatom/core";

/**
 * Local helper to check if a slide is inactive.
 * (We replicate the logic rather than importing from sliderUtils for simplicity.)
 */
function isSlideInactive(slide: WFComponent): boolean {
  return slide.getElement().hasAttribute("data-inactive");
}

/**
 * Get the total number of "active" slides (not data-inactive).
 */
function getTotalActiveSlides(slider: WFSlider): number {
  return slider.getAllSlides().filter((slide) => !isSlideInactive(slide)).length;
}

/**
 * Get the current slide's 1-based position among active slides.
 */
function getActiveSlidePosition(slider: WFSlider): number {
  const allSlides = slider.getAllSlides();
  const currentIndex = slider.getActiveSlideIndex();

  // Build an array of indices for active slides only
  const activeIndices: number[] = [];
  allSlides.forEach((slide, index) => {
    if (!isSlideInactive(slide)) {
      activeIndices.push(index);
    }
  });

  // Return the 1-based position of the current slide in that array
  return activeIndices.indexOf(currentIndex) + 1;
}

/**
 * Initialize the progress bar and automatically update it on slide changes.
 * @param slider - The WFSlider instance
 * @param showAsPercentage - true => show "XX%", false => show "Step X of Y"
 */
export function initProgressBar(slider: WFSlider, showAsPercentage = false) {
  const progressBar = new WFComponent("#progress-bar");         // The filling element
  const progressText = new WFComponent("#progress-percentage"); // The text element

  // Update the progress bar on each slide change
  function updateProgress() {
    const totalActive = getTotalActiveSlides(slider);
    const currentPosition = getActiveSlidePosition(slider);

    if (totalActive === 0) {
      // Edge case: if no slides are active
      progressBar.setStyle({ width: "0%" });
      progressText.setText("Step 0 of 0");
      return;
    }

    // Calculate integer percentage
    const percent = Math.round((currentPosition / totalActive) * 100);

    // Update the bar width
    progressBar.setStyle({ width: `${percent}%` });

    // Decide what text to display
    if (showAsPercentage) {
      // Show "XX%"
      progressText.setText(`${percent}%`);
    } else {
      // Show "Step X of Y"
      progressText.setText(`Step ${currentPosition} of ${totalActive}`);
    }
  }

  // 1) Initial update on page load
  updateProgress();

  // 2) Hook into slider’s slide change event
  slider.onSlideChange(() => {
    updateProgress();
  });
}
