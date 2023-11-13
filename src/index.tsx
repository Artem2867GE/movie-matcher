import React from "react";
import App from "./components/App";
import { createRoot } from "react-dom/client";
import { createRouter } from "./routes";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App createRouter={createRouter} />
  </React.StrictMode>
);
