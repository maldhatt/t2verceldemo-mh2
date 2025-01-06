import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import Component from "./LoginIdComponent.tsx";

/**
 * Adding root element to the DOM
 */
const rootElement = document.createElement("div");
rootElement.id = "loginid-root";

document.body.appendChild(rootElement);
document.body.style.overflow = "hidden";

createRoot(document.getElementById("loginid-root")!).render(
  <StrictMode>
    <Component />
  </StrictMode>
);

