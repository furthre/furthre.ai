import { WFComponent } from "@xatom/core";
import { apiClient } from "../api/apiConfig";
import { getUserInfo } from "../auth/authConfig"; // Assuming you already have this function

// Helper function to get user email from localStorage
const getUserEmail = (): string | null => {
  const userInfoString = localStorage.getItem("user_info");
  if (userInfoString) {
    const userInfo = JSON.parse(userInfoString);
    return userInfo.email;
  }
  return null;
};

// Function to handle token purchase and change button text
const purchaseTokens = async (tokenAmount: number, button: WFComponent) => {
  const email = getUserEmail();

  if (!email) {
    console.error("User email not found.");
    return;
  }

  const payload = {
    email,
    token_package: tokenAmount,
  };

  // Find the child element with the class `btn_main_text` and update its text
  const buttonTextElement = button.getElement().querySelector(".btn_main_text");
  if (!buttonTextElement) {
    console.error("Button text element not found.");
    return;
  }

  const originalText = buttonTextElement.textContent; // Store the original button text
  buttonTextElement.textContent = "Building Cart..."; // Set new text
  button.setStyle({ pointerEvents: "none" }); // Disable the button to prevent multiple clicks

  try {
    // Make the API call to purchase tokens
    const response = await apiClient
      .post("/purchase_tokens", {
        data: payload,
      })
      .fetch();

    console.log("Token purchase initiated successfully:", response);

    // Navigate to the checkout URL
    if (response) {
      window.location.href = String(response); // Redirect to the Stripe Checkout URL
    } else {
      throw new Error("No checkout URL returned in the response.");
    }
  } catch (error) {
    console.error("Failed to purchase tokens:", error);
    // Revert button text and enable it in case of an error
    buttonTextElement.textContent = originalText;
    button.setStyle({ pointerEvents: "auto" });
  }
};

// Function to check user plan and show/hide token purchase elements
const checkUserPlan = () => {
  const userInfo = getUserInfo(); // Assuming this function returns the user info from localStorage
  const tokenPurchaseWrap = new WFComponent("#tokenPurchaseWrap");
  const accessDenied = new WFComponent("#accessDenied");

  if (userInfo && userInfo.plan === "free") {
    tokenPurchaseWrap.setStyle({ display: "none" });
    accessDenied.setStyle({ display: "flex" });
  } else {
    tokenPurchaseWrap.setStyle({ display: "flex" });
    accessDenied.setStyle({ display: "none" });
  }
};

// Initialize the Purchase Tokens Step
export const initPurchaseTokens = () => {
  checkUserPlan(); // Check the user's plan when initializing

  const fiveTokensButton = new WFComponent("#fiveTokens");
  const tenTokensButton = new WFComponent("#tenTokens");
  const fifteenTokensButton = new WFComponent("#fifteenTokens");
  const twentyTokensButton = new WFComponent("#twentyTokens");

  // Event listeners for each token button
  fiveTokensButton.on("click", () => purchaseTokens(5, fiveTokensButton));
  tenTokensButton.on("click", () => purchaseTokens(10, tenTokensButton));
  fifteenTokensButton.on("click", () =>
    purchaseTokens(15, fifteenTokensButton)
  );
  twentyTokensButton.on("click", () => purchaseTokens(20, twentyTokensButton));
};
