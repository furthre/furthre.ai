import { WFComponent } from "@xatom/core";
import { goNextSlide, goPreviousSlide } from "../utils/sliderUtils";
import { updateFormData } from "../utils/formUtilities"; // Import the updateFormData function

export const initWritingStyleStep = (slider) => {
  const submitButton = new WFComponent("#submitStyle");
  const errorElement = new WFComponent("#submitStyleError");

  // Get all checkboxes for writing style selection
  const styleCheckboxes = document.querySelectorAll<HTMLInputElement>(
    'input[name="select_style"]'
  );
  const otherCheckbox = document.querySelector<HTMLInputElement>("#styleOther");
  const otherTextInput = document.querySelector<HTMLInputElement>("#otherText");
  const otherTextError = new WFComponent("#otherTextError");
  const maxSelections = 3;

  // Initially hide the "Other" text input field
  otherTextInput.style.display = "none";

  // Event listener to handle "Other" checkbox visibility
  otherCheckbox.addEventListener("change", () => {
    if (otherCheckbox.checked) {
      otherTextInput.style.display = "block"; // Show the text input
    } else {
      otherTextInput.style.display = "none"; // Hide the text input
      otherTextInput.value = ""; // Clear the text field if it's hidden
    }
  });

  submitButton.on("click", () => {
    // Filter checked checkboxes
    const selectedStyles = Array.from(styleCheckboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    // Check if the "Other" option is selected and validate input
    const isOtherSelected = otherCheckbox.checked;
    const otherText = otherTextInput.value.trim();

    if (selectedStyles.length === 0) {
      // If no style is selected, show an error
      errorElement.setText("Please select at least one writing style.");
      errorElement.setStyle({ display: "block" });
    } else if (selectedStyles.length > maxSelections) {
      // If more than 3 styles are selected, show an error
      errorElement.setText(`Please select up to ${maxSelections} styles.`);
      errorElement.setStyle({ display: "block" });
    } else if (isOtherSelected && !otherText) {
      // If "Other" is selected but no text is entered, show an error
      otherTextError.setText("Please specify the other writing style.");
      otherTextError.setStyle({ display: "block" });
    } else {
      // Clear the error if the criteria are met
      errorElement.setText("");
      errorElement.setStyle({ display: "none" });
      otherTextError.setText("");
      otherTextError.setStyle({ display: "none" });

      // Combine selected styles and "Other" input (if any)
      const styleData = selectedStyles.join(", ");
      const finalStyleData = isOtherSelected
        ? `${styleData}, ${otherText}`
        : styleData;

      // Store the selected styles in localStorage
      updateFormData({ select_style: finalStyleData });

      // Move to the next slide
      goNextSlide();
    }
  });

  // Limit the user to selecting a maximum of 3 styles
  styleCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const selectedStyles = Array.from(styleCheckboxes).filter(
        (checkbox) => checkbox.checked
      );

      styleCheckboxes.forEach((box) => {
        const parentLabel = box.parentElement; // Get the parent label element

        if (selectedStyles.length >= maxSelections && !box.checked) {
          box.disabled = true; // Disable the checkbox if 3 are selected
          parentLabel?.classList.add("is-disabled"); // Add the "is-disabled" class to the parent
        } else {
          box.disabled = false; // Enable the checkbox if less than 3 are selected
          parentLabel?.classList.remove("is-disabled"); // Remove the "is-disabled" class from the parent
        }
      });
    });
  });

  // Handle the back button
  const backButton = new WFComponent("#backStyle");
  backButton.on("click", () => {
    goPreviousSlide(); // Move to the previous slide when back button is clicked
  });
};
