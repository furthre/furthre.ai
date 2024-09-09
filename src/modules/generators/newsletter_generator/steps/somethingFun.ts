import { WFComponent } from "@xatom/core";
import { goPreviousSlide } from "../utils/sliderUtils";
import {
  updateFormData,
  checkAndHandleSubmit,
  updateNextButtonText,
} from "../utils/formUtils";

export const initSomethingFunStep = () => {
  const submitButton = new WFComponent("#submitSomethingFun");
  const backButton = new WFComponent("#backSomethingFun");
  const errorElement = new WFComponent("#submitSomethingFunError");

  submitButton.on("click", () => {
    const articleLinkFunInput = document.querySelector(
      "#articleLinkFunInput"
    ) as HTMLInputElement;
    const articleThoughtsFunInput = document.querySelector(
      "#articleThoughtsFunInput"
    ) as HTMLTextAreaElement;

    let isValid = true;
    errorElement.setText("");
    errorElement.setStyle({ display: "none" });

    if (!articleLinkFunInput.value.trim()) {
      isValid = false;
      errorElement.setText("Please enter the link to share.");
      errorElement.setStyle({ display: "block" });
    }

    if (!articleThoughtsFunInput.value.trim()) {
      isValid = false;
      errorElement.setText("Please enter your thoughts to share.");
      errorElement.setStyle({ display: "block" });
    }

    if (isValid) {
      const somethingFunData = {
        articleLink: articleLinkFunInput.value.trim(),
        articleThoughts: articleThoughtsFunInput.value.trim(),
      };

      // Update form data in local storage
      updateFormData({ somethingFun: somethingFunData });

      // Check if this is the last step and submit the form if it is
      checkAndHandleSubmit(
        "#newsletterGeneratorForm",
        "/generators/newsletter"
      );
    }
  });

  backButton.on("click", () => {
    goPreviousSlide();
  });

  // Update the button text based on whether this is the last step
  updateNextButtonText();
};
