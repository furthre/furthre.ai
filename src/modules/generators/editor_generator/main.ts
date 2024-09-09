import { WFComponent, WFFormComponent } from "@xatom/core";
import { apiClient } from "../../api/apiConfig";

export const initFreeWritingForm = () => {
  const form = new WFFormComponent("#freeWritingForm"); // Initialize WFFormComponent
  const submitButton = new WFComponent("#submitFreeWriting");
  const errorElement = new WFComponent("#submitFreeWritingError");

  // New components for the additional interactions
  const requestLoadingWrapper = new WFComponent(".request_loading_wrapper");
  const makeRequestBox = new WFComponent(".make_request_box");
  const loadingWrapper = new WFComponent(".loading_wrapper");
  const requestErrorWrapper = new WFComponent(".request_error_wrapper");
  const responseWrapper = new WFComponent(".response_wrapper"); // New component to show the response
  const responseContent = new WFComponent(".response_content"); // Target for response HTML
  const backFinalButton = new WFComponent("#backFinal");
  const submitFinalButton = new WFComponent("#submitFinal");
  const submitRetryButton = new WFComponent("#submitRetry");
  const beginRequestAnimationTrigger = new WFComponent(
    ".begin_request_animation_trigger"
  );

  // Function to reset the form and UI to initial state
  const resetFormUI = () => {
    form.setStyle({ display: "block" });
    requestLoadingWrapper.setStyle({ display: "none" });
    loadingWrapper.setStyle({ display: "none" });
    requestErrorWrapper.setStyle({ display: "none" });
    responseWrapper.setStyle({ display: "none" });
    makeRequestBox.setStyle({ display: "flex" });
  };

  // Intercept form submission
  form.onFormSubmit((data, event) => {
    event.preventDefault(); // Prevent the default form submission

    // Get the content from Quill editor
    const quillEditor = document.querySelector(".ql-editor") as HTMLElement;
    const formData = quillEditor.innerHTML.trim();

    if (!formData || formData === "<p><br></p>") {
      // If no content is entered, show an error
      errorElement.setText("Please enter your free writing.");
      errorElement.setStyle({ display: "block" });
    } else {
      // Clear the error if content is entered
      errorElement.setText("");
      errorElement.setStyle({ display: "none" });

      // Hide the form and show the initial request loading wrapper
      form.setStyle({ display: "none" });
      requestLoadingWrapper.setStyle({ display: "block" });

      // Add event listener for #submitFinal button
      submitFinalButton.on("click", () => {
        // Hide the request box and show the loading wrapper
        makeRequestBox.setStyle({ display: "none" });
        loadingWrapper.setStyle({ display: "flex" });

        // Trigger the animation
        beginRequestAnimationTrigger.getElement().click();

        // Simulate the request
        const postFormData = apiClient.post("/generators/editor", {
          data: { formData },
        });

        // Handle loading, success, and error states
        postFormData.onLoadingChange((isLoading) => {
          if (isLoading) {
            console.log("Loading...");
          } else {
            console.log("Loading complete.");
          }
        });

        postFormData.onData((response) => {
          console.log("Form submitted successfully:", response);

          // Check if 'choices' and 'message' exist in the response
          const messageContent =
            response?.response?.result?.choices?.[0]?.message?.content;

          if (messageContent) {
            // Extract the HTML content between the ```html ... ```
            const htmlContent = messageContent
              .replace(/```html|```/g, "")
              .trim();

            // Insert the HTML content into the .response_content element
            responseContent.setHTML(htmlContent);

            // Hide the loading wrapper and show the response wrapper
            loadingWrapper.setStyle({ display: "none" });
            requestLoadingWrapper.setStyle({ display: "none" });
            responseWrapper.setStyle({ display: "block" });
          } else {
            console.error("Invalid response format. No content found.");
          }
        });

        postFormData.onError((error) => {
          console.error("Form submission failed:", error);
          // Hide the loading wrapper and show the error wrapper
          loadingWrapper.setStyle({ display: "none" });
          requestErrorWrapper.setStyle({ display: "flex" });
        });

        postFormData.fetch();
      });

      // Add event listener for #submitRetry button (retry request)
      submitRetryButton.on("click", () => {
        // Hide the error box and show the loading wrapper again
        requestErrorWrapper.setStyle({ display: "none" });
        loadingWrapper.setStyle({ display: "flex" });

        // Retry the request (same logic as before)
        const retryPostFormData = apiClient.post("/generators/editor", {
          data: { formData },
        });

        retryPostFormData.onLoadingChange((isLoading) => {
          if (isLoading) {
            console.log("Retrying...");
          }
        });

        retryPostFormData.onData((response) => {
          console.log("Retry successful:", response);

          const messageContent =
            response?.response?.result?.choices?.[0]?.message?.content;

          if (messageContent) {
            const htmlContent = messageContent
              .replace(/```html|```/g, "")
              .trim();
            responseContent.setHTML(htmlContent);

            loadingWrapper.setStyle({ display: "none" });
            requestLoadingWrapper.setStyle({ display: "none" });
            responseWrapper.setStyle({ display: "block" });
          } else {
            console.error("Invalid response format. No content found.");
          }
        });

        retryPostFormData.onError((error) => {
          console.error("Retry failed:", error);
          // Show the error box again if the retry fails
          loadingWrapper.setStyle({ display: "none" });
          requestErrorWrapper.setStyle({ display: "flex" });
        });

        retryPostFormData.fetch();
      });

      // Add event listener for #backFinal button (go back to form)
      backFinalButton.on("click", () => {
        resetFormUI(); // Reset UI to the form display
      });
    }
  });
};
