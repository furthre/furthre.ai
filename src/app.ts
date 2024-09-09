import { onReady } from "@xatom/core";
import "./routes"; // This will automatically execute the routes defined in your routes/index.ts

// The onReady method makes sure that everything is initialized after the Webflow page has fully loaded
onReady(() => {
  console.log("App initialized and routes loaded");
});
