import { WFComponent, WFDynamicList } from "@xatom/core";
import { apiClient } from "../api/apiConfig"; // Ensure the correct path to your API config

// Define the interface for history items
interface HistoryItem {
  id: string;
  users_id: string;
  generator: string;
  created_at: number;
  content: string;
  title: string;
}

export const initHistoryPage = async () => {
  // Initialize WFDynamicList with selectors
  const historyList = new WFDynamicList<HistoryItem>(".history_list", {
    rowSelector: ".history_link", // Selector for the history list item template
    loaderSelector: ".history_loading", // Selector for the loader
    emptySelector: ".history_list_empy", // Selector for the empty state
  });

  // Customize the rendering of each list item
  historyList.rowRenderer(({ rowData, rowElement }) => {
    // Select the elements using class selectors
    const titleElement = rowElement.getChildAsComponent(".listitemtitle");
    const generatorElement =
      rowElement.getChildAsComponent(".listitemgenerator");
    const dateElement = rowElement.getChildAsComponent(".listitemdate");

    // Format the generator: Remove underscores, capitalize first letter
    const formattedGenerator = rowData.generator
      .replace(/_/g, " ") // Replace underscores with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word

    // Format the date: Include time
    const formattedDate = new Date(rowData.created_at).toLocaleString();

    // Update the elements with data from rowData
    titleElement.setText(rowData.title);
    generatorElement.setText(formattedGenerator);
    dateElement.setText(formattedDate);

    // Add a click event to open the dialog with the item's content
    rowElement.on("click", () => {
      const dialogTitle = new WFComponent("#dialog-title");
      const historyContent = new WFComponent("#historyContent");
      const dialog = new WFComponent<HTMLElement>("#actionRequiredDialog");

      dialogTitle.setText(rowData.title);
      historyContent.getElement().innerHTML = rowData.content; // Set the content HTML

      // Cast the dialog element to HTMLDialogElement to use showModal()
      const dialogElement = dialog.getElement() as HTMLDialogElement;
      if (dialogElement.showModal) {
        dialogElement.showModal(); // Show the dialog

        // Close the dialog when clicking outside of it
        dialogElement.addEventListener("click", (event) => {
          if (event.target === dialogElement) {
            dialogElement.close();
          }
        });

        // Close the dialog when the Escape key is pressed
        dialogElement.addEventListener("keydown", (event) => {
          if (event.key === "Escape") {
            dialogElement.close();
          }
        });
      } else {
        console.error("Dialog element does not support showModal()");
      }
    });

    return rowElement;
  });

  try {
    // Fetch history data from the API
    historyList.changeLoadingStatus(true);
    const response = await apiClient.get<HistoryItem[]>("/history").fetch();

    // Sort the response data by the created_at field (newest first)
    const sortedResponse = response.sort((a, b) => b.created_at - a.created_at);

    // Set sorted data to the dynamic list
    historyList.setData(sortedResponse);

    // Once the list is rendered, add the month dividers
    historyList.forceRender();
    addMonthDividers(sortedResponse);

    // Initialize search functionality
    initSearchFunctionality(sortedResponse, historyList);
  } catch (error) {
    console.error("Error fetching history:", error);
  }
};

// Function to add month dividers after the list is rendered
const addMonthDividers = (historyItems: HistoryItem[]) => {
  const historyListContainer = document.querySelector(".history_list");
  let lastRenderedMonth: string | null = null;

  // Remove any old month dividers to avoid duplicates
  document.querySelectorAll(".month-divider").forEach((divider) => {
    divider.remove();
  });

  // Clear the list container before re-rendering the items with dividers
  if (historyListContainer) {
    historyListContainer.innerHTML = "";
  }

  historyItems.forEach((item) => {
    const itemDate = new Date(item.created_at);
    const currentMonth = itemDate.toLocaleString("default", {
      month: "long",
      year: "numeric",
    });

    // If this is the first item of a new month, insert a month divider before it
    if (currentMonth !== lastRenderedMonth) {
      lastRenderedMonth = currentMonth;

      // Create the month divider element
      const monthDivider = document.createElement("div");
      monthDivider.innerHTML = `<h3>${currentMonth}</h3><hr>`;
      monthDivider.classList.add("month-divider");

      // Append the month divider to the history list container
      historyListContainer?.appendChild(monthDivider);
    }

    // Render the current history item
    const listItem = createHistoryItem(item); // Use the function that renders individual list items
    historyListContainer?.appendChild(listItem);
  });
};

