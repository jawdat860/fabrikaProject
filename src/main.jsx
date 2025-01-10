import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./fonts/SfprodisplayBlackitalic.ttf";
import "./fonts/TamilMN-01.ttf";
import "@telegram-apps/telegram-ui/dist/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
