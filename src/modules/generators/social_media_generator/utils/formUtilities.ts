import { WFInvisibleForm, WFFormComponent } from "@xatom/core";

// Prevent form submission on Enter key press
export const preventFormSubmitOnEnter = (formSelector: string) => {
  const form = document.querySelector(formSelector);
  if (form) {
    form.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
      }
    });
  }
};

export const updateFormData = (newData: {
  [key: string]: string | File | File[];
}) => {
  // Retrieve the current form data from localStorage
  let formData = JSON.parse(localStorage.getItem("formData") || "{}");

  // Merge new data into the existing form data
  formData = { ...formData, ...newData };

  // Convert comma-separated strings to arrays for specific fields
  ["select_platforms", "select_tone", "select_style"].forEach((key) => {
    if (formData[key] && typeof formData[key] === "string") {
      formData[key] = formData[key]
        .split(",")
        .map((item: string) => item.trim());
    }
  });

  // Save the updated form data back to localStorage
  localStorage.setItem("formData", JSON.stringify(formData));
};

export const submitFormUtility = (
  formSelector: string,
  useInvisibleForm = false,
  onSuccess?: () => void,
  onError?: () => void
) => {
  // Retrieve the accumulated form data from localStorage
  const formData = JSON.parse(localStorage.getItem("formData") || "{}");

  const stringFormData: { [key: string]: string } = {};

  // Convert all form data to strings to ensure compatibility
  for (const key in formData) {
    const value = formData[key];
    if (typeof value === "string") {
      stringFormData[key] = value;
    } else if (value instanceof File) {
      stringFormData[key] = value.name; // Example of handling File as string, you might need different logic
    } else if (Array.isArray(value)) {
      stringFormData[key] = value.map((file) => (file as File).name).join(", "); // Handling File array
    }
  }

  if (useInvisibleForm) {
    // Using WFInvisibleForm for submission
    const invisibleForm = new WFInvisibleForm(formSelector);

    // Set form data
    invisibleForm.setFormData(stringFormData);

    // Handle success and error callbacks
    if (onSuccess) invisibleForm.onSuccess(onSuccess);
    if (onError) invisibleForm.onError(onError);

    // Submit the form
    invisibleForm.submitForm();
  } else {
    // Using WFFormComponent for submission
    const formComponent = new WFFormComponent(formSelector);

    // Set form data
    formComponent.setFromData(stringFormData);

    // Submit the form
    formComponent.submitWebflowForm();

    // Manually trigger the success and error states if needed
    if (onSuccess) formComponent.onFormSubmit(onSuccess);
    if (onError) formComponent.getErrorComponent().on("click", onError);
  }
};
