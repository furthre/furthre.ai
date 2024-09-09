import { WFComponent, WFFormComponent } from "@xatom/core";
import { updateFormData, checkAndHandleSubmit } from "../utils/formUtils";
import { goPreviousSlide } from "../utils/sliderUtils";

export const initStepEleven = () => {
  const form = new WFFormComponent("#negotiatorGeneratorForm");
  const nextButton = new WFComponent("#submitStepEleven");
  const backButton = new WFComponent("#backStepEleven");
  const errorElement = new WFComponent("#submitStepElevenError");

  // Get field elements
  const listInspectionSellerWantInput = new WFComponent(
    "#listInspectionSellerWantInput"
  );
  const listInspectionSellerRequiredInput = new WFComponent(
    "#listInspectionSellerRequiredInput"
  );
  const otherInfoBuyerInput = new WFComponent("#otherInfoBuyerInput");

  // Handle "Finish & Submit" button click
  nextButton.on("click", (event) => {
    event.preventDefault();

    const listInspectionSellerWantValue = (
      listInspectionSellerWantInput.getElement() as HTMLInputElement
    ).value.trim();
    const listInspectionSellerRequiredValue = (
      listInspectionSellerRequiredInput.getElement() as HTMLInputElement
    ).value.trim();
    const otherInfoBuyerValue = (
      otherInfoBuyerInput.getElement() as HTMLInputElement
    ).value.trim();

    // Validate required fields
    if (!listInspectionSellerWantValue || !listInspectionSellerRequiredValue) {
      errorElement.setText("Please complete all required fields.");
      errorElement.setStyle({ display: "block" });
      return;
    }

    // Prepare form data
    updateFormData({
      stepEleven: {
        listInspectionSellerWant: listInspectionSellerWantValue,
        listInspectionSellerRequired: listInspectionSellerRequiredValue,
        otherInfoBuyer: otherInfoBuyerValue,
      },
    });

    // Submit the form
    checkAndHandleSubmit("#negotiatorGeneratorForm", "/generators/negotiator");
  });

  // Handle "Go Back" button click
  backButton.on("click", (event) => {
    event.preventDefault();
    goPreviousSlide(); // Navigate to the previous slide
  });
};
