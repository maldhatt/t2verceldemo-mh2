import Header from "@/components/shared/components/Header";
import Footer from "@/components/shared/components/Footer";
import SignUp from "@/components/shared/acul/SignUp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import "./styles.css";
import { useEffect, useState } from "react";
import LoginPasswordlessEmailCode from "@auth0/auth0-acul-js/login-passwordless-email-code";
import { redirectTo } from "@/components/shared/utils";

export default function LoginPwlessComponent() {
  const loginPasswordlessEmailCodeManager = new LoginPasswordlessEmailCode();
  const [otp, setOtp] = useState("");
  let authParams =
    loginPasswordlessEmailCodeManager.untrustedData.getAuthParams();
  let screenHint: string | undefined = "";
  if (authParams) {
    screenHint = authParams.screenHint;
  }
  let screenData = loginPasswordlessEmailCodeManager.screen.getScreenData();
  let email = "";
  if (screenData && "username" in screenData) {
    email = screenData["username"]!;
  }

  useEffect(() => {
    if (otp.length === 6) {
      // 6 digits have been entered, submit
      loginPasswordlessEmailCodeManager.submitCode({
        email,
        code: otp,
      });
    }
  }, [otp]);
  return (
    <div className="overflow-auto">
      <div className="min-h-screen h-screen flex flex-col text-white min-w-[100%] w-[100%]">
        <Header type="login" />

        <main className="flex-grow flex items-center justify-center px-4 bg-[hsla(0,0%,4%,1)]">
          <div className="flex justify-center items-center w-full p-[24px]">
            <div className="text-center max-w-[400px] text-center mb-[1rem]">
              <h2 className="mt-6 text-[2rem] text-[hsla(0,0%,93%,1)] font-bold mb-[1rem]">
                Verification
              </h2>
              <div className="flex flex-col justify-center items-center w-full max-w-[320px] self-center leading-[24px] gap-[1.25rem]">
                <p className="text-[0.875rem] font-normal text-center text-[hsla(0,0%,63%,1)] m-0 leading-[1.25rem]">
                  If you have an account, we have sent a code to{" "}
                  <span className="font-bold">
                    {email}
                    {". "}
                  </span>
                  Enter it below.
                </p>
                <InputOTP
                  maxLength={6}
                  value={otp}
                  pattern={REGEXP_ONLY_DIGITS}
                  onChange={(otp) => setOtp(otp)}
                >
                  <InputOTPGroup className="flex justify-center items-center gap-[0.5rem] group">
                    <InputOTPSlot index={0} className="otpdiv" />
                    <InputOTPSlot index={1} className="otpdiv" />
                    <InputOTPSlot index={2} className="otpdiv" />
                    <InputOTPSlot index={3} className="otpdiv" />
                    <InputOTPSlot index={4} className="otpdiv" />
                    <InputOTPSlot index={5} className="otpdiv" />
                  </InputOTPGroup>
                </InputOTP>
                <div className="text-center">
                  <a
                    href="#"
                    className={`text-[14px]
                   text-[#47a8ff] hover:underline hover:text-[#47a8ff]`}
                    onClick={() => {
                      if (screenHint && screenHint === "signup") {
                        redirectTo({
                          screen: "signup",
                          screenHint: "signup",
                          connection: "email",
                          extFrom: "view3",
                        });
                      } else {
                        redirectTo({ screen: "login", connection: "email" });
                      }
                    }}
                  >
                    ← Back
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        <SignUp />
      </div>
      <Footer />
    </div>
  );
}
