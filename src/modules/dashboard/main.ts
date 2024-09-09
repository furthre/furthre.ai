import {
  fetchCurrentUser,
  getUserInfo,
  isLoggedIn,
  logout,
} from "../auth/authConfig";
import { WFComponent } from "@xatom/core";

// Function to display user information on the dashboard
const displayUserInfo = (name: string, plan: string, tokens: number) => {
  const userNameElement = document.querySelector(".user_name_text");
  if (userNameElement) {
    const userNameComponent = new WFComponent("#userName");
    const firstName = name.split(" ")[0];
    userNameComponent.setText(firstName);
  }

  const userPlanElement = document.querySelector("#userPlan");
  if (userPlanElement) {
    const userPlanComponent = new WFComponent("#userPlan");
    userPlanComponent.setText(plan);
  }

  const userTokensElement = document.querySelector("#tokensRemaining");
  if (userTokensElement) {
    const userTokensComponent = new WFComponent("#tokensRemaining");
    userTokensComponent.setText(tokens.toString());
  }

  let tokensTotal = 0;
  switch (plan) {
    case "free":
      tokensTotal = 5;
      break;
    case "basic":
      tokensTotal = 30;
      break;
    case "growth":
      tokensTotal = 90;
      break;
    case "pro":
      tokensTotal = 150;
      break;
    default:
      tokensTotal = 0;
  }

  const tokensTotalElement = document.querySelector("#tokensTotal");
  if (tokensTotalElement) {
    const tokensTotalComponent = new WFComponent("#tokensTotal");
    tokensTotalComponent.setText(tokensTotal.toString());
  }
};

// Function to display alerts based on token count and user plan
const checkTokenAndPlanAlerts = (tokens: number, plan: string) => {
  const dashboardAlert = new WFComponent("#dashboardAlert");
  const dashboardError = new WFComponent("#dashboardError");
  const purchaseTokensAlert = new WFComponent("#purchaseTokensAlert");
  const upgradePlanAlert = new WFComponent("#upgradePlanAlert");
  const purchaseTokensError = new WFComponent("#purchaseTokensError");
  const upgradePlanError = new WFComponent("#upgradePlanError");

  // Hide both alerts initially
  dashboardAlert.setStyle({ display: "none" });
  dashboardError.setStyle({ display: "none" });

  // Show the warning alert if tokens are 3 or lower
  if (tokens > 0 && tokens <= 3) {
    dashboardAlert.setStyle({ display: "flex" });

    // Hide the "Purchase Tokens" button if the plan is "free"
    if (plan === "free") {
      purchaseTokensAlert.setStyle({ display: "none" });
    }

    // Hide the "Upgrade Plan" button if the plan is "pro"
    if (plan === "pro") {
      upgradePlanAlert.setStyle({ display: "none" });
    }
  }

  // Show the error alert if tokens are 0
  if (tokens === 0) {
    dashboardError.setStyle({ display: "flex" });

    // Hide the "Purchase Tokens" button if the plan is "free"
    if (plan === "free") {
      purchaseTokensError.setStyle({ display: "none" });
    }

    // Hide the "Upgrade Plan" button if the plan is "pro"
    if (plan === "pro") {
      upgradePlanError.setStyle({ display: "none" });
    }
  }
};

// Function to handle user logout
const handleLogout = async () => {
  const logoutButtonElement = document.querySelector("#logoutButton");
  if (logoutButtonElement) {
    const logoutButton = new WFComponent("#logoutButton");
    logoutButton.on("click", async () => {
      await logout();
      window.location.href = "/login"; // Redirect to login page after successful logout
    });
  }
};

// Function to log out if the session is invalid or user fetch fails
const forceLogout = async () => {
  await logout(); // Clean up session
  window.location.href = "/login"; // Redirect to login
};

// Function to initialize the dashboard
export const initDashboard = async () => {
  // Check if the user is logged in by verifying the existence of auth_token
  if (!isLoggedIn()) {
    await forceLogout(); // If not logged in, log out and redirect
    return;
  }

  // Attempt to fetch current user info using the auth/me endpoint
  const success = await fetchCurrentUser();

  if (success) {
    const userInfo = getUserInfo();
    if (userInfo) {
      displayUserInfo(userInfo.name, userInfo.plan, userInfo.tokens_remaining);
      checkTokenAndPlanAlerts(userInfo.tokens_remaining, userInfo.plan);
    } else {
      console.error("Failed to retrieve user information.");
      await forceLogout(); // Log out and redirect if user info is missing
    }
  } else {
    await forceLogout(); // Log out and redirect if auth/me request fails
  }

  handleLogout(); // Attach logout button functionality
};
