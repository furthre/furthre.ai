import { WFComponent, WFFormComponent } from "@xatom/core";
import {
  updateFormData,
  checkAndHandleSubmit,
  updateNextButtonText,
} from "../utils/formUtils";
import { goPreviousSlide } from "../utils/sliderUtils";

export const initStepNine = () => {
  const form = new WFFormComponent("#negotiatorGeneratorForm");
  const nextButton = new WFComponent("#submitStepNine");
  const backButton = new WFComponent("#backStepNine");
  const errorElement = new WFComponent("#submitStepNineError");

  const financingContingencyDaysInput = new WFComponent(
    "#financingContingencyDaysInput"
  );

  // Since step 9 is always the last step, set the button text to "Finish & Submit"
  nextButton.setText("Finish & Submit");

  // Handle "Finish & Submit" button click
  nextButton.on("click", (event) => {
    event.preventDefault();

    const financingContingencyDaysValue = (
      financingContingencyDaysInput.getElement() as HTMLInputElement
    ).value.trim();

    // Validate required field
    if (!financingContingencyDaysValue) {
      errorElement.setText(
        "Please enter the number of financing contingency days."
      );
      errorElement.setStyle({ display: "block" });
      return;
    }

    // Prepare form data
    updateFormData({
      stepNine: {
        financingContingencyDays: financingContingencyDaysValue,
      },
    });

    // Submit the form (since this is the last step)
    checkAndHandleSubmit(
      "#negotiatorGeneratorForm",
      "/generators/negotiator"
      // Force form submission
    );
  });

  // Handle "Go Back" button click
  backButton.on("click", (event) => {
    event.preventDefault();
    goPreviousSlide(); // Navigate to the previous slide
  });
};
