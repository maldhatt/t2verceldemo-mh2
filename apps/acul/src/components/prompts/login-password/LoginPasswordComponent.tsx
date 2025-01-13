import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { LoginId } from "@auth0/auth0-acul-js";
import Header from "@/components/shared/components/Header";
import Footer from "@/components/shared/components/Footer";
import SignUp from "@/components/shared/acul/SignUp";

export default function LoginPasswordComponent() {
  const { state } = new LoginId().transaction;
  const [progress, setProgress] = useState(13);
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(99), 1000;
    });
    var switchConnectionButton = document.getElementById("loginBtn");
    const timer2 = setTimeout(() => {
      switchConnectionButton?.click(), 1000;
    });

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);
  return (
    <div className="overflow-auto">
      <div className="min-h-screen h-screen flex flex-col text-white min-w-[100%] w-[100%]">
        <Header type="login" />

        <main className="flex-grow flex items-center justify-center px-4 bg-[hsla(0,0%,4%,1)]">
          <div className="w-full max-w-sm space-y-5 !max-w-[320px]">
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-bold mb-[1rem]">
                Log in to Vercel
              </h2>

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
                  id="loginBtn"
                  data-action-button-secondary="true"
                >
                  <span className="text-[white]">
                    Send a secure code to LOGIN by email
                  </span>
                </button>
              </form>
              <Progress value={progress} className="bg-[white]" />
            </div>
          </div>
        </main>

        <SignUp />
      </div>
      <Footer />
    </div>
  );
}
