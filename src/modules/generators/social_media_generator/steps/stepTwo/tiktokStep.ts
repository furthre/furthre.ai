import { WFComponent } from "@xatom/core";
import { goNextSlide, goPreviousSlide } from "../../utils/sliderUtils";
import { updateFormData } from "../../utils/formUtilities"; // Import the updateFormData function

export const initTikTokStep = (slider) => {
  const submitButton = new WFComponent("#submitTiktok");
  const errorElement = new WFComponent("#submitTiktokError");

  submitButton.on("click", () => {
    // Get selected TikTok content type (radio buttons)
    const selectedContent = document.querySelector(
      'input[name="tiktok_content_type"]:checked'
    ) as HTMLInputElement;

    if (!selectedContent) {
      // If no content type is selected, show error
      errorElement.setText("Please select a TikTok content type.");
      // Display the Error message
      errorElement.setStyle({ display: "block" });
    } else {
      // Clear the error message if content type is selected
      errorElement.setText("");
      // Hide the Error message
      errorElement.setStyle({ display: "none" });

      // Store the selected content type in localStorage
      updateFormData({ tiktok_content_type: selectedContent.value });

      // Move to the next slide
      goNextSlide();
    }
  });

  // Handle the back button for the TikTok step
  const backButton = new WFComponent("#backTiktok");
  backButton.on("click", () => {
    goPreviousSlide(); // Move to the previous slide when back button is clicked
  });
};
