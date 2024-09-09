import { WFComponent, WFFormComponent } from "@xatom/core";
import { updateFormData } from "../utils/formUtils";
import { goNextSlide, goPreviousSlide } from "../utils/sliderUtils";

export const initStepTwo = () => {
  const form = new WFFormComponent("#propertyDescriptionGenerator");
  const nextButton = new WFComponent("#submitStepTwo");
  const backButton = new WFComponent("#backStepTwo");
  const errorElement = new WFComponent("#submitStepTwoError");
  const neighborhoodInput = new WFComponent("#neighborhoodInput");
  const neighborhoodFeaturesInput = new WFComponent(
    "#neighborhoodFeaturesInput"
  );
  const areaDescriptionInput = new WFComponent("#areaDescriptionInput");
  const hotSpotInput = new WFComponent("#hotSpotInput");

  // Handle the next step button click
  nextButton.on("click", (event) => {
    event.preventDefault(); // Prevent default button action

    // Get the input values
    const neighborhood = (
      neighborhoodInput.getElement() as HTMLInputElement
    ).value.trim();
    const neighborhoodFeatures = (
      neighborhoodFeaturesInput.getElement() as HTMLInputElement
    ).value.trim();
    const areaDescription = (
      areaDescriptionInput.getElement() as HTMLInputElement
    ).value.trim();
    const hotSpots = (
      hotSpotInput.getElement() as HTMLInputElement
    ).value.trim();

    // Validate inputs (basic validation)
    if (
      !neighborhood ||
      !neighborhoodFeatures ||
      !areaDescription ||
      !hotSpots
    ) {
      // Show an error if any field is not filled
      errorElement.setText("Please fill out all fields.");
      errorElement.setStyle({ display: "block" });
    } else {
      // Hide the error if all fields are filled
      errorElement.setText("");
      errorElement.setStyle({ display: "none" });

      // Store the form data in localStorage
      updateFormData({
        neighborhood_subdivision: neighborhood,
        neighborhood_features: neighborhoodFeatures,
        area_description: areaDescription,
        hot_spot: hotSpots,
      });

      // Move to the next slide
      goNextSlide();
    }
  });

  // Handle the back button click
  backButton.on("click", (event) => {
    event.preventDefault(); // Prevent default button action

    // Move to the previous slide
    goPreviousSlide();
  });
};
