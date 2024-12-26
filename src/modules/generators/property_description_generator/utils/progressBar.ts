import { WFSlider } from "@xatom/slider";
import { WFComponent } from "@xatom/core";

/**
 * Initialize and update the progress bar.
 * @param slider - The WFSlider instance.
 * @returns An object with a `completeProgress` method to set the bar to 100%.
 */
export function initProgressBar(slider: WFSlider) {
  const progressBarElement = new WFComponent("#progress-bar");
  const progressTextElement = new WFComponent("#progress-percentage");

  // A simple mapping from step number (1-based) to partial progress percentage.
  // Adjust as you see fit.
  const stepProgress: { [stepNumber: number]: number } = {
    1: 5,   // Step 1
    2: 50,  // Step 2
    3: 90,  // Step 3
  };

  // Helper function to update bar and text based on the slider's active index
  function updateProgress(activeIndex: number) {
    const totalSlides = slider.getAllSlides().length;
    const currentStep = activeIndex + 1; // 1-based

    // Use our mapping, defaulting to 0 if something unexpected occurs
    const progress = stepProgress[currentStep] || 0;

    // Update width
    progressBarElement.setStyle({ width: `${progress}%` });
    // Update text: "Step X of 3"
    progressTextElement.setText(`Step ${currentStep} of ${totalSlides}`);
  }

  // Public method to jump to 100% once form is truly completed
  function completeProgress() {
    // Hardcode final text or continue using "Step 3 of 3" if you like
    progressBarElement.setStyle({ width: "100%" });
    progressTextElement.setText(`Step 3 of 3`);
  }

  // 1) Initialize
  updateProgress(slider.getActiveSlideIndex());

  // 2) Listen for slide changes
  slider.onSlideChange((activeIndex: number, prevIndex: number) => {
    updateProgress(activeIndex);
  });

  // Return the `completeProgress` function so other modules can trigger it
  return { completeProgress };
}
