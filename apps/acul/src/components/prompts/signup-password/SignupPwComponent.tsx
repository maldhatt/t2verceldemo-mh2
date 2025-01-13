import Footer from "@/components/shared/components/Footer";
import Header from "@/components/shared/components/Header";
import { Progress } from "@/components/ui/progress";
import { SignupPassword, LoginId, SignupId } from "@auth0/auth0-acul-js";
import { useState, useEffect } from "react";

export default function SignupPwComponent() {
  const signupPasswordManager = new SignupPassword();
  console.log(signupPasswordManager, new LoginId(), new SignupId());

  console.log(window);
  const { loginLink } = signupPasswordManager.screen;
  const { state } = signupPasswordManager.transaction;
  const [progress, setProgress] = useState(13);
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(99), 1000;
    });
    var switchConnectionButton = document.getElementById("signupBtn");
    const timer2 = setTimeout(() => {
      switchConnectionButton?.click(), 1000;
    });
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);
  return (
    <>
      <Header type="signup" loginLink={`${loginLink}`} />
      <div className="bg-[hsla(0,0%,0%,1)]">
        <div className="min-h-[calc(100vh - 64px)] pt-[120px]">
          <main id="main-sect" className="min-h-screen">
            <main
              className={`min-w-[550px] max-w-[550px] rounded-[12px] flex-col flex mx-auto my-0 bg-[hsla(0,0%,4%,1)] shadow-signupBox`}
            >
              <form method="post" data-form-secondary="true" className="hidden">
                <input
                  type="hidden"
                  id="placeholder"
                  name="state"
                  value={state}
                />
                <input type="hidden" name="connection" value="email" />
                <button
                  type="submit"
                  className="custom-button"
                  id="signupBtn"
                  data-action-button-secondary="true"
                >
                  <span className="text-[white]">
                    Send a secure code to SIGNUP by email
                  </span>{" "}
                </button>
              </form>
              <Progress value={progress} className="bg-[white]" />
            </main>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
