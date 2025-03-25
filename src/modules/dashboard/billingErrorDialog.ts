import { WFComponent } from "@xatom/core";
import { getUserInfo } from "../auth/authConfig"; // Import the function to get user information

// Function to check for billing errors and display the billing error dialog
export const initBillingErrorCheck = () => {
  // Get user info (including billing_error) from localStorage or session
  const userInfo = getUserInfo();

  if (!userInfo) {
    console.error("User information is missing. Cannot check billing error.");
    return;
  }

  // If billing_error is true, show the billing error dialog
  if (userInfo.billing_error === true) {
    // Remove the element with class .generator_wrap from the DOM, if present
    const generatorWrapElement = document.querySelector(".generator_wrap");
    if (generatorWrapElement) {
      generatorWrapElement.remove();
    }

    const dialog = new WFComponent<HTMLElement>("#billingActionRequiredDialog");
    const dialogElement = dialog.getElement() as HTMLDialogElement;

    if (dialogElement.showModal) {
      dialogElement.showModal();

      // Prevent closing via Escape key
      dialogElement.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          event.preventDefault();
        }
      });

      // Prevent closing by clicking outside the dialog
      dialogElement.addEventListener("click", (event) => {
        if (event.target === dialogElement) {
          event.preventDefault();
        }
      });

      // Prevent closing via cancel event
      dialogElement.addEventListener("cancel", (event) => {
        event.preventDefault();
      });
    } else {
      console.error("Dialog element does not support showModal()");
    }
  }
};
