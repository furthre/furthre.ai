import { WFComponent, WFFormComponent } from "@xatom/core";
import { goPreviousSlide } from "../utils/sliderUtils";
import { updateFormData } from "../utils/formUtilities"; // Import form utilities
import { apiClient } from "../../../api/apiConfig"; // Import the configured API client

interface ApiResponse {
  content?: {
    facebook_content?: string;
    youtube_content?: string;
    tiktok_content?: string;
    instagram_content?: string;
    pinterest_content?: string;
    linkedin_content?: string;
    twitter_content?: string;
  };
  [key: string]: any; // Allow additional properties just in case
}

export const initAdditionalInstructionsStep = (slider) => {
  const form = new WFFormComponent("#socialMediaGenerator"); // Initialize WFFormComponent
  const submitButton = new WFComponent("#submitInstructions");
  const errorElement = new WFComponent("#submitInstructionsError");
  const instructionsInput = new WFComponent("#additionalInstructionsInput");
  const backButton = new WFComponent("#backInstructions");

  // Elements for showing loading, error, and response content
  const requestLoadingWrapper = new WFComponent(".request_loading_wrapper");
  const makeRequestBox = new WFComponent(".make_request_box");
  const loadingWrapper = new WFComponent(".loading_wrapper");
  const requestErrorWrapper = new WFComponent(".request_error_wrapper");
  const responseWrapper = new WFComponent(".response_wrapper");
  const responseContent = new WFComponent(".response_content");
  const beginRequestAnimationTrigger = new WFComponent(
    ".begin_request_animation_trigger"
  );
  const submitFinalButton = new WFComponent("#submitFinal");
  const backFinalButton = new WFComponent("#backFinal");
  const submitRetryButton = new WFComponent("#submitRetry");

  // Function to reset form and UI states
  const resetFormUI = () => {
    form.setStyle({ display: "block" });
    requestLoadingWrapper.setStyle({ display: "none" });
    loadingWrapper.setStyle({ display: "none" });
    requestErrorWrapper.setStyle({ display: "none" });
    responseWrapper.setStyle({ display: "none" });
    makeRequestBox.setStyle({ display: "flex" });
  };

  // Intercept form submission
  submitButton.on("click", (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get the entered additional instructions
    const instructions = (
      instructionsInput.getElement() as HTMLTextAreaElement
    ).value.trim();

    if (!instructions) {
      // If no instructions are entered, show an error
      errorElement.setText("Please enter additional instructions.");
      errorElement.setStyle({ display: "block" });
    } else {
      // Clear the error if instructions are entered
      errorElement.setText("");
      errorElement.setStyle({ display: "none" });

      // Store the additional instructions in localStorage
      updateFormData({ additional_instructions: instructions });

      // Combine current form data with any additional data needed
      const updatedFormData = {
        ...JSON.parse(localStorage.getItem("formData") || "{}"), // Retrieve data from localStorage
        additional_instructions: instructions, // Update additional instructions
      };

      // Show loading UI
      form.setStyle({ display: "none" });
      requestLoadingWrapper.setStyle({ display: "block" });

      // Final submission process
      submitFinalButton.on("click", () => {
        makeRequestBox.setStyle({ display: "none" });
        loadingWrapper.setStyle({ display: "flex" });
        beginRequestAnimationTrigger.getElement().click();

        // Post the form data to the API endpoint
        const postFormData = apiClient.post("/generators/social_media", {
          data: { formData: updatedFormData },
        });

        postFormData.onLoadingChange((isLoading) => {
          if (isLoading) {
            console.log("Loading...");
          } else {
            console.log("Loading complete.");
          }
        });

        // Handle success response
        postFormData.onData((response: ApiResponse) => {
          if (response.content) {
            // Initialize an array to hold the individual content sections
            let sections = [];

            // Check and append each content section with a corresponding <h1> tag
            if (response.content.facebook_content) {
              sections.push(
                `<h1>Facebook</h1>${response.content.facebook_content}`
              );
            }
            if (response.content.youtube_content) {
              sections.push(
                `<h1>YouTube</h1>${response.content.youtube_content}`
              );
            }
            if (response.content.tiktok_content) {
              sections.push(
                `<h1>TikTok</h1>${response.content.tiktok_content}`
              );
            }
            if (response.content.instagram_content) {
              sections.push(
                `<h1>Instagram</h1>${response.content.instagram_content}`
              );
            }
            if (response.content.pinterest_content) {
              sections.push(
                `<h1>Pinterest</h1>${response.content.pinterest_content}`
              );
            }
            if (response.content.linkedin_content) {
              sections.push(
                `<h1>LinkedIn</h1>${response.content.linkedin_content}`
              );
            }
            if (response.content.twitter_content) {
              sections.push(`<h1>X</h1>${response.content.twitter_content}`);
            }

            // Join all sections with <hr> tag between them
            const htmlContent = sections.join("<hr>");

            // Show the response content
            loadingWrapper.setStyle({ display: "none" });
            requestLoadingWrapper.setStyle({ display: "none" });
            responseWrapper.setStyle({ display: "block" });
            responseContent.setHTML(htmlContent);
          } else {
            // Handle missing or malformed content
            console.error("Unexpected response structure: 'content' not found");
            errorElement.setText(
              "There was an error processing the response. Please try again."
            );
            errorElement.setStyle({ display: "block" });
          }
        });

        // Handle error response
        postFormData.onError((error) => {
          console.error("Form submission failed:", error);
          loadingWrapper.setStyle({ display: "none" });
          requestErrorWrapper.setStyle({ display: "flex" });
        });

        // Execute the API request
        postFormData.fetch();
      });

      // Retry mechanism on error
      submitRetryButton.on("click", () => {
        requestErrorWrapper.setStyle({ display: "none" });
        loadingWrapper.setStyle({ display: "flex" });

        // Retry the form submission
        const retryPostFormData = apiClient.post("/generators/social_media", {
          data: { formData: updatedFormData },
        });

        retryPostFormData.onLoadingChange((isLoading) => {
          if (isLoading) {
            console.log("Retrying...");
          }
        });

        retryPostFormData.onData((response: ApiResponse) => {
          if (response.content) {
            let sections = [];

            // Check and append each content section with a corresponding <h1> tag
            if (response.content.facebook_content) {
              sections.push(
                `<h1>Facebook</h1>${response.content.facebook_content}`
              );
            }
            if (response.content.youtube_content) {
              sections.push(
                `<h1>YouTube</h1>${response.content.youtube_content}`
              );
            }
            if (response.content.tiktok_content) {
              sections.push(
                `<h1>TikTok</h1>${response.content.tiktok_content}`
              );
            }
            if (response.content.instagram_content) {
              sections.push(
                `<h1>Instagram</h1>${response.content.instagram_content}`
              );
            }
            if (response.content.pinterest_content) {
              sections.push(
                `<h1>Pinterest</h1>${response.content.pinterest_content}`
              );
            }
            if (response.content.linkedin_content) {
              sections.push(
                `<h1>LinkedIn</h1>${response.content.linkedin_content}`
              );
            }
            if (response.content.twitter_content) {
              sections.push(`<h1>X</h1>${response.content.twitter_content}`);
            }

            // Join all sections with <hr> tag between them
            const htmlContent = sections.join("<hr>");

            loadingWrapper.setStyle({ display: "none" });
            requestLoadingWrapper.setStyle({ display: "none" });
            responseWrapper.setStyle({ display: "block" });
            responseContent.setHTML(htmlContent);
          } else {
            console.error("Unexpected response structure: 'content' not found");
            errorElement.setText(
              "There was an error processing the response. Please try again."
            );
            errorElement.setStyle({ display: "block" });
          }
        });

        retryPostFormData.onError((error) => {
          console.error("Retry failed:", error);
          loadingWrapper.setStyle({ display: "none" });
          requestErrorWrapper.setStyle({ display: "flex" });
        });

        retryPostFormData.fetch();
      });

      // Go back to the form
      backFinalButton.on("click", () => {
        resetFormUI();
      });
    }
  });

  // Handle the back button
  backButton.on("click", () => {
    goPreviousSlide(); // Move to the previous slide when back button is clicked
  });
};