// Function to create individual list items (simplified for this example)
const createHistoryItem = (item: HistoryItem): HTMLElement => {
  // Format the generator: Remove underscores, capitalize first letter
  const formattedGenerator = item.generator
    .replace(/_/g, " ") // Replace underscores with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word

  // Create the button element for each history item
  const button = document.createElement("button");
  button.classList.add("history_link");

  // Populate the button with the necessary content (title, date, generator)
  button.innerHTML = `
    <div class="history_link_content u-hflex-left-center">
      <div>
        <div class="u-text-small is-blue listitemgenerator u-weight-bold">${
          formattedGenerator // Use formatted generator here
        }</div>
        <div class="history_title u-weight-bold listitemtitle clamp-two-lines">${
          item.title
        }</div>
      </div>
      <div class="listitemdate">${new Date(
        item.created_at
      ).toLocaleString()}</div>
    </div>`;

  // Add the click event for opening the dialog
  button.addEventListener("click", () => openDialog(item.title, item.content));

  return button;
};

// Function to open the dialog with the given title and content
const openDialog = (title: string, content: string) => {
  const dialogTitle = new WFComponent("#dialog-title");
  const historyContent = new WFComponent("#historyContent");
  const dialog = new WFComponent<HTMLElement>("#actionRequiredDialog");

  dialogTitle.setText(title);
  historyContent.getElement().innerHTML = content; // Set the content HTML

  // Cast the dialog element to HTMLDialogElement to use showModal()
  const dialogElement = dialog.getElement() as HTMLDialogElement;
  if (dialogElement.showModal) {
    dialogElement.showModal(); // Show the dialog

    // Close the dialog when clicking outside of it
    dialogElement.addEventListener("click", (event) => {
      if (event.target === dialogElement) {
        dialogElement.close();
      }
    });

    // Close the dialog when the Escape key is pressed
    dialogElement.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        dialogElement.close();
      }
    });
  } else {
    console.error("Dialog element does not support showModal()");
  }
};

// Function to initialize search functionality
const initSearchFunctionality = (
  historyItems: HistoryItem[],
  historyList: WFDynamicList<HistoryItem>
) => {
  const searchInput = document.getElementById(
    "SearchInput"
  ) as HTMLInputElement;

  // Add an event listener for the input field
  searchInput.addEventListener("input", (event) => {
    const query = (event.target as HTMLInputElement).value.toLowerCase();

    // Filter the history items based on the search query
    const filteredItems = historyItems.filter((item) => {
      const formattedDate = new Date(item.created_at)
        .toLocaleString()
        .toLowerCase();
      const formattedGenerator = item.generator
        .replace(/_/g, " ")
        .toLowerCase();

      // Generate the current month-year string
      const itemMonthYear = new Date(item.created_at)
        .toLocaleString("default", {
          month: "long",
          year: "numeric",
        })
        .toLowerCase();

      return (
        item.title.toLowerCase().includes(query) ||
        formattedGenerator.includes(query) ||
        formattedDate.includes(query) ||
        itemMonthYear.includes(query) // Include month-year in search
      );
    });

    // Update the dynamic list with the filtered items
    historyList.setData(filteredItems);

    // Re-add the month dividers after filtering
    historyList.forceRender();
    addMonthDividers(filteredItems);
  });
};
