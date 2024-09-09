import { initializeSlider } from "./utils/sliderUtils";
import { initStepOne } from "./steps/stepOne";
import { initStepTwo } from "./steps/stepTwo";
import { initStepThree } from "./steps/stepThree";
import { onReady } from "@xatom/core";
import { preventFormSubmitOnEnter } from "./utils/formUtils";

export function initializePropertyDescriptionGenerator() {
  onReady(() => {
    const slider = initializeSlider(".multi-step_slider");
    // Prevent form submission on Enter key press
    preventFormSubmitOnEnter("#propertyDescriptionGenerator");

    // Initialize the first step
    initStepOne();
    // Initialize the second step
    initStepTwo();
    // Initialize the third step
    initStepThree();
  });
}
