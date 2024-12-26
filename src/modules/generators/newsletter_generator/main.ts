// main.ts
import { onReady } from "@xatom/core";
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
import { initProgressBar } from "./utils/progressBar"; // <-- 1) import the new file

export function initializeNewsletterGenerator() {
  onReady(() => {
    // Prevent form submission on Enter key press
    preventFormSubmitOnEnter("#newsletterGeneratorForm");

    // Initialize the slider
    const slider = initializeSlider(".multi-step_slider");

    // Initialize steps
    initStepOne();
    initStepTwo();
    initPersonalNoteStep();
    initBusinessNewsStep();
    initLifeUpdateStep();
    initNewListingsStep();
    initSomethingFunStep();
    initTestimonialStep();

    // 2) Finally, initialize the progress bar
    //    Set "true" if you prefer showing "XX%" instead of "Step X of Y"
    initProgressBar(slider, false);
  });
}
