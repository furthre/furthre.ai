import { onReady } from "@xatom/core";
import { initializeSlider } from "./utils/sliderUtils";
import { initStepOne } from "./steps/stepOne";
import { initFacebookStep } from "./steps/stepTwo/facebookStep"; // Import Facebook step
import { initYoutubeStep } from "./steps/stepTwo/youtubeStep"; // Import YouTube step
import { initTikTokStep } from "./steps/stepTwo/tiktokStep"; // Import TikTok step
import { initInstagramStep } from "./steps/stepTwo/instagramStep"; // Import Instagram step
import { initPinterestStep } from "./steps/stepTwo/pinterestStep"; // Import Pinterest step
import { initLinkedInStep } from "./steps/stepTwo/linkedinStep"; // Import LinkedIn step
import { initTwitterStep } from "./steps/stepTwo/twitterStep"; // Import Twitter step
import { initStepThree } from "./steps/stepThree"; // Import Describe Content step
import { initSelectToneStep } from "./steps/stepFour"; // Import Select Tone step
import { initWritingStyleStep } from "./steps/stepFive"; // Import Writing Style step
import { initAdditionalInstructionsStep } from "./steps/stepSix"; // Import Additional Instructions step
import { preventFormSubmitOnEnter } from "./utils/formUtilities";

export function initSocialMediaGenerator() {
  onReady(() => {
    const slider = initializeSlider(".multi-step_slider");

    // Prevent form submission on Enter key press
    preventFormSubmitOnEnter("#socialMediaGenerator");

    // Initialize Step 1
    initStepOne();

    // Initialize all steps for the different platforms
    initFacebookStep(slider);
    initYoutubeStep(slider);
    initTikTokStep(slider);
    initInstagramStep(slider);
    initPinterestStep(slider);
    initLinkedInStep(slider);
    initTwitterStep(slider);

    // Initialize the Describe Content step
    initStepThree(slider);

    // Initialize the Select Tone step
    initSelectToneStep(slider);

    // Initialize the Writing Style step
    initWritingStyleStep(slider);

    // Initialize the Additional Instructions step
    initAdditionalInstructionsStep(slider);
  });
}
