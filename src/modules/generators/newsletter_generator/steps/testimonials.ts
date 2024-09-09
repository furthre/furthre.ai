import { WFComponent } from "@xatom/core";
import { goPreviousSlide } from "../utils/sliderUtils";
import {
  updateFormData,
  checkAndHandleSubmit,
  updateNextButtonText,
} from "../utils/formUtils";

export const initTestimonialStep = () => {
  const submitButton = new WFComponent("#submitTestimonial");
  const backButton = new WFComponent("#backTestimonial");
  const errorElement = new WFComponent("#submitTestimonialError");

  submitButton.on("click", () => {
    const testimonialClientInput = document.querySelector(
      "#testimonialClientInput"
    ) as HTMLInputElement;
    const representationInput = document.querySelector(
      'input[name="representation"]:checked'
    ) as HTMLInputElement;
    const testimonialInput = document.querySelector(
      "#testimonialInput"
    ) as HTMLTextAreaElement;

    let isValid = true;
    errorElement.setText("");
    errorElement.setStyle({ display: "none" });

    if (!testimonialClientInput.value.trim()) {
      isValid = false;
      errorElement.setText("Please enter the client's name.");
      errorElement.setStyle({ display: "block" });
    }

    if (!representationInput) {
      isValid = false;
      errorElement.setText("Please select the representation type.");
      errorElement.setStyle({ display: "block" });
    }

    if (!testimonialInput.value.trim()) {
      isValid = false;
      errorElement.setText("Please enter the testimonial.");
      errorElement.setStyle({ display: "block" });
    }

    if (isValid) {
      const testimonialData = {
        client: testimonialClientInput.value.trim(),
        representation: representationInput.value,
        testimonial: testimonialInput.value.trim(),
      };

      // Update form data in local storage
      updateFormData({ testimonial: testimonialData });

      // Check if this is the last step and submit the form if it is
      checkAndHandleSubmit(
        "#newsletterGeneratorForm",
        "/generators/newsletter"
      );
    }
  });

  backButton.on("click", () => {
    goPreviousSlide();
  });

  // Update the button text based on whether this is the last step
  updateNextButtonText();
};
