import { WFComponent } from "@xatom/core";
import { goPreviousSlide } from "../utils/sliderUtils";
import {
  updateFormData,
  checkAndHandleSubmit,
  updateNextButtonText,
} from "../utils/formUtils";

export const initNewListingsStep = () => {
  const submitButton = new WFComponent("#submitNewListings");
  const backButton = new WFComponent("#backNewListings");
  const errorElement = new WFComponent("#submitNewListingsError");

  submitButton.on("click", () => {
    const propertyAddressInput = document.querySelector(
      "#propertyAddressInput"
    ) as HTMLInputElement;
    const squareFootageInput = document.querySelector(
      "#squareFootageInput"
    ) as HTMLInputElement;
    const bedroomsInput = document.querySelector(
      "#bedroomsInput"
    ) as HTMLInputElement;
    const bathroomsInput = document.querySelector(
      "#bathroomsInput"
    ) as HTMLInputElement;
    const vibeInput = document.querySelector("#vibeInput") as HTMLInputElement;
    const hotSpotsInput = document.querySelector(
      "#hotSpotsInput"
    ) as HTMLInputElement;
    const coolFeatureInput = document.querySelector(
      "#coolFeatureInput"
    ) as HTMLInputElement;
    const additionalInfoInput = document.querySelector(
      "#additionalInfoInput"
    ) as HTMLTextAreaElement;

    let isValid = true;
    errorElement.setText("");
    errorElement.setStyle({ display: "none" });

    if (!propertyAddressInput.value.trim()) {
      isValid = false;
      errorElement.setText("Please enter the property address.");
      errorElement.setStyle({ display: "block" });
    }
    if (!squareFootageInput.value.trim()) {
      isValid = false;
      errorElement.setText("Please enter the square footage.");
      errorElement.setStyle({ display: "block" });
    }
    if (!bedroomsInput.value.trim()) {
      isValid = false;
      errorElement.setText("Please enter the number of bedrooms.");
      errorElement.setStyle({ display: "block" });
    }
    if (!bathroomsInput.value.trim()) {
      isValid = false;
      errorElement.setText("Please enter the number of bathrooms.");
      errorElement.setStyle({ display: "block" });
    }
    if (!vibeInput.value.trim()) {
      isValid = false;
      errorElement.setText("Please enter three words to describe the vibe.");
      errorElement.setStyle({ display: "block" });
    }
    if (!hotSpotsInput.value.trim()) {
      isValid = false;
      errorElement.setText("Please enter two local attractions or hot spots.");
      errorElement.setStyle({ display: "block" });
    }
    if (!coolFeatureInput.value.trim()) {
      isValid = false;
      errorElement.setText("Please enter one cool feature about the house.");
      errorElement.setStyle({ display: "block" });
    }

    if (isValid) {
      const newListingData = {
        propertyAddress: propertyAddressInput.value.trim(),
        squareFootage: squareFootageInput.value.trim(),
        bedrooms: bedroomsInput.value.trim(),
        bathrooms: bathroomsInput.value.trim(),
        vibe: vibeInput.value.trim(),
        hotSpots: hotSpotsInput.value.trim(),
        coolFeature: coolFeatureInput.value.trim(),
        additionalInfo: additionalInfoInput.value.trim(),
      };

      updateFormData({ newListing: newListingData });

      // Check if this is the last step and submit the form if it is
      checkAndHandleSubmit(
        "#newsletterGeneratorForm",
        "/generators/newsletter"
      );
    }
  });

  backButton.on("click", () => {
    goPreviousSlide();
  });

  // Update the button text based on whether this is the last step
  updateNextButtonText();
};
