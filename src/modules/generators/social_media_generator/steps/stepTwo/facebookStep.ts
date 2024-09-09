import { WFComponent } from "@xatom/core";
import { goNextSlide, goPreviousSlide } from "../../utils/sliderUtils";
import { updateFormData } from "../../utils/formUtilities"; // Import the updateFormData function

export const initFacebookStep = (slider) => {
  const submitButton = new WFComponent("#submitFacebook");
  const errorElement = new WFComponent("#submitFacebookError");

  submitButton.on("click", () => {
    // Get selected Facebook content type (radio buttons)
    const selectedContent = document.querySelector(
      'input[name="facebook_content_type"]:checked'
    ) as HTMLInputElement;

    if (!selectedContent) {
      // If no content type is selected, show error
      errorElement.setText("Please select a Facebook content type.");
      // Display the Error message
      errorElement.setStyle({ display: "block" });
    } else {
      // Clear the error message if content type is selected
      errorElement.setText("");
      errorElement.setStyle({ display: "none" });

      // Store the selected content type in localStorage
      updateFormData({ facebook_content_type: selectedContent.value });

      // Move to the next slide
      goNextSlide();
    }
  });

  // Handle the back button for the Facebook step
  const backButton = new WFComponent("#backFacebook");

  // Ensure the back button calls goPreviousSlide
  backButton.on("click", () => {
    goPreviousSlide(); // This should correctly go to the previous slide
  });
};
