import { WFComponent } from "@xatom/core";
import { goPreviousSlide } from "../utils/sliderUtils";
import {
  updateFormData,
  checkAndHandleSubmit,
  updateNextButtonText,
} from "../utils/formUtils";

export const initLifeUpdateStep = () => {
  console.log("initLifeUpdateStep");
  const submitButton = new WFComponent("#submitLifeUpdate");
  const backButton = new WFComponent("#backLifeUpdate");
  const errorElement = new WFComponent("#submitLifeUpdateError");

  const toneCheckboxes = document.querySelectorAll(
    'input[name="tone_select_life_update"]'
  );
  const maxSelections = 2;

  submitButton.on("click", () => {
    const lifeUpdateInput = document.querySelector(
      "#lifeUpdateInput"
    ) as HTMLTextAreaElement;
    const selectedTones = Array.from(toneCheckboxes)
      .filter((checkbox: HTMLInputElement) => checkbox.checked)
      .map((checkbox: HTMLInputElement) => checkbox.value);

    let isValid = true;
    errorElement.setText("");
    errorElement.setStyle({ display: "none" });

    if (!lifeUpdateInput.value.trim()) {
      isValid = false;
      errorElement.setText("Please enter your life update.");
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
      const lifeUpdateData = {
        lifeUpdate: lifeUpdateInput.value.trim(),
        tones: selectedTones,
      };

      updateFormData({ lifeUpdate: lifeUpdateData }); // Store as object

      // Check if this is the last step and submit the form if it is
      checkAndHandleSubmit(
        "#newsletterGeneratorForm",
        "/generators/newsletter"
      );
    }
  });

  toneCheckboxes.forEach((checkbox: HTMLInputElement) => {
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
  });

  backButton.on("click", () => {
    goPreviousSlide();
  });

  // Update the button text based on whether this is the last step
  updateNextButtonText();
};
