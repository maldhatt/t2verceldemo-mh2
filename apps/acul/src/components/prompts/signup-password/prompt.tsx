import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import Component from "./SignupPwComponent.tsx";

/**
 * Adding root element to the DOM
 */
const rootElement = document.createElement("div");
rootElement.id = "signup-pw-root";

document.body.appendChild(rootElement);
document.body.style.overflow = "hidden";

createRoot(document.getElementById("signup-pw-root")!).render(
  <StrictMode>
    <Component />
  </StrictMode>
);
