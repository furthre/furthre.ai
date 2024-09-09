import { WFComponent } from "@xatom/core";
import { getUserInfo } from "../auth/authConfig"; // Import the function to get user information

// Function to check token count and display the out-of-tokens dialog
export const initTokenCheck = () => {
  // Get user info (including tokens_remaining) from localStorage or session
  const userInfo = getUserInfo();

  if (!userInfo) {
    console.error("User information is missing. Cannot check tokens.");
    return;
  }

  const tokensRemaining = userInfo.tokens_remaining;

  // If tokens_remaining is 0, show the dialog and prevent it from being closed
  if (tokensRemaining === 0) {
    const dialog = new WFComponent<HTMLElement>("#actionRequiredDialog");
    const dialogElement = dialog.getElement() as HTMLDialogElement;

    // Remove the element with class .generator_wrap from the DOM
    const generatorWrapElement = document.querySelector(".generator_wrap");
    if (generatorWrapElement) {
      generatorWrapElement.remove(); // Completely remove the element from the DOM
    }

    if (dialogElement.showModal) {
      dialogElement.showModal();

      // Prevent closing via Escape key
      dialogElement.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          event.preventDefault(); // Prevent the default action of closing the dialog
        }
      });

      // Prevent closing by clicking outside the dialog
      dialogElement.addEventListener("click", (event) => {
        if (event.target === dialogElement) {
          event.preventDefault(); // Prevent closing when clicking outside
        }
      });

      // Prevent closing via cancel event
      dialogElement.addEventListener("cancel", (event) => {
        event.preventDefault(); // Prevent closing via 'cancel' (ESC key default)
      });
    } else {
      console.error("Dialog element does not support showModal()");
    }
  }
};
