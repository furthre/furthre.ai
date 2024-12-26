import { WFComponent, WFFormComponent } from "@xatom/core";
import { updateFormData } from "../utils/formUtils";
import { goNextSlide } from "../utils/sliderUtils";
// import { apiClient } from "../../../api/apiConfig"; // Import the apiClient (commented out)

export const initStepOne = () => {
  const form = new WFFormComponent("#propertyDescriptionGenerator");
  const nextButton = new WFComponent("#submitStepOne");
  const errorElement = new WFComponent("#submitStepOneError");
  const addressInput = new WFComponent("#propertyAddressInput");

  // NEW: Inputs moved from Step Three to Step One
  const squareFootageInput = new WFComponent("#squareFootageInput");
  const lotSizeInput = new WFComponent("#lotSizeInput");
  const bedroomsInput = new WFComponent("#bedroomsInput");
  const bathroomsInput = new WFComponent("#bathroomsInput");

  const addressElement = addressInput.getElement() as HTMLInputElement;
  const squareFootageElement = squareFootageInput.getElement() as HTMLInputElement;
  const lotSizeElement = lotSizeInput.getElement() as HTMLInputElement;
  const bedroomsElement = bedroomsInput.getElement() as HTMLInputElement;
  const bathroomsElement = bathroomsInput.getElement() as HTMLInputElement;

  // Handle the next step button click
  nextButton.on("click", (event) => {
    event.preventDefault(); // Prevent default button action

    const address = addressElement.value.trim();
    const squareFootage = squareFootageElement.value.trim();
    const lotSize = lotSizeElement.value.trim();
    const bedrooms = bedroomsElement.value.trim();
    const bathrooms = bathroomsElement.value.trim();

    // Basic validation: Require all fields
    if (!address || !squareFootage || !lotSize || !bedrooms || !bathrooms) {
      errorElement.setText("Please fill out all fields.");
      errorElement.setStyle({ display: "block" });
    } else {
      // Hide error if all fields are filled
      errorElement.setText("");
      errorElement.setStyle({ display: "none" });

      // Update form data in localStorage
      updateFormData({
        property_address: address,
        square_footage: squareFootage,
        lot_size: lotSize,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
      });

      // Move to next slide
      goNextSlide();
    }
  });
};
