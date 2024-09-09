import { WFComponent, WFFormComponent } from "@xatom/core";
import { signup as signupApi } from "../authConfig";
import { submitPlan } from "./selectPlan"; // Import submitPlan from selectPlan

export const initSignupForm = () => {
  // DOM components
  const form = new WFFormComponent("#createAccountForm");
  const nameInput = new WFComponent<HTMLInputElement>("#nameInput");
  const emailInput = new WFComponent<HTMLInputElement>("#emailInput");
  const brokerageInput = new WFComponent<HTMLInputElement>("#brokerageInput");
  const licensedInInput = new WFComponent<HTMLInputElement>("#licensedInInput");
  const experienceInput = new WFComponent<HTMLInputElement>("#experienceInput");
  const passwordInput = new WFComponent<HTMLInputElement>("#passwordInput");
  const termsInput = new WFComponent<HTMLInputElement>("#termsInput");

  const createAccountError = new WFComponent("#createAccountError");

  // Password requirements elements
  const lengthCheck = new WFComponent("#lengthCheck");
  const lowercaseCheck = new WFComponent("#lowercaseCheck");
  const uppercaseCheck = new WFComponent("#uppercaseCheck");
  const digitCheck = new WFComponent("#digitCheck");
  const charCheck = new WFComponent("#charCheck");

  // Helper function to show errors in the createAccountError element
  const showError = (messages: string) => {
    createAccountError.setText(messages);
    createAccountError.setStyle({ display: "block" });
  };

  // Helper function to hide errors
  const hideError = () => {
    createAccountError.setText("");
    createAccountError.setStyle({ display: "none" });
  };

  // Validate password requirements
  const validatePassword = (password: string) => {
    const lengthPassed = password.length >= 8;
    const lowercasePassed = /[a-z]/.test(password);
    const uppercasePassed = /[A-Z]/.test(password);
    const digitPassed = /[0-9]/.test(password);
    const charPassed = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    lengthPassed
      ? lengthCheck.addCssClass("has-passed")
      : lengthCheck.removeCssClass("has-passed");
    lowercasePassed
      ? lowercaseCheck.addCssClass("has-passed")
      : lowercaseCheck.removeCssClass("has-passed");
    uppercasePassed
      ? uppercaseCheck.addCssClass("has-passed")
      : uppercaseCheck.removeCssClass("has-passed");
    digitPassed
      ? digitCheck.addCssClass("has-passed")
      : digitCheck.removeCssClass("has-passed");
    charPassed
      ? charCheck.addCssClass("has-passed")
      : charCheck.removeCssClass("has-passed");

    return (
      lengthPassed &&
      lowercasePassed &&
      uppercasePassed &&
      digitPassed &&
      charPassed
    );
  };

  // Helper function to check URL parameters
  const getUrlParam = (param: string): string | null => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  // Add the button text and trigger elements
  const createAccountButtonText = new WFComponent("#createAccountText");
  const createAccountTrigger = new WFComponent(".create_account_trigger");

  // Add event listener to validate password input on keyup
  passwordInput.on("input", () => {
    validatePassword(passwordInput.getElement().value);
  });

  // Check if the URL contains the parameter `select_plan=true`
  const selectPlan = getUrlParam("select_plan");
  if (selectPlan === "true") {
    // Programmatically trigger the click event on the .create_account_trigger element
    setTimeout(() => {
      createAccountTrigger.getElement().click();
    }, 0); // Ensure the DOM is fully ready before triggering the event
  }

  // Intercept form submission
  form.onFormSubmit(async (data, event) => {
    event.preventDefault();
    hideError(); // Hide existing errors

    const errorMessages: string[] = [];

    // Gather form data
    const name = nameInput.getElement().value.trim();
    const email = emailInput.getElement().value.trim();
    const brokerage = brokerageInput.getElement().value.trim();
    const licensed_in = licensedInInput.getElement().value.trim();
    const years_experience = parseFloat(
      experienceInput.getElement().value.trim()
    );
    const password = passwordInput.getElement().value.trim();
    const terms_of_service = termsInput.getElement().checked;

    // Validate inputs
    if (!name) errorMessages.push("Name is required.");
    if (!email || !/^\S+@\S+\.\S+$/.test(email))
      errorMessages.push("Please enter a valid email.");
    if (!brokerage) errorMessages.push("Brokerage is required.");
    if (!licensed_in) errorMessages.push("Licensed location is required.");
    if (isNaN(years_experience) || years_experience < 0)
      errorMessages.push("Please enter a valid number of years of experience.");
    if (!password || !validatePassword(password))
      errorMessages.push("Password does not meet the required criteria.");
    if (!terms_of_service)
      errorMessages.push("You must agree to the terms of service.");

    // If there are any validation errors, show them in the createAccountError element
    if (errorMessages.length > 0) {
      showError(errorMessages.join("\n"));
      return;
    }

    // Change button text to "Creating Account..." and disable interactions
    createAccountButtonText.setText("Creating Account...");
    createAccountButtonText.setStyle({ pointerEvents: "none" });

    // Proceed with signup if there are no errors
    try {
      const signupResult = await signupApi(
        name,
        email,
        password,
        brokerage,
        licensed_in,
        years_experience,
        terms_of_service
      );

      if (signupResult.success) {
        // Store user info in localStorage after successful signup
        const userInfo = { email };
        localStorage.setItem("user_info", JSON.stringify(userInfo));

        // Check if a selected plan exists in localStorage
        const selectedPlanString = localStorage.getItem("selectedPlan");
        if (selectedPlanString) {
          const { plan, subscriptionType } = JSON.parse(selectedPlanString);

          // Call submitPlan function with the selected plan and subscriptionType
          await submitPlan(plan, subscriptionType);
        } else {
          // No selected plan, proceed normally
          // Scroll to the top of the page
          window.scrollTo({ top: 0, behavior: "smooth" });

          // Programmatically trigger the click event if no plan is found
          createAccountTrigger.getElement().click();
        }
      } else {
        // Revert button text back to "Create Account" and show error message
        createAccountButtonText.setText("Create Account");
        createAccountButtonText.setStyle({ pointerEvents: "auto" });
        showError(
          signupResult.message ||
            "Signup failed. Please check your details and try again."
        );
      }
    } catch (error) {
      console.error("Signup error:", error);
      // Revert button text back to "Create Account" on error
      createAccountButtonText.setText("Create Account");
      createAccountButtonText.setStyle({ pointerEvents: "auto" });
      showError("An unexpected error occurred. Please try again later.");
    }
  });
};
