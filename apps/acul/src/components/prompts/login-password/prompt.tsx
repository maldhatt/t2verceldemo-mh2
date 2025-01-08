import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import Component from "./LoginPasswordComponent";

/**
 * Adding root element to the DOM
 */
const rootElement = document.createElement("div");
rootElement.id = "loginpw-root";

document.body.appendChild(rootElement);
document.body.style.overflow = "hidden";

createRoot(document.getElementById("loginpw-root")!).render(
  <StrictMode>
    <Component />
  </StrictMode>
);

