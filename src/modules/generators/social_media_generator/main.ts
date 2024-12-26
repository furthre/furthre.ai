import { onReady } from "@xatom/core";
import { initializeSlider } from "./utils/sliderUtils";
import { initStepOne } from "./steps/stepOne";
import { initFacebookStep } from "./steps/stepTwo/facebookStep";
import { initYoutubeStep } from "./steps/stepTwo/youtubeStep";
import { initTikTokStep } from "./steps/stepTwo/tiktokStep";
import { initInstagramStep } from "./steps/stepTwo/instagramStep";
import { initPinterestStep } from "./steps/stepTwo/pinterestStep";
import { initLinkedInStep } from "./steps/stepTwo/linkedinStep";
import { initTwitterStep } from "./steps/stepTwo/twitterStep";
import { initStepThree } from "./steps/stepThree";
import { initSelectToneStep } from "./steps/stepFour";
import { initWritingStyleStep } from "./steps/stepFive";
import { initAdditionalInstructionsStep } from "./steps/stepSix";
import { preventFormSubmitOnEnter } from "./utils/formUtilities";
import { initProgressBar } from "./utils/progressBar"; // <-- Import

export function initSocialMediaGenerator() {
  onReady(() => {
    const slider = initializeSlider(".multi-step_slider");

    // Prevent form submission on Enter key press
    preventFormSubmitOnEnter("#socialMediaGenerator");

    // Initialize Step 1
    initStepOne();

    // Initialize all platform steps (Step 2 variants)
    initFacebookStep(slider);
    initYoutubeStep(slider);
    initTikTokStep(slider);
    initInstagramStep(slider);
    initPinterestStep(slider);
    initLinkedInStep(slider);
    initTwitterStep(slider);

    // Step 3: Describe Content
    initStepThree(slider);

    // Step 4: Select Tone
    initSelectToneStep(slider);

    // Step 5: Writing Style
    initWritingStyleStep(slider);

    // Step 6: Additional Instructions
    initAdditionalInstructionsStep(slider);

    // Finally, set up the progress bar.
    // true/false => control if you want "XX%" or "Step X of Y"
    initProgressBar(slider, false);
  });
}
