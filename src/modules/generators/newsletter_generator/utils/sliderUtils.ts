import { WFSlider } from "@xatom/slider";
import { WFComponent } from "@xatom/core";
import { updateNextButtonText } from "./formUtils";

// Shared slider instance
let sliderInstance: WFSlider | null = null;

// Initialize the slider
export function initializeSlider(selector: string): WFSlider {
  if (!sliderInstance) {
    sliderInstance = new WFSlider(selector); // Initialize slider
  }
  return sliderInstance;
}

// Function to go to the next slide, skipping inactive slides
export function goNextSlide(): void {
  if (!sliderInstance) return;

  const currentIndex = sliderInstance.getActiveSlideIndex();
  const allSlides = sliderInstance.getAllSlides();

  let nextIndex = currentIndex + 1;

  // Loop through slides to find the next active one
  while (
    nextIndex < allSlides.length &&
    isSlideInactive(allSlides[nextIndex])
  ) {
    nextIndex++;
  }

  if (nextIndex < allSlides.length) {
    sliderInstance.goToIndex(nextIndex); // Navigate to the next active slide
  }

  // Recalculate button text after navigating
  updateNextButtonText();
}

// Function to go to the previous slide, skipping inactive slides
export function goPreviousSlide(): void {
  if (!sliderInstance) return;

  const currentIndex = sliderInstance.getActiveSlideIndex();
  const allSlides = sliderInstance.getAllSlides();

  let prevIndex = currentIndex - 1;

  // Loop through slides to find the previous active one
  while (prevIndex >= 0 && isSlideInactive(allSlides[prevIndex])) {
    prevIndex--;
  }

  if (prevIndex >= 0) {
    sliderInstance.goToIndex(prevIndex);
  }

  // Recalculate button text after navigating
  updateNextButtonText();
}

// Helper function to check if a slide is inactive
function isSlideInactive(slide: WFComponent): boolean {
  return slide.getElement().hasAttribute("data-inactive");
}

// Function to check if the current slide is the last active slide
export function isLastActiveSlide(): boolean {
  if (!sliderInstance) return false;

  const currentIndex = sliderInstance.getActiveSlideIndex();
  const allSlides = sliderInstance.getAllSlides();

  // Check if the current slide is marked as the final step
  return allSlides[currentIndex].getElement().hasAttribute("data-final-step");
}

// Function to mark a slide as inactive
export function markSlideInactive(slideId: string): void {
  const slideElement = document.querySelector(`#${slideId}`);
  if (slideElement) {
    slideElement.setAttribute("data-inactive", "true");
    console.log(`Slide ${slideId} marked as inactive.`);
  } else {
    console.warn(`Slide with ID ${slideId} not found to mark as inactive.`);
  }
}

// Function to mark a slide as active
export function markSlideActive(slideId: string): void {
  const slideElement = document.querySelector(`#${slideId}`);
  if (slideElement) {
    slideElement.removeAttribute("data-inactive");
    console.log(`Slide ${slideId} marked as active.`);
  } else {
    console.warn(`Slide with ID ${slideId} not found to mark as active.`);
  }
}

// Function to handle sections to include and mark slides as active or inactive
export function handleSectionsToInclude(
  selectedPlatforms: HTMLInputElement[]
): void {
  const allPlatformInputs = document.querySelectorAll('input[type="radio"]');
  let lastActiveSlideId: string | null = null;

  allPlatformInputs.forEach((input: HTMLInputElement) => {
    const correspondingSlideId = input.getAttribute("data-corresponding-slide");

    if (correspondingSlideId) {
      if (input.checked && input.value === "false") {
        markSlideInactive(correspondingSlideId);
      } else if (input.checked && input.value === "true") {
        markSlideActive(correspondingSlideId);
        lastActiveSlideId = correspondingSlideId; // Track the last active slide
      }
    }
  });

  // Remove the final-step attribute from all slides first
  document.querySelectorAll(".multi-step_slide").forEach((slide) => {
    slide.removeAttribute("data-final-step");
  });

  // Mark the last active slide as the final step
  if (lastActiveSlideId) {
    const lastActiveSlide = document.querySelector(`#${lastActiveSlideId}`);
    if (lastActiveSlide) {
      lastActiveSlide.setAttribute("data-final-step", "true");
      console.log(`Slide ${lastActiveSlideId} marked as final step.`);
    }
  }

  // After recalculating active slides, update the button text
  updateNextButtonText();
}
