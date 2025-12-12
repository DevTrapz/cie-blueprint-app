import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/main-styles.css";
import "./styles/class-attributes.css";
import "./styles/layout-grid.css";
import "./styles/color-styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
