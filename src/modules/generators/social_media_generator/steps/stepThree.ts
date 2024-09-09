import { WFComponent } from "@xatom/core";
import { goNextSlide, goPreviousSlide } from "../utils/sliderUtils";
import { updateFormData } from "../utils/formUtilities"; // Import the updateFormData function

export const initStepThree = (slider) => {
  const submitButton = new WFComponent("#submitDescription");
  const errorElement = new WFComponent("#submitDescriptionError");
  const descriptionInput = new WFComponent("#descriptionInput");

  submitButton.on("click", () => {
    // Get the entered description from the textarea
    const description = (descriptionInput.getElement() as HTMLTextAreaElement)
      .value;

    if (!description.trim()) {
      // If description is empty, show error
      errorElement.setText("Please enter a description.");
      // Display the Error message
      errorElement.setStyle({ display: "block" });
    } else {
      // Clear the error message if a description is entered
      errorElement.setText("");
      // Hide the Error message
      errorElement.setStyle({ display: "none" });

      // Store the description in localStorage
      updateFormData({ content_description: description });

      // Move to the next slide
      goNextSlide();
    }
  });

  // Handle the back button
  const backButton = new WFComponent("#backDescription");
  backButton.on("click", () => {
    goPreviousSlide(); // Move to the previous slide when back button is clicked
  });
};
