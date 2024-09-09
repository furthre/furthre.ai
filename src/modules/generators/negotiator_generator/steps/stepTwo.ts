import { WFComponent, WFFormComponent } from "@xatom/core";
import { updateFormData } from "../utils/formUtils";
import {
  markSlideInactive,
  markSlideActive,
  goNextSlide,
  goPreviousSlide,
} from "../utils/sliderUtils";

export const initStepTwo = () => {
  const form = new WFFormComponent("#negotiatorGeneratorForm"); // Initialize form component
  const nextButton = new WFComponent("#submitStepTwo"); // Next step button
  const backButton = new WFComponent("#backStepTwo"); // Back button
  const errorElement = new WFComponent("#submitStepTwoError"); // Error message element

  // Get radio button elements for Buyer and Seller
  const buyerRadio = new WFComponent("#representationBuyer");
  const sellerRadio = new WFComponent("#representationSeller");

  // Handle "Next Step" button click
  nextButton.on("click", (event) => {
    event.preventDefault(); // Prevent default form submission

    const isBuyerSelected = (buyerRadio.getElement() as HTMLInputElement)
      .checked;
    const isSellerSelected = (sellerRadio.getElement() as HTMLInputElement)
      .checked;

    if (!isBuyerSelected && !isSellerSelected) {
      // Show error if no option is selected
      errorElement.setText(
        "Please select who you represent in this transaction."
      );
      errorElement.setStyle({ display: "block" });
    } else {
      // Clear error message
      errorElement.setText("");
      errorElement.setStyle({ display: "none" });

      let representation = "";

      // Determine representation type and handle conditional slide activation
      if (isBuyerSelected) {
        representation = "Buyer";
        // If Buyer is selected, activate Step 3, and 4 but deactivate Steps 5, 6, and 7
        markSlideActive("slideStep3");
        markSlideActive("slideStep4");
        markSlideInactive("slideStep5");
        markSlideInactive("slideStep6");
        markSlideInactive("slideStep7");
      } else if (isSellerSelected) {
        representation = "Seller";
        // If Seller is selected, activate Steps 3, 4, 5, 6, and 7
        markSlideInactive("slideStep3");
        markSlideInactive("slideStep4");
        markSlideActive("slideStep5");
        markSlideActive("slideStep6");
        markSlideActive("slideStep7");
      }

      // Group the data for Step 2
      const stepTwoData = {
        stepTwo: {
          representation: representation,
        },
      };

      // Update form data with the grouped data for Step 2
      updateFormData(stepTwoData);

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
