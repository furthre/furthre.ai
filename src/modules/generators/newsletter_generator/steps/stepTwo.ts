import { WFComponent } from "@xatom/core";
import {
  handleSectionsToInclude,
  goNextSlide,
  goPreviousSlide,
} from "../utils/sliderUtils";
import { updateFormData, updateNextButtonText } from "../utils/formUtils";

export const initStepTwo = () => {
  const submitButton = new WFComponent("#submitSectionsToInclude");
  const errorElement = new WFComponent("#sectionsToIncludeError");

  submitButton.on("click", () => {
    const sectionKeys = {
      personalNote: "personalNoteBool",
      businessNews: "businessNewsBool",
      lifeUpdate: "lifeUpdateBool",
      newListing: "newListingBool",
      somethingFun: "randomBool",
      testimonial: "testimonialBool",
    };

    let allSectionsAnswered = true;
    let hasAtLeastOneYes = false;

    // Check if each section has a selected answer (Yes or No)
    const selectedSections = Object.keys(sectionKeys)
      .map((key) => {
        const selectedInput = document.querySelector(
          `input[name="${sectionKeys[key]}"]:checked`
        ) as HTMLInputElement;

        if (!selectedInput) {
          allSectionsAnswered = false;
        } else if (selectedInput.value === "true") {
          hasAtLeastOneYes = true;
        }

        return selectedInput;
      })
      .filter(Boolean) as HTMLInputElement[];

    if (!allSectionsAnswered) {
      errorElement.setText(
        "Please provide a Yes or No answer for each section."
      );
      errorElement.setStyle({ display: "block" });
    } else if (!hasAtLeastOneYes) {
      errorElement.setText("Please select Yes for at least one section.");
      errorElement.setStyle({ display: "block" });
    } else {
      errorElement.setText("");
      errorElement.setStyle({ display: "none" });

      // Handle sections selection and determine the last active slide
      handleSectionsToInclude(selectedSections);

      // Update formData
      const formData = JSON.parse(localStorage.getItem("formData") || "{}");

      for (const key in sectionKeys) {
        const selectedInput = document.querySelector(
          `input[name="${sectionKeys[key]}"]:checked`
        ) as HTMLInputElement;
        formData[key] = selectedInput ? selectedInput.value : "false";
      }

      localStorage.setItem("formData", JSON.stringify(formData));

      // Update the next button text after sections are modified
      updateNextButtonText();

      // Move to the next slide
      goNextSlide();
    }
  });

  const backButton = new WFComponent("#backSectionsToInclude");
  backButton.on("click", (event) => {
    event.preventDefault();
    goPreviousSlide();
    // Update the next button text when going back to step 2
    updateNextButtonText();
  });
};
