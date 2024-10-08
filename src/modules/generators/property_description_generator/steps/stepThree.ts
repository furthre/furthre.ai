import { WFComponent, WFFormComponent } from "@xatom/core";
import { updateFormData } from "../utils/formUtils";
import { goNextSlide, goPreviousSlide } from "../utils/sliderUtils";
import { apiClient } from "../../../api/apiConfig"; // Import the apiClient

export const initStepThree = () => {
  const form = new WFFormComponent("#propertyDescriptionGenerator");
  const submitButton = new WFComponent("#submitStepThree");
  const backButton = new WFComponent("#backStepThree");
  const errorElement = new WFComponent("#submitStepThreeError");

  const squareFootageInput = new WFComponent("#squareFootageInput");
  const lotSizeInput = new WFComponent("#lotSizeInput");
  const bedroomsInput = new WFComponent("#bedroomsInput");
  const bathroomsInput = new WFComponent("#bathroomsInput");
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

  submitButton.on("click", (event) => {
    event.preventDefault();

    // Extracting form input values
    const squareFootage = (
      squareFootageInput.getElement() as HTMLInputElement
    ).value.trim();
    const lotSize = (
      lotSizeInput.getElement() as HTMLInputElement
    ).value.trim();
    const bedrooms = (
      bedroomsInput.getElement() as HTMLInputElement
    ).value.trim();
    const bathrooms = (
      bathroomsInput.getElement() as HTMLInputElement
    ).value.trim();
    const otherFeatures = (
      otherFeaturesInput.getElement() as HTMLInputElement
    ).value.trim();
    const interiorDescription = (
      interiorDescriptionInput.getElement() as HTMLInputElement
    ).value.trim();
    const renovations = (
      renovationsInput.getElement() as HTMLInputElement
    ).value.trim();
    const favoriteThing = (
      favoriteThingInput.getElement() as HTMLInputElement
    ).value.trim();
    const coolFeature = (
      coolFeatureInput.getElement() as HTMLInputElement
    ).value.trim();
    const vibe = (vibeInput.getElement() as HTMLInputElement).value.trim();
    const outdoorSpace = (
      outdoorSpaceInput.getElement() as HTMLInputElement
    ).value.trim();
    const idealFor = (
      idealForInput.getElement() as HTMLInputElement
    ).value.trim();

    // Form validation
    if (
      !squareFootage ||
      !lotSize ||
      !bedrooms ||
      !bathrooms ||
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

      const existingFormData = JSON.parse(
        localStorage.getItem("propertyFormData") || "{}"
      );
      const updatedFormData = {
        ...existingFormData,
        square_footage: squareFootage,
        lot_size: lotSize,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        other_features: otherFeatures,
        interior_description: interiorDescription,
        renovations: renovations,
        favorite_thing: favoriteThing,
        cool_feature: coolFeature,
        vibe: vibe,
        outdoor_space: outdoorSpace,
        ideal_for: idealFor,
      };

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
            // Success: Show response content
            const htmlContent = response.content
              .replace(/```html|```/g, "") // Remove ```html and ```
              .trim(); // Trim leading/trailing spaces

            loadingWrapper.setStyle({ display: "none" });
            requestLoadingWrapper.setStyle({ display: "none" });
            responseWrapper.setStyle({ display: "block" });

            // Insert the cleaned HTML content into responseContent
            responseContent.setHTML(htmlContent);
          } else {
            // Handle the case where content is not found
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
            const htmlContent = response.content
              .replace(/```html|```/g, "") // Clean up unwanted markdown
              .trim(); // Trim leading/trailing spaces

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

  backButton.on("click", (event) => {
    event.preventDefault();
    goPreviousSlide();
  });
};
