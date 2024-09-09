import { WFComponent } from "@xatom/core";
import { goPreviousSlide } from "../utils/sliderUtils";
import {
  updateFormData,
  checkAndHandleSubmit,
  updateNextButtonText,
} from "../utils/formUtils";

export const initPersonalNoteStep = () => {
  const submitButton = new WFComponent("#submitPersonalNote");
  const backButton = new WFComponent("#backPersonalNote");
  const errorElement = new WFComponent("#submitPersonalNoteError");

  const toneCheckboxes = document.querySelectorAll(
    'input[name="tone_select_personal"]'
  );
  const maxSelections = 2;

  // Add the event listener for the submit button only once
  if (!submitButton.getElement().dataset.listenerAdded) {
    submitButton.on("click", () => {
      const personalNoteInput = document.querySelector(
        "#personalNoteInput"
      ) as HTMLTextAreaElement;
      const selectedTones = Array.from(toneCheckboxes)
        .filter((checkbox: HTMLInputElement) => checkbox.checked)
        .map((checkbox: HTMLInputElement) => checkbox.value);

      let isValid = true;
      errorElement.setText("");
      errorElement.setStyle({ display: "none" });

      if (!personalNoteInput.value.trim()) {
        isValid = false;
        errorElement.setText("Please enter your personal note.");
        errorElement.setStyle({ display: "block" });
      }

      if (selectedTones.length === 0) {
        isValid = false;
        errorElement.setText("Please select at least one tone.");
        errorElement.setStyle({ display: "block" });
      } else if (selectedTones.length > maxSelections) {
        isValid = false;
        errorElement.setText(`Please select up to ${maxSelections} tones.`);
        errorElement.setStyle({ display: "block" });
      }

      if (isValid) {
        const personalNoteData = {
          personalNote: personalNoteInput.value.trim(),
          tones: selectedTones,
        };

        updateFormData({ personalNote: personalNoteData }); // Store as object

        // Check if this is the last step and submit the form if it is
        checkAndHandleSubmit(
          "#newsletterGeneratorForm",
          "/generators/newsletter"
        );
      }
    });

    // Mark that the event listener was added
    submitButton.getElement().dataset.listenerAdded = "true";
  }

  toneCheckboxes.forEach((checkbox: HTMLInputElement) => {
    // Add the event listener for each checkbox only once
    if (!checkbox.dataset.listenerAdded) {
      checkbox.addEventListener("change", () => {
        const selectedTones = Array.from(toneCheckboxes).filter(
          (checkbox: HTMLInputElement) => checkbox.checked
        );

        toneCheckboxes.forEach((box: HTMLInputElement) => {
          if (selectedTones.length >= maxSelections && !box.checked) {
            box.disabled = true;
          } else {
            box.disabled = false;
          }
        });
      });

      // Mark that the event listener was added
      checkbox.dataset.listenerAdded = "true";
    }
  });

  backButton.on("click", () => {
    goPreviousSlide();
  });

  // Update the button text based on whether this is the last step
  updateNextButtonText();
};
