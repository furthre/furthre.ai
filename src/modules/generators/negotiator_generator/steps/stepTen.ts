import { WFComponent, WFFormComponent } from "@xatom/core";
import {
  goNextSlide,
  goPreviousSlide,
  markSlideInactive,
  markSlideActive,
} from "../utils/sliderUtils";
import { updateFormData } from "../utils/formUtils"; // Import the function to update formData

export const initStepTen = () => {
  const form = new WFFormComponent("#negotiatorGeneratorForm");
  const nextButton = new WFComponent("#submitStepTen");
  const backButton = new WFComponent("#backStepTen");
  const errorElement = new WFComponent("#submitStepTenError");

  // Get the radio button elements for representation
  const representationOptions = [
    new WFComponent("#postInspectionRepBuyer"),
    new WFComponent("#postInspectionRepSeller"),
  ];

  // Handle "Next Step" button click
  nextButton.on("click", (event) => {
    event.preventDefault();

    const selectedOption = representationOptions.find(
      (option) => (option.getElement() as HTMLInputElement).checked
    );

    if (!selectedOption) {
      // If no option is selected, show an error message
      errorElement.setText(
        "Please select who you represent in this transaction."
      );
      errorElement.setStyle({ display: "block" });
      return;
    }

    // Clear the error message
    errorElement.setStyle({ display: "none" });

    // Get the value of the selected option
    const selectedValue = (selectedOption.getElement() as HTMLInputElement)
      .value;

    // Update form data with the selection from Step 10
    updateFormData({
      stepTen: {
        representation: selectedValue, // Save either "Buyer" or "Seller"
      },
    });

    if (selectedValue === "Buyer") {
      // Buyer selected: Step 11 active, Step 12 inactive, Step 11 is final
      markSlideActive("slideStep11");
      markSlideInactive("slideStep12");

      // Mark Step 11 as the final step
      document
        .querySelector("#slideStep11")
        ?.setAttribute("data-final-step", "true");
      document
        .querySelector("#slideStep12")
        ?.removeAttribute("data-final-step");

      goNextSlide(); // Navigate to Step 11
    } else if (selectedValue === "Seller") {
      // Seller selected: Step 12 active, Step 11 inactive, Step 12 is final
      markSlideActive("slideStep12");
      markSlideInactive("slideStep11");

      // Mark Step 12 as the final step
      document
        .querySelector("#slideStep12")
        ?.setAttribute("data-final-step", "true");
      document
        .querySelector("#slideStep11")
        ?.removeAttribute("data-final-step");

      goNextSlide(); // Navigate to Step 12
    }
  });

  // Handle "Go Back" button click
  backButton.on("click", (event) => {
    event.preventDefault();
    goPreviousSlide(); // Navigate to the previous slide
  });
};
