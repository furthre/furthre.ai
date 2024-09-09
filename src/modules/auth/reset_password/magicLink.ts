import { WFComponent } from "@xatom/core";
import { apiClient } from "../../api/apiConfig"; // Update with the correct path to your API config

// Function to handle the magic link login
export const initMagicLinkLogin = async () => {
  // DOM component for displaying error messages
  const magicLinkErrorComponent = new WFComponent("#magicLinkError");

  // Helper function to show errors
  const showError = (message: string) => {
    magicLinkErrorComponent.setText(message);
    magicLinkErrorComponent.setStyle({ display: "block" });
  };

  // Helper function to hide errors
  const hideError = () => {
    magicLinkErrorComponent.setText("");
    magicLinkErrorComponent.setStyle({ display: "none" });
  };

  // Get the magic_token from the URL parameters
  const getUrlParam = (param: string): string | null => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  const magicToken = getUrlParam("magic_token");

  // If no magic_token is provided, show an error
  if (!magicToken) {
    showError("Invalid or missing magic token.");
    return;
  }

  hideError(); // Ensure any previous errors are hidden

  try {
    // Make the POST request to the magic login endpoint
    const response = await apiClient
      .post<string>("/auth/magic-login", {
        data: { magic_token: magicToken },
      })
      .fetch();

    // Handle successful response
    if (response) {
      // Store the auth token in localStorage
      localStorage.setItem("auth_token", response);

      // Redirect the user to the reset-password page
      window.location.href = "/reset-password";
    } else {
      throw new Error("Invalid response from server.");
    }
  } catch (error: any) {
    console.error("Magic link login error:", error);
    showError(
      error.response?.data?.message ||
        "Failed to authenticate with the magic link."
    );
  }
};
