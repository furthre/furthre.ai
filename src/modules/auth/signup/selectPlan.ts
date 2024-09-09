import { WFComponent } from "@xatom/core";
import { apiClient } from "../../api/apiConfig";

// Helper function to get user email from localStorage
const getUserEmail = (): string | null => {
  const userInfoString = localStorage.getItem("user_info");
  if (userInfoString) {
    const userInfo = JSON.parse(userInfoString);
    return userInfo.email;
  }
  return null;
};

// Function to submit plan selection
export const submitPlan = async (plan: string, subscriptionType: string) => {
  const email = getUserEmail();

  if (!email) {
    console.error("User email not found.");
    return;
  }

  const payload = {
    email,
    plan,
    subscription_type: subscriptionType, // 'monthly' or 'annual'
  };

  // DOM components for loading and error handling
  const pricingContainer = new WFComponent("#pricingContainer");
  const checkoutLoading = new WFComponent("#checkoutLoading");
  const checkoutErrorWrap = new WFComponent("#checkoutErrorWrap");

  try {
    // Hide the pricing container and show loading indicator
    pricingContainer.setStyle({ display: "none" });
    checkoutLoading.setStyle({ display: "flex" });

    // Free plan case: Redirect directly to the dashboard
    if (plan === "free") {
      localStorage.removeItem("selectedPlan");
      window.location.href = "/dashboard";
      return;
    }

    // Make the API call to select the plan
    const response = await apiClient
      .post("/select_plan", {
        data: payload,
      })
      .fetch();

    console.log("Plan selected successfully:", response);

    // Clear selectedPlan from localStorage before navigating to checkout
    localStorage.removeItem("selectedPlan");

    // Navigate to the checkout URL
    if (response) {
      window.location.href = String(response); // Redirect to the Stripe Checkout URL
    } else {
      throw new Error("No checkout URL returned in the response.");
    }
  } catch (error) {
    console.error("Failed to select plan:", error);

    // Hide the loading indicator and show the error message
    checkoutLoading.setStyle({ display: "none" });
    checkoutErrorWrap.setStyle({ display: "flex" });
  }
};

// Initialize the Select Plan Step
export const initSelectPlan = () => {
  const freePlanMonthlyButton = new WFComponent("#freePlanMonthly");
  const freePlanAnnualButton = new WFComponent("#freePlanAnnual");
  const basicPlanMonthlyButton = new WFComponent("#basicPlanMonthly");
  const growthPlanMonthlyButton = new WFComponent("#growthPlanMonthly");
  const proPlanMonthlyButton = new WFComponent("#proPlanMonthly");

  const basicPlanAnnualButton = new WFComponent("#basicPlanAnnual");
  const growthPlanAnnualButton = new WFComponent("#growthPlanAnnual");
  const proPlanAnnualButton = new WFComponent("#proPlanAnnual");

  // Event listeners for free plan selection
  freePlanMonthlyButton.on("click", () => submitPlan("free", "monthly"));
  freePlanAnnualButton.on("click", () => submitPlan("free", "annual"));

  // Event listeners for each paid plan selection
  basicPlanMonthlyButton.on("click", () => submitPlan("basic", "monthly"));
  growthPlanMonthlyButton.on("click", () => submitPlan("growth", "monthly"));
  proPlanMonthlyButton.on("click", () => submitPlan("pro", "monthly"));

  basicPlanAnnualButton.on("click", () => submitPlan("basic", "annual"));
  growthPlanAnnualButton.on("click", () => submitPlan("growth", "annual"));
  proPlanAnnualButton.on("click", () => submitPlan("pro", "annual"));
};
