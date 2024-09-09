import { WFComponent, WFFormComponent } from "@xatom/core";
import { updateFormData } from "../utils/formUtils";
import { goNextSlide } from "../utils/sliderUtils";
// import { apiClient } from "../../../api/apiConfig"; // Import the apiClient (commented out)

export const initStepOne = () => {
  const form = new WFFormComponent("#propertyDescriptionGenerator");
  const nextButton = new WFComponent("#submitStepOne");
  const errorElement = new WFComponent("#submitStepOneError");
  const addressInput = new WFComponent("#propertyAddressInput");

  const inputElement = addressInput.getElement() as HTMLInputElement;

  /*
  // Autocomplete functionality - commented out
  const dropdown = document.createElement('div');
  dropdown.id = 'autocomplete-dropdown';
  dropdown.style.position = 'absolute';
  dropdown.style.backgroundColor = 'white';
  dropdown.style.border = '1px solid #ccc';
  dropdown.style.width = '100%';
  dropdown.style.zIndex = '1000';
  inputElement.parentNode?.appendChild(dropdown);

  inputElement.addEventListener('input', function () {
    const query = inputElement.value;

    if (query.length >= 3) {
      apiClient.get('/autocomplete', { params: { text: query } })
        .fetch()
        .then((data: GeoapifyResponse) => {
          const suggestions = data.features;
          dropdown.innerHTML = ''; 

          suggestions.forEach(suggestion => {
            const option = document.createElement('div');
            option.className = 'dropdown-option';
            option.style.padding = '8px';
            option.style.cursor = 'pointer';
            option.innerHTML = suggestion.properties.formatted;
            option.addEventListener('click', () => {
              inputElement.value = suggestion.properties.formatted;
              dropdown.innerHTML = ''; 
            });
            dropdown.appendChild(option);
          });
        })
        .catch((error: any) => {
          console.error('Error fetching autocomplete suggestions:', error);
        });
    } else {
      dropdown.innerHTML = ''; 
    }
  });
  */

  // Handle the next step button click
  nextButton.on("click", (event) => {
    event.preventDefault(); // Prevent default button action

    const address = inputElement.value.trim();

    if (!address) {
      errorElement.setText("Please enter the property address.");
      errorElement.setStyle({ display: "block" });
    } else {
      errorElement.setText("");
      errorElement.setStyle({ display: "none" });

      updateFormData({ property_address: address });

      goNextSlide();
    }
  });
};
