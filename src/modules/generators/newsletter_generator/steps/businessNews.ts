import { WFComponent } from "@xatom/core";
import { goPreviousSlide } from "../utils/sliderUtils";
import {
  updateFormData,
  checkAndHandleSubmit,
  updateNextButtonText,
} from "../utils/formUtils";

export const initBusinessNewsStep = () => {
  const submitButton = new WFComponent("#submitBusinessNews");
  const backButton = new WFComponent("#backBusinessNews");
  const errorElement = new WFComponent("#submitBusinessNewsError");

  const toneCheckboxes = document.querySelectorAll(
    'input[name="tone_select_business"]'
  );
  const maxSelections = 2;

  submitButton.on("click", () => {
    const articleLinkInput = document.querySelector(
      "#articleLinkBusinessInput"
    ) as HTMLInputElement;
    const articleThoughtsInput = document.querySelector(
      "#articleThoughtsBusinessInput"
    ) as HTMLTextAreaElement;
    const selectedTones = Array.from(toneCheckboxes)
      .filter((checkbox: HTMLInputElement) => checkbox.checked)
      .map((checkbox: HTMLInputElement) => checkbox.value);

    let isValid = true;
    errorElement.setText("");
    errorElement.setStyle({ display: "none" });

    if (!articleLinkInput.value.trim()) {
      isValid = false;
      errorElement.setText("Please enter the article link.");
      errorElement.setStyle({ display: "block" });
    }

    if (!articleThoughtsInput.value.trim()) {
      isValid = false;
      errorElement.setText("Please enter your thoughts on the article.");
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
      const businessNewsData = {
        articleLink: articleLinkInput.value.trim(),
        articleThoughts: articleThoughtsInput.value.trim(),
        tones: selectedTones,
      };

      updateFormData({ businessNews: businessNewsData }); // Store as object

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
