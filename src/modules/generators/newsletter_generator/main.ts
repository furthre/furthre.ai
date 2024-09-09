import { initializeSlider } from "./utils/sliderUtils";
import { initStepOne } from "./steps/stepOne";
import { initStepTwo } from "./steps/stepTwo";
import { initPersonalNoteStep } from "./steps/personalNote";
import { initBusinessNewsStep } from "./steps/businessNews";
import { initLifeUpdateStep } from "./steps/lifeUpdate";
import { initNewListingsStep } from "./steps/newListings";
import { initSomethingFunStep } from "./steps/somethingFun";
import { initTestimonialStep } from "./steps/testimonials";
import { preventFormSubmitOnEnter } from "./utils/formUtils";
import { onReady } from "@xatom/core";

export function initializeNewsletterGenerator() {
  onReady(() => {
    // Prevent form submission on Enter key press
    preventFormSubmitOnEnter("#newsletterGeneratorForm");

    // Initialize the slider for the multi-step form
    const slider = initializeSlider(".multi-step_slider");

    // Initialize the steps
    initStepOne();
    initStepTwo();
    initPersonalNoteStep();
    initBusinessNewsStep();
    initLifeUpdateStep();
    initNewListingsStep();
    initSomethingFunStep();
    initTestimonialStep();
  });
}
