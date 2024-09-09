import { WFComponent } from "@xatom/core";
import { goNextSlide, goPreviousSlide } from "../../utils/sliderUtils";
import { updateFormData } from "../../utils/formUtilities"; // Import the updateFormData function

export const initPinterestStep = (slider) => {
  const submitButton = new WFComponent("#submitPinterest");
  const errorElement = new WFComponent("#submitPinterestError");

  submitButton.on("click", () => {
    // Get selected Pinterest content type (radio buttons)
    const selectedContent = document.querySelector(
      'input[name="pinterest_content_type"]:checked'
    ) as HTMLInputElement;

    if (!selectedContent) {
      // If no content type is selected, show error
      errorElement.setText("Please select a Pinterest content type.");
      // Display the Error message
      errorElement.setStyle({ display: "block" });
    } else {
      // Clear the error message if content type is selected
      errorElement.setText("");
      // Hide the Error message
      errorElement.setStyle({ display: "none" });

      // Store the selected content type in localStorage
      updateFormData({ pinterest_content_type: selectedContent.value });

      // Move to the next slide
      goNextSlide();
    }
  });

  // Handle the back button for the Pinterest step
  const backButton = new WFComponent("#backPinterest");
  backButton.on("click", () => {
    goPreviousSlide(); // Move to the previous slide when back button is clicked
  });
};
