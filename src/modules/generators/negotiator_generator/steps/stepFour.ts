import { WFComponent, WFFormComponent } from "@xatom/core";
import { updateFormData } from "../utils/formUtils";
import { goNextSlide, goPreviousSlide } from "../utils/sliderUtils";

export const initStepFour = () => {
  const form = new WFFormComponent("#negotiatorGeneratorForm"); // Initialize form component
  const nextButton = new WFComponent("#submitStepFour"); // Next step button
  const backButton = new WFComponent("#backStepFour"); // Back button
  const errorElement = new WFComponent("#submitStepFourError"); // Error message element

  // Get radio button elements for primary goal
  const primaryGoalPrice = new WFComponent("#primaryGoalBuyerPriceInput");
  const primaryGoalClosing = new WFComponent("#primaryGoalBuyerClosingInput");
  const primaryGoalTime = new WFComponent("#primaryGoalBuyerTimeInput");
  const primaryGoalOther = new WFComponent("#primaryGoalBuyerOtherInput");
  const primaryGoalOtherText = new WFComponent(
    "#primaryGoalBuyerOtherTextInput"
  );

  // Get radio button elements for secondary goal
  const secondaryGoalPrice = new WFComponent("#secondaryGoalBuyerPriceInput");
  const secondaryGoalClosing = new WFComponent(
    "#secondaryGoalBuyerClosingInput"
  );
  const secondaryGoalTime = new WFComponent("#secondaryGoalBuyerTimeInput");
  const secondaryGoalOther = new WFComponent("#secondaryGoalBuyerOtherInput");
  const secondaryGoalOtherText = new WFComponent(
    "#secondaryGoalBuyerOtherTextInput"
  );

  // Handle visibility of "Other" input fields
  const handleOtherInputVisibility = (
    radio: WFComponent,
    input: WFComponent
  ) => {
    const isChecked = (radio.getElement() as HTMLInputElement).checked;
    input.setStyle({ display: isChecked ? "block" : "none" });
  };

  // Add event listeners for primary and secondary "Other" inputs
  primaryGoalOther.on("change", () => {
    handleOtherInputVisibility(primaryGoalOther, primaryGoalOtherText);
  });

  secondaryGoalOther.on("change", () => {
    handleOtherInputVisibility(secondaryGoalOther, secondaryGoalOtherText);
  });

  // Handle "Next Step" button click
  nextButton.on("click", (event) => {
    event.preventDefault(); // Prevent default form submission

    const isPrimaryGoalSelected =
      (primaryGoalPrice.getElement() as HTMLInputElement).checked ||
      (primaryGoalClosing.getElement() as HTMLInputElement).checked ||
      (primaryGoalTime.getElement() as HTMLInputElement).checked ||
      (primaryGoalOther.getElement() as HTMLInputElement).checked;

    const isSecondaryGoalSelected =
      (secondaryGoalPrice.getElement() as HTMLInputElement).checked ||
      (secondaryGoalClosing.getElement() as HTMLInputElement).checked ||
      (secondaryGoalTime.getElement() as HTMLInputElement).checked ||
      (secondaryGoalOther.getElement() as HTMLInputElement).checked;

    if (!isPrimaryGoalSelected || !isSecondaryGoalSelected) {
      // Show error message if any of the goals are not selected
      errorElement.setText(
        "Please select both the primary and secondary goals of the buyer."
      );
      errorElement.setStyle({ display: "block" });
    } else {
      // Clear any previous error messages
      errorElement.setText("");
      errorElement.setStyle({ display: "none" });

      // Store the selected primary and secondary goals
      let primaryGoal = "";
      let secondaryGoal = "";

      if ((primaryGoalPrice.getElement() as HTMLInputElement).checked) {
        primaryGoal = "Price";
      } else if (
        (primaryGoalClosing.getElement() as HTMLInputElement).checked
      ) {
        primaryGoal = "Closing Cost Assistance";
      } else if ((primaryGoalTime.getElement() as HTMLInputElement).checked) {
        primaryGoal = "Time Frame";
      } else if ((primaryGoalOther.getElement() as HTMLInputElement).checked) {
        primaryGoal = (
          primaryGoalOtherText.getElement() as HTMLInputElement
        ).value.trim();
      }

      if ((secondaryGoalPrice.getElement() as HTMLInputElement).checked) {
        secondaryGoal = "Price";
      } else if (
        (secondaryGoalClosing.getElement() as HTMLInputElement).checked
      ) {
        secondaryGoal = "Closing Cost Assistance";
      } else if ((secondaryGoalTime.getElement() as HTMLInputElement).checked) {
        secondaryGoal = "Time Frame";
      } else if (
        (secondaryGoalOther.getElement() as HTMLInputElement).checked
      ) {
        secondaryGoal = (
          secondaryGoalOtherText.getElement() as HTMLInputElement
        ).value.trim();
      }

      // Group the data for Step 4
      const stepFourData = {
        stepFour: {
          primaryGoal,
          secondaryGoal,
        },
      };

      // Update form data with the grouped data for Step 4
      updateFormData(stepFourData);

      // Proceed to the next slide
      goNextSlide();
    }
  });

  // Handle "Go Back" button click
  backButton.on("click", (event) => {
    event.preventDefault(); // Prevent default action
    goPreviousSlide(); // Go to the previous slide
  });
};
