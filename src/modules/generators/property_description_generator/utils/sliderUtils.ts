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

// Function to go to the next slide
export function goNextSlide(): void {
  if (!sliderInstance) return;

  const currentIndex = sliderInstance.getActiveSlideIndex();
  const allSlides = sliderInstance.getAllSlides();

  let nextIndex = currentIndex + 1;

  if (nextIndex < allSlides.length) {
    sliderInstance.goToIndex(nextIndex);
  }
}

// Function to go to the previous slide
export function goPreviousSlide(): void {
  if (!sliderInstance) return;

  const currentIndex = sliderInstance.getActiveSlideIndex();
  const allSlides = sliderInstance.getAllSlides();

  let prevIndex = currentIndex - 1;

  if (prevIndex >= 0) {
    sliderInstance.goToIndex(prevIndex);
  }
}

// Helper function to check if a slide is inactive
function isSlideInactive(slide: WFComponent): boolean {
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
