import { WFComponent, WFFormComponent } from "@xatom/core";
import { updateFormData } from "../utils/formUtils";
import { goNextSlide, goPreviousSlide } from "../utils/sliderUtils";

export const initStepSix = () => {
  const form = new WFFormComponent("#negotiatorGeneratorForm"); // Initialize form component
  const nextButton = new WFComponent("#submitStepSix"); // Next step button
  const backButton = new WFComponent("#backStepSix"); // Back button
  const errorElement = new WFComponent("#submitStepSixError"); // Error message element

  // Get the text area input for price change details
  const priceChangeDetailsInput = new WFComponent("#priceChangeDetailsInput");

  // Handle "Next Step" button click
  nextButton.on("click", (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get input value for price change details
    const priceChangeDetails = (
      priceChangeDetailsInput.getElement() as HTMLTextAreaElement
    ).value.trim();

    // Validation: Ensure the text area is filled in
    if (!priceChangeDetails) {
      errorElement.setText("Please provide the details of the price changes.");
      errorElement.setStyle({ display: "block" });
    } else {
      // Clear any previous error messages
      errorElement.setText("");
      errorElement.setStyle({ display: "none" });

      // Group the data for Step 6
      const stepSixData = {
        stepSix: {
          priceChangeDetails,
        },
      };

      // Update form data with the grouped data for Step 6
      updateFormData(stepSixData);

      // Proceed to the next slide (Step 7)
      goNextSlide();
    }
  });

  // Handle "Go Back" button click
  backButton.on("click", (event) => {
    event.preventDefault(); // Prevent default action
    goPreviousSlide(); // Go to the previous slide
  });
};
