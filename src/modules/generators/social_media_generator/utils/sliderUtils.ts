import { WFSlider } from "@xatom/slider";
import { WFComponent } from "@xatom/core";

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
    sliderInstance.goToIndex(nextIndex);
  }
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
}

// Helper function to check if a slide is inactive
export function isSlideInactive(slide: WFComponent): boolean {
  return slide.getElement().hasAttribute("data-inactive");
}

// Function to mark a slide as inactive
export function markSlideInactive(slideId: string): void {
  const slideElement = document.querySelector(`#${slideId}`);
  if (slideElement) {
    slideElement.setAttribute("data-inactive", "true");
  }
}

// Function to mark a slide as active
export function markSlideActive(slideId: string): void {
  const slideElement = document.querySelector(`#${slideId}`);
  if (slideElement) {
    slideElement.removeAttribute("data-inactive");
  }
}

// Function to handle platform selection and mark slides as active or inactive
export function handlePlatformSelection(selectedPlatforms: HTMLInputElement[]): void {
  const allPlatformInputs = document.querySelectorAll(
    'input[name="select_platforms"]'
  );

  allPlatformInputs.forEach((input: HTMLInputElement) => {
    const correspondingSlideId = input.getAttribute("data-corresponding-slide");

    if (correspondingSlideId) {
      if (selectedPlatforms.includes(input)) {
        markSlideActive(correspondingSlideId);
      } else {
        markSlideInactive(correspondingSlideId);
      }
    }
  });
}

/**
 * Returns the total number of "active" slides in the slider 
 * (i.e., slides NOT marked with data-inactive).
 */
export function getTotalActiveSlides(slider: WFSlider): number {
  const allSlides = slider.getAllSlides();
  return allSlides.filter((slide) => !isSlideInactive(slide)).length;
}

/**
 * Returns the current slide's 1-based position among active slides.
 */
export function getActiveSlideIndexAmongActive(slider: WFSlider): number {
  const allSlides = slider.getAllSlides();
  const currentIndex = slider.getActiveSlideIndex();

  // Build an array of active slide indices
  const activeIndices: number[] = [];
  allSlides.forEach((slide, index) => {
    if (!isSlideInactive(slide)) {
      activeIndices.push(index);
    }
  });

  // Find where the current index sits among active slides
  return activeIndices.indexOf(currentIndex) + 1; // 1-based
}
