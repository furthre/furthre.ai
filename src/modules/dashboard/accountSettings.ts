import { WFComponent, WFFormComponent } from "@xatom/core";
import {
  getUserInfo,
  setUserInfoInLocalStorage,
  logout,
} from "../auth/authConfig"; // Add setUserInfoInLocalStorage
import { apiClient } from "../api/apiConfig"; // Assuming this is the path to your API config

// Function to initialize the account settings form
export const initAccountSettings = async () => {
  // Initialize the WFFormComponent for the form
  const accountForm = new WFFormComponent<{
    name: string;
    email: string;
    brokerage: string;
    licensed_in: string;
    years_experience: string;
  }>("#updateAccountForm");

  // DOM components for form inputs, buttons, and error/success messages
  const nameInput = new WFComponent<HTMLInputElement>("#nameInput");
  const emailInput = new WFComponent<HTMLInputElement>("#emailInput");
  const brokerageInput = new WFComponent<HTMLInputElement>("#brokerageInput");
  const licensedInInput = new WFComponent<HTMLInputElement>("#licensedInInput");
  const experienceInput = new WFComponent<HTMLInputElement>("#experienceInput");
  const updateButtonText = new WFComponent("#createAccountText");
  const updateErrorComponent = new WFComponent("#updateAccountError");
  const updateSuccessComponent = new WFComponent("#updateAccountSuccess");
  const loadingAnimation = new WFComponent("#stepOneRequestingAnimation");
  const currentPlanText = new WFComponent("#currentPlanText"); // Component for displaying current plan

  // Delete account button
  const deleteAccountButton = new WFComponent("#deleteAccountButton");

  // Helper function to show errors
  const showError = (message: string) => {
    updateErrorComponent.setText(message);
    updateErrorComponent.setStyle({ display: "block" });
  };

  // Helper function to hide errors
  const hideError = () => {
    updateErrorComponent.setText("");
    updateErrorComponent.setStyle({ display: "none" });
  };

  // Helper function to show success
  const showSuccess = (message: string) => {
    updateSuccessComponent.setText(message);
    updateSuccessComponent.setStyle({ display: "block" });
  };

  // Helper function to hide success
  const hideSuccess = () => {
    updateSuccessComponent.setText("");
    updateSuccessComponent.setStyle({ display: "none" });
  };

  // Populate form fields with user info
  const userInfo = getUserInfo();
  if (userInfo) {
    nameInput.getElement().value = userInfo.name;
    emailInput.getElement().value = userInfo.email;
    brokerageInput.getElement().value = userInfo.brokerage;
    licensedInInput.getElement().value = userInfo.licensed_in;
    experienceInput.getElement().value = userInfo.years_experience.toString();

    // Set the current plan in the currentPlanText element
    currentPlanText.setText(userInfo.plan); // Display the plan value
  }

  // Intercept form submission
  accountForm.onFormSubmit(async (formData, event) => {
    event.preventDefault();
    hideError(); // Hide any existing errors
    hideSuccess(); // Hide any existing success messages

    // Validate inputs: Ensure all fields are filled in
    const name = nameInput.getElement().value.trim();
    const email = emailInput.getElement().value.trim();
    const brokerage = brokerageInput.getElement().value.trim();
    const licensedIn = licensedInInput.getElement().value.trim();
    const experience = experienceInput.getElement().value.trim();

    if (!name) {
      showError("Name is required.");
      return;
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      showError("Please enter a valid email address.");
      return;
    }
    if (!brokerage) {
      showError("Brokerage is required.");
      return;
    }
    if (!licensedIn) {
      showError("Licensed In field is required.");
      return;
    }
    if (!experience || isNaN(Number(experience)) || Number(experience) < 0) {
      showError("Please enter a valid number of years of experience.");
      return;
    }

    // Change button text and show loading animation
    updateButtonText.setText("Updating...");
    loadingAnimation.setStyle({ display: "flex" });
    updateButtonText.setStyle({ pointerEvents: "none" });

    try {
      // Send the form data to the API
      const response = await apiClient
        .patch("/users/update_account", {
          data: {
            name,
            email,
            brokerage,
            licensed_in: licensedIn,
            years_experience: parseFloat(experience),
          },
        })
        .fetch();

      // Handle successful response
      if (response) {
        // Update local storage with the new user details
        const updatedUserInfo = {
          ...userInfo, // Keep other unchanged fields
          name,
          email,
          brokerage,
          licensed_in: licensedIn,
          years_experience: parseFloat(experience),
        };
        setUserInfoInLocalStorage(updatedUserInfo); // Update local storage

        showSuccess("Account details updated successfully.");
      } else {
        throw new Error("An unexpected error occurred.");
      }

      // Reset button text and hide loading animation
      updateButtonText.setText("Update Account");
      updateButtonText.setStyle({ pointerEvents: "auto" });
      loadingAnimation.setStyle({ display: "none" });
    } catch (error: any) {
      console.error("Account update error:", error);
      // Revert button text and show error message on error
      updateButtonText.setText("Update Account");
      updateButtonText.setStyle({ pointerEvents: "auto" });
      loadingAnimation.setStyle({ display: "none" });
      showError(
        error.response?.data?.message || "Failed to update the account."
      );
    }
  });

  // Handle account deletion
  deleteAccountButton.getElement().addEventListener("click", async () => {
    try {
      // Confirm account deletion
      const confirmation = confirm(
        "Are you sure you want to delete your account?"
      );
      if (!confirmation) return; // Exit if user cancels

      // Show loading animation or disable button during request
      deleteAccountButton.setStyle({ pointerEvents: "none", opacity: "0.6" });

      // Send delete request to the API
      const deleteResponse = await apiClient.delete("/users/delete").fetch();

      if (deleteResponse) {
        // Log the user out and redirect them
        await logout();
        window.location.href = "/login"; // Redirect to login or homepage
      } else {
        throw new Error("Failed to delete account.");
      }
    } catch (error) {
      console.error("Account deletion error:", error);
      showError("An error occurred while trying to delete your account.");
    } finally {
      // Re-enable the delete button
      deleteAccountButton.setStyle({ pointerEvents: "auto", opacity: "1" });
    }
  });
};
