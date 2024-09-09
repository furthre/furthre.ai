import { apiClient } from "../../../api/apiConfig";
import { isLastActiveSlide, goNextSlide } from "./sliderUtils";
import { WFComponent, WFFormComponent } from "@xatom/core";

// Update form data in localStorage
export const updateFormData = (newData: { [key: string]: any }) => {
  let formData = JSON.parse(localStorage.getItem("formData") || "{}");
  formData = { ...formData, ...newData };
  localStorage.setItem("formData", JSON.stringify(formData));
};

// Submit form utility with API call
export const handleFormSubmit = (formSelector: string, endpoint: string) => {
  const form = new WFFormComponent(formSelector);
  const requestLoadingWrapper = new WFComponent(".request_loading_wrapper");
  const makeRequestBox = new WFComponent(".make_request_box");
  const loadingWrapper = new WFComponent(".loading_wrapper");
  const requestErrorWrapper = new WFComponent(".request_error_wrapper");
  const responseWrapper = new WFComponent(".response_wrapper");
  const responseContent = new WFComponent(".response_content");
  const submitFinalButton = new WFComponent("#submitFinal");
  const submitRetryButton = new WFComponent("#submitRetry");
  const backFinalButton = new WFComponent("#backFinal");
  const beginRequestAnimationTrigger = new WFComponent(
    ".begin_request_animation_trigger"
  );

  console.log("Form submission process started...");

  // Hide form and show the request loading wrapper to prepare user for final submission
  form.setStyle({ display: "none" });
  requestLoadingWrapper.setStyle({ display: "block" });
  makeRequestBox.setStyle({ display: "flex" });

  // Wait for the user to click the "Submit Final" button to proceed with submission
  submitFinalButton.on("click", () => {
    console.log("Final submission confirmed by user.");

    // Hide the request box and show the loading wrapper during API request
    makeRequestBox.setStyle({ display: "none" });
    beginRequestAnimationTrigger.getElement().click();
    loadingWrapper.setStyle({ display: "flex" });

    // Collect form data
    const formData = JSON.parse(localStorage.getItem("formData") || "{}");

    // Make the API request
    const postFormData = apiClient.post(endpoint, {
      data: { formData },
    });

    postFormData.onLoadingChange((isLoading) => {
      if (isLoading) {
        console.log("Loading...");
      } else {
        console.log("Loading complete.");
        loadingWrapper.setStyle({ display: "none" });
      }
    });

    // Handle success response
    postFormData.onData((response) => {
      console.log("Form submitted successfully:", response);

      const messageContent = response?.content; // Accessing response.content

      if (messageContent) {
        const htmlContent = messageContent.replace(/```html|```/g, "").trim();
        responseContent.setHTML(htmlContent);

        // Hide loading and show the response wrapper
        requestLoadingWrapper.setStyle({ display: "none" });
        responseWrapper.setStyle({ display: "block" });
      } else {
        console.error("Unexpected response format. No content found.");
      }
    });

    // Handle error response
    postFormData.onError((error) => {
      console.error("Form submission failed:", error);

      // Hide loading and show the error wrapper
      loadingWrapper.setStyle({ display: "none" });
      requestErrorWrapper.setStyle({ display: "flex" });
    });

    postFormData.fetch();
  });

  // Retry mechanism: Allow the user to retry the submission if it fails
  submitRetryButton.on("click", () => {
    console.log("Retrying form submission...");
    requestErrorWrapper.setStyle({ display: "none" });
    loadingWrapper.setStyle({ display: "flex" });

    // Retry the form submission (same logic as in submitFinalButton)
    handleFormSubmit(formSelector, endpoint);
  });

  // Back button handling: Reset the UI to allow editing the form before final submission
  backFinalButton.on("click", () => {
    resetFormUI(); // Reset UI back to initial state
    console.log("UI reset, allowing form re-edit before submission.");
  });
};

// Function to reset the form and UI state
const resetFormUI = () => {
  const form = new WFFormComponent("#newsletterGeneratorForm");
  const requestLoadingWrapper = new WFComponent(".request_loading_wrapper");
  const makeRequestBox = new WFComponent(".make_request_box");
  const loadingWrapper = new WFComponent(".loading_wrapper");
  const requestErrorWrapper = new WFComponent(".request_error_wrapper");
  const responseWrapper = new WFComponent(".response_wrapper");

  // Reset all relevant UI components to initial state
  form.setStyle({ display: "block" });
  requestLoadingWrapper.setStyle({ display: "none" });
  makeRequestBox.setStyle({ display: "flex" });
  loadingWrapper.setStyle({ display: "none" });
  requestErrorWrapper.setStyle({ display: "none" });
  responseWrapper.setStyle({ display: "none" });
  console.log("Form and UI state reset.");
};

// Check and handle the last slide
export const checkAndHandleSubmit = (
  formSelector: string,
  endpoint: string
) => {
  if (isLastActiveSlide()) {
    console.log("Last slide reached. Submitting form...");
    // Automatically submit the form if it's the last slide
    handleFormSubmit(formSelector, endpoint);
  } else {
    // Otherwise, move to the next slide
    goNextSlide();
  }
};

// Prevent form submission on Enter key press
export const preventFormSubmitOnEnter = (formSelector: string) => {
  const form = document.querySelector(formSelector);
  if (form) {
    form.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
      }
    });
  }
};

// Update the next button text based on the current step
export const updateNextButtonText = () => {
  const buttons = document.querySelectorAll(".btn_main_wrap .btn_main_text");

  buttons.forEach((buttonText) => {
    if (isLastActiveSlide()) {
      buttonText.textContent = "Finish & Submit";
    } else {
      buttonText.textContent = "Next Step";
    }
  });
};

// Reset functionality for the final button to reset the UI state
export const resetFinalFormUI = () => {
  resetFormUI(); // Use the resetFormUI function to return the form to the initial state
  console.log("Form reset to initial state.");
};
