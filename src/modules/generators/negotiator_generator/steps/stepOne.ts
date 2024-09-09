import { WFComponent, WFFormComponent } from "@xatom/core";
import { updateFormData } from "../utils/formUtils";
import {
  goNextSlide,
  markSlideInactive,
  markSlideActive,
} from "../utils/sliderUtils";

export const initStepOne = () => {
  const form = new WFFormComponent("#negotiatorGeneratorForm"); // Using WFFormComponent for form
  const nextButton = new WFComponent("#submitStepOne"); // For Next button
  const errorElement = new WFComponent("#submitStepOneError"); // For error messages

  // Get the radio button elements
  const newOfferRadio = new WFComponent("#selectTypeNewOffer");
  const postInspectionRadio = new WFComponent("#selectTypePostInspection");

  // Handle the next step button click
  nextButton.on("click", (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get selected radio button
    const newOfferChecked = (newOfferRadio.getElement() as HTMLInputElement)
      .checked;
    const postInspectionChecked = (
      postInspectionRadio.getElement() as HTMLInputElement
    ).checked;

    if (!newOfferChecked && !postInspectionChecked) {
      // Show error message if nothing is selected
      errorElement.setText("Please select a negotiation type to proceed.");
      errorElement.setStyle({ display: "block" });
    } else {
      // Clear any previous error messages
      errorElement.setText("");
      errorElement.setStyle({ display: "none" });

      // Determine which option is selected and group the data for Step 1
      const stepOneData = {
        stepOne: {
          negotiationType: newOfferChecked
            ? "New Offer"
            : "Post-Inspection Negotiation",
        },
      };

      if (newOfferChecked) {
        // Mark all slides active (for New Offer path)
        for (let i = 2; i <= 9; i++) {
          markSlideActive(`slideStep${i}`);
        }
      } else if (postInspectionChecked) {
        // Mark slides 2 through 9 inactive (for Post-Inspection path)
        for (let i = 2; i <= 9; i++) {
          markSlideInactive(`slideStep${i}`);
        }
      }

      // Update form data with the grouped data for Step 1
      updateFormData(stepOneData);

      // Proceed to the next slide
      goNextSlide();
    }
  });
};
