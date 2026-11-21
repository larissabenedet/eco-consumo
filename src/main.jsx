import "./posthog.js";
import { posthogLog } from "./posthog-logger";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

posthogLog.applicationStarted();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
