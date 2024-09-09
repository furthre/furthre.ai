import { WFComponent, WFFormComponent } from "@xatom/core";
import { apiClient } from "../../api/apiConfig";

// Function to initialize the password reset form
export const initPasswordResetForm = () => {
  // Initialize the WFFormComponent for the form
  const form = new WFFormComponent("#passwordResetForm");

  // DOM components for form inputs, buttons, and error/success messages
  const passwordInput = new WFComponent<HTMLInputElement>("#passwordInput");
  const confirmPasswordInput = new WFComponent<HTMLInputElement>(
    "#confirmPasswordInput"
  );
  const resetButtonText = new WFComponent("#createAccountText");
  const resetErrorComponent = new WFComponent("#passwordResetError");
  const loadingAnimation = new WFComponent("#stepOneRequestingAnimation");

  // Password requirements elements
  const lengthCheck = new WFComponent("#lengthCheck");
  const lowercaseCheck = new WFComponent("#lowercaseCheck");
  const uppercaseCheck = new WFComponent("#uppercaseCheck");
  const digitCheck = new WFComponent("#digitCheck");
  const charCheck = new WFComponent("#charCheck");
  const passwordsMatchCheck = new WFComponent("#passwordsMatchCheck");

  // Helper function to show errors
  const showError = (message: string) => {
    resetErrorComponent.setText(message);
    resetErrorComponent.setStyle({ display: "block" });
  };

  // Helper function to hide errors
  const hideError = () => {
    resetErrorComponent.setText("");
    resetErrorComponent.setStyle({ display: "none" });
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

  // Check if passwords match
  const validatePasswordsMatch = () => {
    const password = passwordInput.getElement().value.trim();
    const confirmPassword = confirmPasswordInput.getElement().value.trim();

    if (password === confirmPassword) {
      passwordsMatchCheck.addCssClass("has-passed");
      return true;
    } else {
      passwordsMatchCheck.removeCssClass("has-passed");
      return false;
    }
  };

  // Add event listeners for password input validations
  passwordInput.on("input", () => {
    validatePassword(passwordInput.getElement().value);
    validatePasswordsMatch();
  });
  confirmPasswordInput.on("input", validatePasswordsMatch);

  // Intercept form submission
  form.onFormSubmit(async (formData, event) => {
    event.preventDefault();
    hideError(); // Hide any existing errors

    const password = passwordInput.getElement().value.trim();
    const confirmPassword = confirmPasswordInput.getElement().value.trim();

    // Validate inputs
    if (!password || !validatePassword(password)) {
      showError("Password does not meet the required criteria.");
      return;
    }
    if (!validatePasswordsMatch()) {
      showError("Passwords do not match.");
      return;
    }

    // Change button text and show loading animation
    resetButtonText.setText("Resetting Password...");
    loadingAnimation.setStyle({ display: "flex" });
    resetButtonText.setStyle({ pointerEvents: "none" });

    try {
      // Send the form data to the reset password API
      const response = await apiClient
        .post("/auth/reset_password", {
          data: { password, confirm_password: confirmPassword },
        })
        .fetch();

      // Handle successful response
      if (response) {
        form.showSuccessState(); // Show success state of the form
      } else {
        throw new Error("An unexpected error occurred.");
      }

      // Reset button text and hide loading animation
      resetButtonText.setText("Reset Password");
      resetButtonText.setStyle({ pointerEvents: "auto" });
      loadingAnimation.setStyle({ display: "none" });
    } catch (error: any) {
      console.error("Password reset error:", error);
      // Revert button text and show error message on error
      resetButtonText.setText("Reset Password");
      resetButtonText.setStyle({ pointerEvents: "auto" });
      loadingAnimation.setStyle({ display: "none" });
      showError(error.response?.data?.message || "Failed to reset password.");
    }
  });
};
