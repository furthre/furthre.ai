import { WFComponent } from "@xatom/core";
import { handlePlatformSelection, goNextSlide } from "../utils/sliderUtils";
import { updateFormData } from "../utils/formUtilities"; // Import the updateFormData function

export const initStepOne = () => {
  const submitButton = new WFComponent("#submitPlatform");
  const errorElement = new WFComponent("#submitPlatformError");

  submitButton.on("click", () => {
    // Collect selected platforms
    const selectedPlatforms = Array.from(
      document.querySelectorAll('input[name="select_platforms"]:checked')
    ) as HTMLInputElement[];

    if (selectedPlatforms.length === 0) {
      // If no platforms are selected, show error
      errorElement.setText("Please select at least one platform.");
      errorElement.setStyle({ display: "block" });
    } else {
      // Clear error message if platforms are selected
      errorElement.setText("");
      errorElement.setStyle({ display: "none" });

      // Handle platform selection and mark slides as active or inactive
      handlePlatformSelection(selectedPlatforms);

      // Get current form data from localStorage
      const formData = JSON.parse(localStorage.getItem("formData") || "{}");

      // Retain only content types for selected platforms and remove others
      const platformKeys = {
        Facebook: "facebook_content_type",
        YouTube: "youtube_content_type",
        TikTok: "tiktok_content_type",
        Instagram: "instagram_content_type",
        Pinterest: "pinterest_content_type",
        LinkedIn: "linkedin_content_type",
        Twitter: "twitter_content_type",
      };

      // Convert selected platform values to keys in platformKeys
      const selectedPlatformKeys = selectedPlatforms.map(
        (input) => platformKeys[input.value]
      );

      // Filter out unselected platform content types from formData
      for (const key in platformKeys) {
        if (!selectedPlatformKeys.includes(platformKeys[key])) {
          delete formData[platformKeys[key]];
        }
      }

      // Update formData with selected platforms
      const platformData = selectedPlatforms
        .map((input) => input.value)
        .join(", ");
      formData.select_platforms = platformData;

      // Store the updated formData back to localStorage
      localStorage.setItem("formData", JSON.stringify(formData));

      // Move to the next slide
      goNextSlide();
    }
  });
};
