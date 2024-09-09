import { initializeSlider } from "./utils/sliderUtils";
import { preventFormSubmitOnEnter } from "./utils/formUtils";
import { onReady } from "@xatom/core";
import { initStepOne } from "./steps/stepOne";
import { initStepTwo } from "./steps/stepTwo";
import { initStepThree } from "./steps/stepThree";
import { initStepFour } from "./steps/stepFour";
import { initStepFive } from "./steps/stepFive";
import { initStepSix } from "./steps/stepSix";
import { initStepSeven } from "./steps/stepSeven";
import { initStepEight } from "./steps/stepEight";
import { initStepNine } from "./steps/stepNine";
import { initStepTen } from "./steps/stepTen";
import { initStepEleven } from "./steps/stepEleven";
import { initStepTwelve } from "./steps/stepTwelve";

export function initializeNegotiatorGenerator() {
  onReady(() => {
    // Prevent form submission on Enter key press
    preventFormSubmitOnEnter("#formNegotiatorGenerator");

    // Initialize the slider for the multi-step form
    const slider = initializeSlider(".multi-step_slider");

    // Initialize the steps
    initStepOne();
    initStepTwo();
    initStepThree();
    initStepFour();
    initStepFive();
    initStepSix();
    initStepSeven();
    initStepEight();
    initStepNine();
    initStepTen();
    initStepEleven();
    initStepTwelve();
  });
}
