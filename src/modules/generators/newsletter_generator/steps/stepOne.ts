import { WFComponent, WFFormComponent } from "@xatom/core";
import { updateFormData } from "../utils/formUtils";
import { goNextSlide } from "../utils/sliderUtils";

export const initStepOne = () => {
  const form = new WFFormComponent("#newsletterGeneratorForm");
  const nextButton = new WFComponent("#submitStepOne");
  const errorElement = new WFComponent("#submitStepOneError");
  const nameInput = new WFComponent("#nameInput");
  const dateInput = new WFComponent("#dateInput");

  // Get the input elements
  const nameInputElement = nameInput.getElement() as HTMLInputElement;
  const dateInputElement = dateInput.getElement() as HTMLInputElement;

  // Handle the next step button click
  nextButton.on("click", (event) => {
    event.preventDefault(); // Prevent default button action

    const name = nameInputElement.value.trim();
    const date = dateInputElement.value.trim();

    if (!name) {
      errorElement.setText("Please enter your name.");
      errorElement.setStyle({ display: "block" });
    } else if (!date) {
      errorElement.setText(
        "Please enter the month and year for the newsletter."
      );
      errorElement.setStyle({ display: "block" });
    } else {
      errorElement.setText("");
      errorElement.setStyle({ display: "none" });

      // Update form data with name and date
      updateFormData({ name, date });

      // Proceed to the next slide
      goNextSlide();
    }
  });
};
