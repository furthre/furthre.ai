// utils/progressBar.ts
import { WFSlider } from "@xatom/slider";
import { WFComponent } from "@xatom/core";

/**
 * Check if a slide is inactive (marked with data-inactive).
 * Replicates similar logic in sliderUtils, but local here since it's not exported there.
 */
function isSlideInactive(slide: WFComponent): boolean {
  return slide.getElement().hasAttribute("data-inactive");
}

/**
 * Get the total count of active slides.
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

  // Build an array of active slide indices
  const activeIndices: number[] = [];
  allSlides.forEach((slide, index) => {
    if (!isSlideInactive(slide)) {
      activeIndices.push(index);
    }
  });

  // 1-based position of the current slide among active
  return activeIndices.indexOf(currentIndex) + 1;
}

/**
 * Initialize a progress bar that displays "Step X of Y" (or optional percentage).
 * 
 * @param slider - the WFSlider instance controlling your .multi-step_slider
 * @param showAsPercentage - if true, display "XX%" instead of "Step X of Y"
 */
export function initProgressBar(slider: WFSlider, showAsPercentage = false) {
  const progressBarElement = new WFComponent("#progress-bar");
  const progressLabelElement = new WFComponent("#progress-percentage");

  /**
   * Update the progress bar whenever the slide changes.
   */
  function updateProgress() {
    const totalActive = getTotalActiveSlides(slider);
    const currentPosition = getActiveSlidePosition(slider);

    if (totalActive === 0) {
      // Edge case: if no slides are active
      progressBarElement.setStyle({ width: "0%" });
      progressLabelElement.setText("Step 0 of 0");
      return;
    }

    // Calculate integer percentage
    const percent = Math.round((currentPosition / totalActive) * 100);

    // Update the bar width
    progressBarElement.setStyle({ width: `${percent}%` });

    // Decide how to display the label
    if (showAsPercentage) {
      // Show "XX%"
      progressLabelElement.setText(`${percent}%`);
    } else {
      // Show "Step X of Y"
      progressLabelElement.setText(`Step ${currentPosition} of ${totalActive}`);
    }
  }

  // 1) Update on initial load
  updateProgress();

  // 2) Update when the user navigates slides
  slider.onSlideChange(() => {
    updateProgress();
  });
}
