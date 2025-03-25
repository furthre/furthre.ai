import { WFRoute } from "@xatom/core";
import { initSocialMediaGenerator } from "../modules/generators/social_media_generator/main";
import { initFreeWritingForm } from "../modules/generators/editor_generator/main";
import { initializePropertyDescriptionGenerator } from "../modules/generators/property_description_generator/main";
import { initializeNewsletterGenerator } from "../modules/generators/newsletter_generator/main";
import { initializeNegotiatorGenerator } from "../modules/generators/negotiator_generator/main";
import { initSignupForm } from "../modules/auth/signup/signup";
import { initSelectPlan } from "../modules/auth/signup/selectPlan";
import { initLoginForm } from "../modules/auth/login/login";
import { initDashboard } from "../modules/dashboard/main";
import { initPurchaseTokens } from "../modules/dashboard/purchaseTokens";
import { initAccountSettings } from "../modules/dashboard/accountSettings";
import { initPasswordResetForm } from "../modules/auth/reset_password/passwordReset";
import { initForgotPasswordForm } from "../modules/auth/reset_password/forgotPassword";
import { initMagicLinkLogin } from "../modules/auth/reset_password/magicLink";
import { initHistoryPage } from "../modules/dashboard/history";
import { initTokenCheck } from "../modules/dashboard/outOfTokensDialog";
import { initBillingErrorCheck } from "../modules/dashboard/billingErrorDialog"

new WFRoute("/dashboard/generators/social-media").execute(() => {
  console.log("init social media generator");
  initSocialMediaGenerator();
});

new WFRoute("/dashboard/generators/property-descriptions").execute(() => {
  console.log("init property description generator");
  initializePropertyDescriptionGenerator();
});

new WFRoute("/dashboard/generators/editor").execute(() => {
  console.log("init free writing form");
  initFreeWritingForm();
});

new WFRoute("/dashboard/generators/newsletter").execute(() => {
  console.log("init newsletter generator");
  initializeNewsletterGenerator();
});

new WFRoute("/dashboard/generators/negotiator").execute(() => {
  console.log("init negotiator generator");
  initializeNegotiatorGenerator();
});

// New signup route
new WFRoute("/sign-up").execute(() => {
  console.log("init signup form");
  initSignupForm();
  initSelectPlan();
});

// New login route
new WFRoute("/login").execute(() => {
  console.log("init login form");
  initLoginForm();
});

// New dashboard route
new WFRoute("/dashboard").execute(() => {
  console.log("init dashboard");
  initDashboard();
});

// New dashboard route
new WFRoute("/dashboard/(.*)").execute(() => {
  console.log("init dashboard");
  initDashboard();
  initBillingErrorCheck();
});

new WFRoute("/dashboard/generators/(.*)").execute(() => {
  console.log("init token check");
  initTokenCheck();
});

// New purchase tokens route
new WFRoute("/dashboard/purchase-tokens").execute(() => {
  console.log("init purchase tokens");
  initPurchaseTokens();
});

// New account settings route
new WFRoute("/dashboard/account").execute(() => {
  console.log("init account settings");
  initAccountSettings();
});

// New history route
new WFRoute("/dashboard/history").execute(() => {
  console.log("init history page");
  initHistoryPage();
});

// New password reset route
new WFRoute("/reset-password").execute(() => {
  console.log("init password reset form");
  initPasswordResetForm();
});

// New password reset route
new WFRoute("/forgot-password").execute(() => {
  console.log("init forgot password form");
  initForgotPasswordForm();
});

// New Magic Link login route
new WFRoute("/magic-link").execute(() => {
  console.log("init magic link login");
  initMagicLinkLogin();
});
