import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../playground/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
