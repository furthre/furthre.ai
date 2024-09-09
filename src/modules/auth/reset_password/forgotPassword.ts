import { WFComponent, WFFormComponent } from "@xatom/core";
import { apiClient } from "../../api/apiConfig";

// Function to initialize the forgot password form
export const initForgotPasswordForm = () => {
  // Initialize the WFFormComponent for the form
  const form = new WFFormComponent("#requestLinkForm");

  // DOM components for form inputs, buttons, and error/success messages
  const emailInput = new WFComponent<HTMLInputElement>("#emailInput");
  const requestButtonText = new WFComponent("#loginText");
  const requestErrorComponent = new WFComponent("#requestLinkError");
  const loadingAnimation = new WFComponent("#stepOneRequestingAnimation");
  const successTrigger = new WFComponent("#onSuccessTrigger");

  // Helper function to show errors
  const showError = (message: string) => {
    requestErrorComponent.setText(message);
    requestErrorComponent.setStyle({ display: "block" });
  };

  // Helper function to hide errors
  const hideError = () => {
    requestErrorComponent.setText("");
    requestErrorComponent.setStyle({ display: "none" });
  };

  // Intercept form submission
  form.onFormSubmit(async (formData, event) => {
    event.preventDefault();
    hideError(); // Hide any existing errors

    const email = emailInput.getElement().value.trim();

    // Validate email input
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      showError("Please enter a valid email address.");
      return;
    }

    // Change button text and show loading animation
    requestButtonText.setText("Requesting Link...");
    loadingAnimation.setStyle({ display: "flex" });
    requestButtonText.setStyle({ pointerEvents: "none" });

    try {
      // Send the form data to the forgot password API
      const response = await apiClient
        .get("/auth/magic-link", { data: { email } })
        .fetch();

      // Handle successful response
      if (response) {
        successTrigger.getElement().click(); // Trigger the success action
        form.showSuccessState(); // Show success state of the form
      } else {
        throw new Error("An unexpected error occurred.");
      }

      // Reset button text and hide loading animation
      requestButtonText.setText("Request Reset Link");
      requestButtonText.setStyle({ pointerEvents: "auto" });
      loadingAnimation.setStyle({ display: "none" });
    } catch (error: any) {
      console.error("Forgot password error:", error);
      // Revert button text and show error message on error
      requestButtonText.setText("Request Reset Link");
      requestButtonText.setStyle({ pointerEvents: "auto" });
      loadingAnimation.setStyle({ display: "none" });
      showError(
        error.response?.data?.message || "Failed to request reset link."
      );
    }
  });
};
