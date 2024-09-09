import { WFComponent, WFFormComponent } from "@xatom/core";
import { updateFormData } from "../utils/formUtils";
import {
  goNextSlide,
  goPreviousSlide,
  markSlideInactive,
  markSlideActive,
} from "../utils/sliderUtils";

export const initStepFive = () => {
  const form = new WFFormComponent("#negotiatorGeneratorForm"); // Initialize form component
  const nextButton = new WFComponent("#submitStepFive"); // Next step button
  const backButton = new WFComponent("#backStepFive"); // Back button
  const errorElement = new WFComponent("#submitStepFiveError"); // Error message element

  // Get input elements for seller property information
  const addressInput = new WFComponent("#addressOfPropertySellerInput");
  const closingDateInput = new WFComponent("#closingDateSellerInput");
  const initialOfferInput = new WFComponent("#initialOfferSellerInput");
  const listPriceInput = new WFComponent("#listPriceSellerInput");

  // Get radio button elements for list price opinion
  const priceOpinionUnderpriced = new WFComponent(
    "#sellerPriceOpinionUnderpriced"
  );
  const priceOpinionJustRight = new WFComponent("#sellerPriceOpinionJustRight");
  const priceOpinionOverpriced = new WFComponent(
    "#sellerPriceOpinionOverpriced"
  );

  // Get radio button elements for home comparison
  const comparisonPoor = new WFComponent("#sellerComparisonPoor");
  const comparisonSame = new WFComponent("#sellerComparisonSame");
  const comparisonBetter = new WFComponent("#sellerComparisonBetter");

  // Get radio button elements for price change
  const priceChangeTrue = new WFComponent("#priceChangeTrue");
  const priceChangeFalse = new WFComponent("#priceChangeFalse");

  // Handle "Next Step" button click
  nextButton.on("click", (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get input values for seller property information
    const address = (
      addressInput.getElement() as HTMLInputElement
    ).value.trim();
    const closingDate = (
      closingDateInput.getElement() as HTMLInputElement
    ).value.trim();
    const initialOffer = (
      initialOfferInput.getElement() as HTMLInputElement
    ).value.trim();
    const listPrice = (
      listPriceInput.getElement() as HTMLInputElement
    ).value.trim();

    // Check for selected options
    const priceOpinion = (
      priceOpinionUnderpriced.getElement() as HTMLInputElement
    ).checked
      ? "Underpriced"
      : (priceOpinionJustRight.getElement() as HTMLInputElement).checked
      ? "Just Right"
      : (priceOpinionOverpriced.getElement() as HTMLInputElement).checked
      ? "Overpriced"
      : "";

    const homeComparison = (comparisonPoor.getElement() as HTMLInputElement)
      .checked
      ? "Poor"
      : (comparisonSame.getElement() as HTMLInputElement).checked
      ? "Same"
      : (comparisonBetter.getElement() as HTMLInputElement).checked
      ? "Better"
      : "";

    const priceChange = (priceChangeTrue.getElement() as HTMLInputElement)
      .checked
      ? "Yes"
      : (priceChangeFalse.getElement() as HTMLInputElement).checked
      ? "No"
      : "";

    // Validation: Ensure all fields have a value
    if (
      !address ||
      !closingDate ||
      !initialOffer ||
      !listPrice ||
      !priceOpinion ||
      !homeComparison ||
      !priceChange
    ) {
      errorElement.setText("Please fill in all the fields.");
      errorElement.setStyle({ display: "block" });
    } else {
      // Clear any previous error messages
      errorElement.setText("");
      errorElement.setStyle({ display: "none" });

      // Group the data for Step 5
      const stepFiveData = {
        stepFive: {
          address,
          closingDate,
          initialOffer,
          listPrice,
          priceOpinion,
          homeComparison,
          priceChange,
        },
      };

      // Update form data with the grouped data for Step 5
      updateFormData(stepFiveData);

      // Conditional logic for price change
      if (priceChange === "Yes") {
        // If price change is "Yes", proceed to Step 6
        markSlideActive("slideStep6"); // Ensure Step 6 is active
        goNextSlide(); // Proceed to Step 6
      } else if (priceChange === "No") {
        // If price change is "No", mark Step 6 as inactive and go to Step 7
        markSlideInactive("slideStep6"); // Mark Step 6 as inactive
        goNextSlide(); // Proceed to Step 7 (skipping Step 6)
      }
    }
  });

  // Handle "Go Back" button click
  backButton.on("click", (event) => {
    event.preventDefault(); // Prevent default action
    goPreviousSlide(); // Go to the previous slide
  });
};
