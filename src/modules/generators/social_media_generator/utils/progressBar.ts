import { WFSlider } from "@xatom/slider";
import { WFComponent } from "@xatom/core";
import { getActiveSlideIndexAmongActive, getTotalActiveSlides } from "./sliderUtils";

/**
 * Initialize a progress bar that tracks how many "active" slides have been visited.
 * @param slider - The WFSlider instance
 * @param showAsPercentage - Whether to display text as "XX%" or "Step X of Y"
 *                           (default: false => "Step X of Y")
 */
export function initProgressBar(slider: WFSlider, showAsPercentage = false) {
  const progressBar = new WFComponent("#progress-bar");
  const progressText = new WFComponent("#progress-percentage");

  /**
   * Recalculate and update the progress bar width and text
   */
  function updateProgress() {
    // Get the total number of active slides (i.e., not data-inactive)
    const totalActive = getTotalActiveSlides(slider);
    // Get the user's current position among those active slides
    const activePosition = getActiveSlideIndexAmongActive(slider);

    // Avoid division by zero if somehow no active slides
    if (totalActive <= 0) {
      progressBar.setStyle({ width: `0%` });
      progressText.setText(`Step 0 of 0`);
      return;
    }

    // Calculate a percentage
    const percent = Math.round((activePosition / totalActive) * 100);

    // Update progress bar width
    progressBar.setStyle({ width: `${percent}%` });

    if (showAsPercentage) {
      // "XX%" style
      progressText.setText(`${percent}%`);
    } else {
      // "Step X of Y" style
      progressText.setText(`Step ${activePosition} of ${totalActive}`);
    }
  }

  // 1) Update on initial load
  updateProgress();

  // 2) Listen for slide changes:
  //    If xAtom's WFSlider supports a slide change event, use onSlideChange
  slider.onSlideChange(() => {
    updateProgress();
  });

  // If you want a manual approach instead (e.g., your goNextSlide calls updateProgress),
  // just export updateProgress() and call it there. But if `onSlideChange` works, it's simpler.
}
