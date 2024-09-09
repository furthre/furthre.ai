import { WFComponent, WFFormComponent } from "@xatom/core";
import { updateFormData, checkAndHandleSubmit } from "../utils/formUtils";
import { goPreviousSlide } from "../utils/sliderUtils";

export const initStepTwelve = () => {
  const form = new WFFormComponent("#negotiatorGeneratorForm");
  const nextButton = new WFComponent("#submitStepTwelve");
  const backButton = new WFComponent("#backStepTwelve");
  const errorElement = new WFComponent("#submitStepTwelveError");

  // Get field elements
  const listBuyerRequestsInput = document.getElementById(
    "listBuyerRequestsInput"
  ) as HTMLTextAreaElement;
  const listSellerRequestsInput = document.getElementById(
    "listSellerRequestsInput"
  ) as HTMLTextAreaElement;
  const otherInfoSellerInput = document.getElementById(
    "otherInfoSellerInput"
  ) as HTMLTextAreaElement;

  const sellerRequestStatusOptions = document.getElementsByName(
    "seller_request_status"
  ) as NodeListOf<HTMLInputElement>;

  // Handle "Finish & Submit" button click
  nextButton.on("click", (event) => {
    event.preventDefault();

    const listBuyerRequestsValue = listBuyerRequestsInput.value.trim();
    const listSellerRequestsValue = listSellerRequestsInput.value.trim();
    const otherInfoSellerValue = otherInfoSellerInput.value.trim();

    const sellerRequestStatusValue = Array.from(
      sellerRequestStatusOptions
    ).find((option) => option.checked)?.value;

    // Validate required fields
    if (
      !listBuyerRequestsValue ||
      !listSellerRequestsValue ||
      !sellerRequestStatusValue
    ) {
      errorElement.setText("Please complete all required fields.");
      errorElement.setStyle({ display: "block" });
      return;
    }

    // Prepare form data
    updateFormData({
      stepTwelve: {
        listBuyerRequests: listBuyerRequestsValue,
        listSellerRequests: listSellerRequestsValue,
        sellerRequestStatus: sellerRequestStatusValue,
        otherInfoSeller: otherInfoSellerValue,
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
