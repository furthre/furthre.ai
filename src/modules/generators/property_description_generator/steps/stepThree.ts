import { WFComponent, WFFormComponent } from "@xatom/core";
import { updateFormData } from "../utils/formUtils";
import { goNextSlide, goPreviousSlide } from "../utils/sliderUtils";
import { apiClient } from "../../../api/apiConfig"; // Import the apiClient

export const initStepThree = () => {
  const form = new WFFormComponent("#propertyDescriptionGenerator");
  const submitButton = new WFComponent("#submitStepThree");
  const backButton = new WFComponent("#backStepThree");
  const errorElement = new WFComponent("#submitStepThreeError");

  // REMAINING INPUTS in Step Three
  const otherFeaturesInput = new WFComponent("#otherFeaturesInput");
  const interiorDescriptionInput = new WFComponent("#interiorDescriptionInput");
  const renovationsInput = new WFComponent("#renovationsInput");
  const favoriteThingInput = new WFComponent("#favoriteThingInput");
  const coolFeatureInput = new WFComponent("#coolFeatureInput");
  const vibeInput = new WFComponent("#vibeInput");
  const outdoorSpaceInput = new WFComponent("#outdoorSpaceInput");
  const idealForInput = new WFComponent("#idealForInput");

  // Elements for showing loading, error, and response content
  const requestLoadingWrapper = new WFComponent(".request_loading_wrapper");
  const makeRequestBox = new WFComponent(".make_request_box");
  const loadingWrapper = new WFComponent(".loading_wrapper");
  const requestErrorWrapper = new WFComponent(".request_error_wrapper");
  const responseWrapper = new WFComponent(".response_wrapper");
  const responseContent = new WFComponent(".response_content");
  const beginRequestAnimationTrigger = new WFComponent(".begin_request_animation_trigger");
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

  submitButton.on("click", (event) => {
    event.preventDefault();

    // Extracting form input values (moved square/lot/bed/bath to Step One)
    const otherFeatures = (otherFeaturesInput.getElement() as HTMLInputElement).value.trim();
    const interiorDescription = (interiorDescriptionInput.getElement() as HTMLInputElement).value.trim();
    const renovations = (renovationsInput.getElement() as HTMLInputElement).value.trim();
    const favoriteThing = (favoriteThingInput.getElement() as HTMLInputElement).value.trim();
    const coolFeature = (coolFeatureInput.getElement() as HTMLInputElement).value.trim();
    const vibe = (vibeInput.getElement() as HTMLInputElement).value.trim();
    const outdoorSpace = (outdoorSpaceInput.getElement() as HTMLInputElement).value.trim();
    const idealFor = (idealForInput.getElement() as HTMLInputElement).value.trim();

    // Form validation for remaining fields
    if (
      !otherFeatures ||
      !interiorDescription ||
      !renovations ||
      !favoriteThing ||
      !coolFeature ||
      !vibe ||
      !outdoorSpace ||
      !idealFor
    ) {
      errorElement.setText("Please fill out all fields.");
      errorElement.setStyle({ display: "block" });
    } else {
      errorElement.setText("");
      errorElement.setStyle({ display: "none" });

      // Retrieve any existing data from localStorage
      const existingFormData = JSON.parse(
        localStorage.getItem("propertyFormData") || "{}"
      );

      // Add this step's data
      const updatedFormData = {
        ...existingFormData,
        other_features: otherFeatures,
        interior_description: interiorDescription,
        renovations,
        favorite_thing: favoriteThing,
        cool_feature: coolFeature,
        vibe,
        outdoor_space: outdoorSpace,
        ideal_for: idealFor,
      };

      // Update in localStorage
      updateFormData(updatedFormData);

      // Show loading UI
      form.setStyle({ display: "none" });
      requestLoadingWrapper.setStyle({ display: "block" });

      submitFinalButton.on("click", () => {
        makeRequestBox.setStyle({ display: "none" });
        loadingWrapper.setStyle({ display: "flex" });
        beginRequestAnimationTrigger.getElement().click();

        // Make API request
        const postFormData = apiClient.post(
          "/generators/property_descriptions",
          {
            data: { formData: updatedFormData },
          }
        );

        postFormData.onLoadingChange((isLoading) => {
          if (isLoading) {
            console.log("Loading...");
          } else {
            console.log("Loading complete.");
          }
        });

        postFormData.onData((response) => {
          if (response && response.content) {
            let combinedHTML = "";
            // Check if response.content is an object with social_media and property_description
            if (
              typeof response.content === "object" &&
              response.content.property_description &&
              response.content.social_media
            ) {
              const propertyDescriptionHTML = response.content.property_description
                .replace(/```html|```/g, "")
                .trim();
              const socialMediaHTML = response.content.social_media
                .replace(/```html|```/g, "")
                .trim();
              combinedHTML = `${propertyDescriptionHTML}<br/><hr/><br/><h2>Suggested Social Media Posts</h2><br/>${socialMediaHTML}`;
            } else if (typeof response.content === "string") {
              combinedHTML = response.content
                .replace(/```html|```/g, "")
                .trim();
            } else {
              console.error("Unexpected response structure.");
              errorElement.setText(
                "There was an error processing the response. Please try again."
              );
              errorElement.setStyle({ display: "block" });
              return;
            }

            loadingWrapper.setStyle({ display: "none" });
            requestLoadingWrapper.setStyle({ display: "none" });
            responseWrapper.setStyle({ display: "block" });
            responseContent.setHTML(combinedHTML);
          } else {
            console.error("Unexpected response structure: 'content' not found");
            errorElement.setText(
              "There was an error processing the response. Please try again."
            );
            errorElement.setStyle({ display: "block" });
          }
        });

        postFormData.onError((error) => {
          console.error("Form submission failed:", error);
          loadingWrapper.setStyle({ display: "none" });
          requestErrorWrapper.setStyle({ display: "flex" });
        });

        postFormData.fetch();
      });

      // Retry request on error
      submitRetryButton.on("click", () => {
        requestErrorWrapper.setStyle({ display: "none" });
        loadingWrapper.setStyle({ display: "flex" });

        // Retry the request
        const retryPostFormData = apiClient.post(
          "/generators/property_descriptions",
          {
            data: { formData: updatedFormData },
          }
        );

        retryPostFormData.onLoadingChange((isLoading) => {
          if (isLoading) {
            console.log("Retrying...");
          }
        });

        retryPostFormData.onData((response) => {
          if (response && response.content) {
            let combinedHTML = "";
            if (
              typeof response.content === "object" &&
              response.content.property_description &&
              response.content.social_media
            ) {
              const propertyDescriptionHTML = response.content.property_description
                .replace(/```html|```/g, "")
                .trim();
              const socialMediaHTML = response.content.social_media
                .replace(/```html|```/g, "")
                .trim();
              combinedHTML = `${propertyDescriptionHTML}<br/><hr/><br/><h2>Suggested Social Media Posts</h2><br/>${socialMediaHTML}`;
            } else if (typeof response.content === "string") {
              combinedHTML = response.content
                .replace(/```html|```/g, "")
                .trim();
            } else {
              console.error("Unexpected response structure.");
              errorElement.setText(
                "There was an error processing the response. Please try again."
              );
              errorElement.setStyle({ display: "block" });
              return;
            }

            loadingWrapper.setStyle({ display: "none" });
            requestLoadingWrapper.setStyle({ display: "none" });
            responseWrapper.setStyle({ display: "block" });
            responseContent.setHTML(combinedHTML);
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

  backButton.on("click", (event) => {
    event.preventDefault();
    goPreviousSlide();
  });
};
