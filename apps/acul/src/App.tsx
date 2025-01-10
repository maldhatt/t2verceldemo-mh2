// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import LoginIdComponent from "./components/prompts/login-id/LoginIdComponent";
import LoginPwlessComponent from "./components/prompts/login-pwless-otp/LoginPwlessComponent";
// import LoginIdComponent from "./components/prompts/login-id/LoginIdComponent";
// import SignupComponent from "./components/prompts/signup-id/SignupComponent";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <LoginIdComponent />
      {/* <LoginPwlessComponent /> */}
    </>
  );
}

export default App;
