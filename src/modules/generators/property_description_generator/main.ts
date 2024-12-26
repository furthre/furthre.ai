import { initializeSlider } from "./utils/sliderUtils";
import { initStepOne } from "./steps/stepOne";
import { initStepTwo } from "./steps/stepTwo";
import { initStepThree } from "./steps/stepThree";
import { onReady } from "@xatom/core";
import { preventFormSubmitOnEnter } from "./utils/formUtils";
import { initProgressBar } from "./utils/progressBar";

export function initializePropertyDescriptionGenerator() {
  onReady(() => {
    const slider = initializeSlider(".multi-step_slider");
    preventFormSubmitOnEnter("#propertyDescriptionGenerator");

    // Initialize steps
    initStepOne();
    initStepTwo();
    initStepThree();

    // Initialize progress bar
    const { completeProgress } = initProgressBar(slider);

  });
}
