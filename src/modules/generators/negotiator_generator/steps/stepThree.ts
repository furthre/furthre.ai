import { WFComponent, WFFormComponent } from "@xatom/core";
import { updateFormData } from "../utils/formUtils";
import { goNextSlide, goPreviousSlide } from "../utils/sliderUtils";

export const initStepThree = () => {
  const form = new WFFormComponent("#negotiatorGeneratorForm"); // Using WFFormComponent for form
  const nextButton = new WFComponent("#submitStepThree"); // For Next button
  const backButton = new WFComponent("#backStepThree"); // For Back button
  const errorElement = new WFComponent("#submitStepThreeError"); // For error messages

  // Get input elements
  const addressInput = new WFComponent("#addressOfPropertyBuyerInput");
  const closingDateInput = new WFComponent("#closingDateBuyerInput");
  const initialOfferInput = new WFComponent("#initialOfferBuyerInput");
  const listPriceInput = new WFComponent("#listPriceBuyerInput");
  const comparablePriceInput = new WFComponent("#buyerComparablePriceInput");
  const listPriceOpinionInputs = document.getElementsByName(
    "list_price_opinion_buyer"
  );

  // Get the input elements as HTMLInputElements
  const addressInputElement = addressInput.getElement() as HTMLInputElement;
  const closingDateInputElement =
    closingDateInput.getElement() as HTMLInputElement;
  const initialOfferInputElement =
    initialOfferInput.getElement() as HTMLInputElement;
  const listPriceInputElement = listPriceInput.getElement() as HTMLInputElement;
  const comparablePriceInputElement =
    comparablePriceInput.getElement() as HTMLInputElement;

  // Handle "Next Step" button click
  nextButton.on("click", (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const address = addressInputElement.value.trim();
    const closingDate = closingDateInputElement.value.trim();
    const initialOffer = initialOfferInputElement.value.trim();
    const listPrice = listPriceInputElement.value.trim();
    const comparablePrice = comparablePriceInputElement.value.trim();
    let listPriceOpinion = "";

    // Check which radio button for list price opinion is selected
    for (let i = 0; i < listPriceOpinionInputs.length; i++) {
      const input = listPriceOpinionInputs[i] as HTMLInputElement;
      if (input.checked) {
        listPriceOpinion = input.value;
        break;
      }
    }

    // Validate input fields
    if (!address) {
      showError("Please provide the address of the property.");
    } else if (!closingDate) {
      showError("Please specify the closing date.");
    } else if (!initialOffer) {
      showError("Please enter your initial offer price.");
    } else if (!listPrice) {
      showError("Please enter the list price of the property.");
    } else if (!comparablePrice) {
      showError("Please provide the price range of comparable homes.");
    } else if (!listPriceOpinion) {
      showError(
        "Please select an option for what you think of the list price."
      );
    } else {
      // Clear any previous error messages
      errorElement.setText("");
      errorElement.setStyle({ display: "none" });

      // Group the data for Step 3
      const stepThreeData = {
        stepThree: {
          address,
          closingDate,
          initialOffer,
          listPrice,
          comparablePrice,
          listPriceOpinion, // Add the selected opinion on list price
        },
      };

      // Update form data with the grouped data for Step 3
      updateFormData(stepThreeData);

      // Proceed to the next slide
      goNextSlide();
    }
  });

  // Handle "Go Back" button click
  backButton.on("click", (event) => {
    event.preventDefault(); // Prevent default action
    goPreviousSlide(); // Go to the previous slide
  });

  // Function to show error messages
  const showError = (message: string) => {
    errorElement.setText(message);
    errorElement.setStyle({ display: "block" });
  };
};
