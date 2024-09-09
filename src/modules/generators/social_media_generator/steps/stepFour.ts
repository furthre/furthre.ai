import { WFComponent } from "@xatom/core";
import { goNextSlide, goPreviousSlide } from "../utils/sliderUtils";
import { updateFormData } from "../utils/formUtilities"; // Import the updateFormData function

export const initSelectToneStep = (slider) => {
  const submitButton = new WFComponent("#submitTone");
  const errorElement = new WFComponent("#submitToneError");

  // Get all checkboxes for tone selection
  const toneCheckboxes = document.querySelectorAll('input[name="select_tone"]');
  const maxSelections = 3;

  submitButton.on("click", () => {
    // Filter checked checkboxes
    const selectedTones = Array.from(toneCheckboxes)
      .filter((checkbox: HTMLInputElement) => checkbox.checked)
      .map((checkbox: HTMLInputElement) => checkbox.value);

    if (selectedTones.length === 0) {
      // If no tone is selected, show an error
      errorElement.setText("Please select at least one tone.");
      errorElement.setStyle({ display: "block" });
    } else if (selectedTones.length > maxSelections) {
      // If more than 3 tones are selected, show an error
      errorElement.setText(`Please select up to ${maxSelections} tones.`);
      errorElement.setStyle({ display: "block" });
    } else {
      // Clear the error if the criteria are met
      errorElement.setText("");
      errorElement.setStyle({ display: "none" });

      // Store the selected tones in localStorage
      const toneData = selectedTones.join(", ");
      updateFormData({ select_tone: toneData });

      // Move to the next slide
      goNextSlide();
    }
  });

  // Limit the user to selecting a maximum of 3 tones
  toneCheckboxes.forEach((checkbox: HTMLInputElement) => {
    checkbox.addEventListener("change", () => {
      const selectedTones = Array.from(toneCheckboxes).filter(
        (checkbox: HTMLInputElement) => checkbox.checked
      );

      // Disable unselected checkboxes if 3 tones are already selected
      toneCheckboxes.forEach((box: HTMLInputElement) => {
        if (selectedTones.length >= maxSelections && !box.checked) {
          box.disabled = true;
        } else {
          box.disabled = false;
        }
      });
    });
  });

  // Handle the back button
  const backButton = new WFComponent("#backTone");
  backButton.on("click", () => {
    goPreviousSlide(); // Move to the previous slide when back button is clicked
  });
};
