import { WFComponent, WFFormComponent } from "@xatom/core";
import { updateFormData } from "../utils/formUtils";
import { goNextSlide, goPreviousSlide } from "../utils/sliderUtils";

export const initStepSeven = () => {
  const form = new WFFormComponent("#negotiatorGeneratorForm"); // Initialize form component
  const nextButton = new WFComponent("#submitStepSeven"); // Next step button
  const backButton = new WFComponent("#backStepSeven"); // Back button
  const errorElement = new WFComponent("#submitStepSevenError"); // Error message element

  // Get radio button elements for primary goal of seller
  const primaryGoalPrice = new WFComponent("#primaryGoalSellerPriceInput");
  const primaryGoalClosing = new WFComponent("#primaryGoalSellerClosingInput");
  const primaryGoalTime = new WFComponent("#primaryGoalSellerTimeInput");
  const primaryGoalOther = new WFComponent("#primaryGoalSellerOtherInput");
  const primaryGoalOtherText = new WFComponent(
    "#primaryGoalSellerOtherTextInput"
  );

  // Get radio button elements for secondary goal of seller
  const secondaryGoalPrice = new WFComponent("#secondaryGoalSellerPriceInput");
  const secondaryGoalClosing = new WFComponent(
    "#secondaryGoalSellerClosingInput"
  );
  const secondaryGoalTime = new WFComponent("#secondaryGoalSellerTimeInput");
  const secondaryGoalOther = new WFComponent("#secondaryGoalSellerOtherInput");
  const secondaryGoalOtherText = new WFComponent(
    "#secondaryGoalSellerOtherTextInput"
  );

  // Handle visibility of "Other" input fields for primary and secondary goals
  const handleOtherInputVisibility = (
    radio: WFComponent,
    input: WFComponent
  ) => {
    const isChecked = (radio.getElement() as HTMLInputElement).checked;
    input.setStyle({ display: isChecked ? "block" : "none" });
  };

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
        "Please select both the primary and secondary goals of the seller."
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

      // Update form data with the selected goals
      updateFormData({
        stepSeven: {
          primaryGoal,
          secondaryGoal,
        },
      });

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
