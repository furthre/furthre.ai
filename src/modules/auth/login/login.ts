import { WFComponent, WFFormComponent } from "@xatom/core";
import { login as loginApi } from "../authConfig";

// Initialize the login form
export const initLoginForm = () => {
  // DOM components
  const form = new WFFormComponent("#loginForm");
  const emailInput = new WFComponent<HTMLInputElement>("#emailInput");
  const passwordInput = new WFComponent<HTMLInputElement>("#passwordInput");
  const loginButtonText = new WFComponent("#loginText");
  const loginErrorComponent = new WFComponent("#loginError");
  const loadingAnimation = new WFComponent("#stepOneRequestingAnimation");

  // Helper function to show errors
  const showError = (message: string) => {
    loginErrorComponent.setText(message);
    loginErrorComponent.setStyle({ display: "block" });
  };

  // Helper function to hide errors
  const hideError = () => {
    loginErrorComponent.setText("");
    loginErrorComponent.setStyle({ display: "none" });
  };

  // Intercept form submission
  form.onFormSubmit(async (data, event) => {
    event.preventDefault();
    hideError(); // Hide any existing errors

    const email = emailInput.getElement().value.trim();
    const password = passwordInput.getElement().value.trim();

    // Validate inputs
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      showError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      showError("Password is required.");
      return;
    }

    // Change button text and show loading animation
    loginButtonText.setText("Logging in...");
    loadingAnimation.setStyle({ display: "flex" });
    loginButtonText.setStyle({ pointerEvents: "none" });

    try {
      const loginSuccess = await loginApi(email, password);

      if (loginSuccess) {
        // Redirect to dashboard after successful login
        window.location.href = "/dashboard";
      } else {
        // Revert button text and show error message if login fails
        loginButtonText.setText("Login");
        loginButtonText.setStyle({ pointerEvents: "auto" });
        loadingAnimation.setStyle({ display: "none" });
        showError("Login failed. Please check your credentials and try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      // Revert button text and show error message on error
      loginButtonText.setText("Login");
      loginButtonText.setStyle({ pointerEvents: "auto" });
      loadingAnimation.setStyle({ display: "none" });
      showError("An unexpected error occurred. Please try again later.");
    }
  });
};
