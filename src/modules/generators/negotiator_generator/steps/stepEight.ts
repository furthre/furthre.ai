import { WFComponent, WFFormComponent } from "@xatom/core";
import {
  updateFormData,
  checkAndHandleSubmit,
  updateNextButtonText,
} from "../utils/formUtils";
import {
  goNextSlide,
  goPreviousSlide,
  markSlideInactive,
  markSlideActive,
} from "../utils/sliderUtils";

export const initStepEight = () => {
  const form = new WFFormComponent("#negotiatorGeneratorForm");
  const nextButton = new WFComponent("#submitStepEight");
  const backButton = new WFComponent("#backStepEight");
  const errorElement = new WFComponent("#submitStepEightError");

  // Get field elements
  const financingOptions = [
    new WFComponent("#financingCash"),
    new WFComponent("#financingConventional"),
    new WFComponent("#financingFHA"),
    new WFComponent("#financingVA"),
    new WFComponent("#financingOther"),
  ];
  const financingOtherText = new WFComponent("#financingOtherText");

  const earnestDepositInput = new WFComponent("#earnestDepositInput");
  const inspectionPeriodInput = new WFComponent("#inspectionPeriodInput");

  const appraisalContingencyOptions = [
    new WFComponent("#appraisalContingencyYes"),
    new WFComponent("#appraisalContingencyNo"),
  ];

  const financingContingencyOptions = [
    new WFComponent("#financingContingencyYes"),
    new WFComponent("#financingContingencyNo"),
  ];

  const homeWarrantyOptions = [
    new WFComponent("#homeWarrentyYes"),
    new WFComponent("#homeWarrentyNo"),
  ];

  const possessionDateOptions = [
    new WFComponent("#possessionDateSameYes"),
    new WFComponent("#possessionDateSameNo"),
  ];

  const fixturesPersonalPropertyInput = new WFComponent(
    "#fixturesPersonalPropertyInput"
  );
  const contingenciesSellingOptions = [
    new WFComponent("#contingenciesSellingYes"),
    new WFComponent("#contingenciesSellingNo"),
  ];

  const concessionsInput = new WFComponent("#concessionsInput");
  const specialTermsInput = new WFComponent("#specialTermsInput");

  // Show/hide "Other" financing text input based on selection
  const handleOtherFinancingVisibility = () => {
    const isChecked = (financingOptions[4].getElement() as HTMLInputElement)
      .checked;
    financingOtherText.setStyle({ display: isChecked ? "block" : "none" });
  };
  financingOptions[4].on("change", handleOtherFinancingVisibility);

  // Handle financing contingency selection change
  const handleFinancingContingencyChange = () => {
    const financingContingencyNoSelected = (
      financingContingencyOptions[1].getElement() as HTMLInputElement
    ).checked;

    if (financingContingencyNoSelected) {
      // If "No" is selected, mark all subsequent slides (9 to 12) as inactive
      for (let i = 9; i <= 12; i++) {
        markSlideInactive(`slideStep${i}`);
      }
      nextButton.setText("Finish & Submit"); // Update the button text to "Finish & Submit"
    } else {
      // If "Yes" is selected, activate slide 9 and don't re-mark slides inactive again
      markSlideActive("slideStep9");
      nextButton.setText("Next Step"); // Reset button text to "Next Step"
    }
  };

  // Add event listener to financing contingency options
  financingContingencyOptions.forEach((option) => {
    option.on("change", handleFinancingContingencyChange);
  });

  // Handle "Next Step" button click
  nextButton.on("click", (event) => {
    event.preventDefault();

    const financingSelected = financingOptions.some(
      (option) => (option.getElement() as HTMLInputElement).checked
    );
    const earnestDepositValue = (
      earnestDepositInput.getElement() as HTMLInputElement
    ).value.trim();
    const inspectionPeriodValue = (
      inspectionPeriodInput.getElement() as HTMLInputElement
    ).value.trim();
    const appraisalContingencySelected = appraisalContingencyOptions.some(
      (option) => (option.getElement() as HTMLInputElement).checked
    );
    const financingContingencySelected = financingContingencyOptions.some(
      (option) => (option.getElement() as HTMLInputElement).checked
    );
    const homeWarrantySelected = homeWarrantyOptions.some(
      (option) => (option.getElement() as HTMLInputElement).checked
    );
    const possessionDateSelected = possessionDateOptions.some(
      (option) => (option.getElement() as HTMLInputElement).checked
    );
    const fixturesPersonalPropertyValue = (
      fixturesPersonalPropertyInput.getElement() as HTMLInputElement
    ).value.trim();
    const contingenciesSellingSelected = contingenciesSellingOptions.some(
      (option) => (option.getElement() as HTMLInputElement).checked
    );
    const concessionsValue = (
      concessionsInput.getElement() as HTMLInputElement
    ).value.trim();
    const specialTermsValue = (
      specialTermsInput.getElement() as HTMLInputElement
    ).value.trim();

    // Validate required fields
    if (
      !financingSelected ||
      !earnestDepositValue ||
      !inspectionPeriodValue ||
      !appraisalContingencySelected ||
      !financingContingencySelected ||
      !homeWarrantySelected ||
      !possessionDateSelected ||
      !fixturesPersonalPropertyValue ||
      !contingenciesSellingSelected ||
      !concessionsValue ||
      !specialTermsValue
    ) {
      errorElement.setText("Please complete all required fields.");
      errorElement.setStyle({ display: "block" });
      return;
    }

    // Prepare form data
    const financingType = financingOptions
      .find((option) => (option.getElement() as HTMLInputElement).checked)
      ?.getElement()
      .id.replace("financing", "");
    const financingContingencyValue = financingContingencyOptions
      .find((option) => (option.getElement() as HTMLInputElement).checked)
      ?.getElement()
      .id.replace("financingContingency", "");
    const appraisalContingencyValue = appraisalContingencyOptions
      .find((option) => (option.getElement() as HTMLInputElement).checked)
      ?.getElement()
      .id.replace("appraisalContingency", "");
    const homeWarrantyValue = homeWarrantyOptions
      .find((option) => (option.getElement() as HTMLInputElement).checked)
      ?.getElement()
      .id.replace("homeWarrenty", "");
    const possessionDateValue = possessionDateOptions
      .find((option) => (option.getElement() as HTMLInputElement).checked)
      ?.getElement()
      .id.replace("possessionDateSame", "");
    const contingenciesSellingValue = contingenciesSellingOptions
      .find((option) => (option.getElement() as HTMLInputElement).checked)
      ?.getElement()
      .id.replace("contingenciesSelling", "");

    // Save the form data
    updateFormData({
      stepEight: {
        financing:
          financingType === "Other"
            ? (financingOtherText.getElement() as HTMLInputElement).value
            : financingType,
        earnestDeposit: earnestDepositValue,
        inspectionPeriod: inspectionPeriodValue,
        appraisalContingency: appraisalContingencyValue,
        financingContingency: financingContingencyValue,
        homeWarranty: homeWarrantyValue,
        possessionDateSame: possessionDateValue,
        fixturesPersonalProperty: fixturesPersonalPropertyValue,
        contingenciesSelling: contingenciesSellingValue,
        concessions: concessionsValue,
        specialTerms: specialTermsValue,
      },
    });

    // Check if Financing Contingency is "No" and finalize form submission
    if (financingContingencyValue === "No") {
      // Mark all subsequent steps as inactive
      for (let i = 9; i <= 12; i++) {
        markSlideInactive(`slideStep${i}`);
      }

      // Set the current slide as the final step
      const currentSlide = document.querySelector("#slideStep8");
      if (currentSlide) {
        currentSlide.setAttribute("data-final-step", "true");
        console.log("Current slide marked as final step.");
      }

      nextButton.setText("Finish & Submit"); // Change button text to "Finish & Submit"

      checkAndHandleSubmit(
        "#negotiatorGeneratorForm",
        "/generators/negotiator"
      );
    } else {
      const nextSlide = document.querySelector("#slideStep9");
      nextSlide.setAttribute("data-final-step", "true"); // Mark the next slide as the final step
      goNextSlide(); // Proceed to the next slide if "Yes" is selected
    }
  });

  // Handle "Go Back" button click
  backButton.on("click", (event) => {
    event.preventDefault();
    goPreviousSlide(); // Navigate to the previous slide
  });
};
