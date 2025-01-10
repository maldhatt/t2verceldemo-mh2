import { Dispatch, SetStateAction, useState } from "react";
import "../../../index.css";
import { LoginId } from "@auth0/auth0-acul-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Footer from "@/components/shared/components/Footer";
import Header from "@/components/shared/components/Header";
import SignUp from "@/components/shared/acul/SignUp";

import SocialLogin from "@/components/shared/acul/SocialLogin";
import EmailPasswordless from "@/components/shared/acul/EmailPasswordless";

// import { redirectTo } from "@/components/shared/utils";

const loginIdManager = new LoginId();

function Divider() {
  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-black text-gray-400"></span>
        </div>
      </div>
    </div>
  );
}

function EnterpriseLogin(props: {
  display?: boolean;
  setDisplay?: Dispatch<SetStateAction<boolean>>;
}) {
  const [isSaml, setIsSaml] = useState(false);
  const [slug, setSlug] = useState("");

  const { setDisplay } = props;

  return (
    <div className="mt-6 flex flex-col gap-2">
      {isSaml && (
        <>
          <Label htmlFor="slug" className="">
            <div className="text-left w-full mb-[8px] text-[hsla(0,0%,63%,1)] text-[13px] flex items-center gap-[5px]">
              <span>Team Slug</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <svg
                      height="16"
                      strokeLinejoin="round"
                      viewBox="0 0 16 16"
                      width="16"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9 11C9 11.5523 8.55229 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55229 10 9 10.4477 9 11ZM7.09584 5.82182C7.25716 5.48223 7.6022 5.25 7.99999 5.25C8.55227 5.25 8.99999 5.69772 8.99999 6.25C8.99999 6.75329 8.62748 7.17086 8.14337 7.23989C7.70367 7.3026 7.24999 7.67511 7.24999 8.25V8.5V9.25H8.74999V8.63535C9.76443 8.31661 10.5 7.36971 10.5 6.25C10.5 4.86929 9.3807 3.75 7.99999 3.75C7.00158 3.75 6.14136 4.3353 5.74095 5.17818L5.41913 5.85563L6.77402 6.49926L7.09584 5.82182Z"
                        fill="#ccc"
                      ></path>
                    </svg>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Your team slug is the identifier in the URLs for your
                      team. e.g. vercel.com/acme is "acme".
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="shadow-button rounded-[8px] focus-within:shadow-input">
              <Input
                className="h-[48px] !text-[1rem] rounded-[8px] py-[0px] px-[12px] !shadow-button focus:outline-offset-0 border-none"
                placeholder="my-team"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </div>
          </Label>
          <span className="geist-spacer"></span>
        </>
      )}
      <Button
        onClick={() => {
          if (isSaml) {
            if (slug.length > 0 && slug === "okta") {
              loginIdManager.socialLogin({
                connection: "TheCrownlands",
              });
            }
          } else {
            setIsSaml(true);
          }
        }}
        className="flex h-[48px] px-[14px] bg-transparent !border-[#333] text-[16px] hover:border-none focus:border-none active:border-none hover:bg-[#ffffff17]"
      >
        <span className="">
          <svg
            data-testid="geist-icon"
            height="16"
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            width="16"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 4.5V6H6V4.5C6 3.39543 6.89543 2.5 8 2.5C9.10457 2.5 10 3.39543 10 4.5ZM4.5 6V4.5C4.5 2.567 6.067 1 8 1C9.933 1 11.5 2.567 11.5 4.5V6H12.5H14V7.5V12.5C14 13.8807 12.8807 15 11.5 15H4.5C3.11929 15 2 13.8807 2 12.5V7.5V6H3.5H4.5ZM11.5 7.5H10H6H4.5H3.5V12.5C3.5 13.0523 3.94772 13.5 4.5 13.5H11.5C12.0523 13.5 12.5 13.0523 12.5 12.5V7.5H11.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <span className="">Continue with SAML SSO</span>
      </Button>
      <Button
        onClick={() => {
          loginIdManager.passkeyLogin();
        }}
        className="flex h-[48px] px-[14px] bg-transparent !border-[#333] text-[16px] hover:border-none focus:border-none active:border-none hover:bg-[#ffffff17]"
      >
        <span className="">
          <svg
            fill="none"
            height="16"
            opacity="0.8"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_6846_808)">
              <path
                clipRule="evenodd"
                d="M2 2.75C2 1.23122 3.23122 0 4.75 0H5.25C6.76878 0 8 1.23122 8 2.75V3.25C8 4.76878 6.76878 6 5.25 6H4.75C3.23122 6 2 4.76878 2 3.25V2.75ZM4.75 1.5C4.05964 1.5 3.5 2.05964 3.5 2.75V3.25C3.5 3.94036 4.05964 4.5 4.75 4.5H5.25C5.94036 4.5 6.5 3.94036 6.5 3.25V2.75C6.5 2.05964 5.94036 1.5 5.25 1.5H4.75ZM5 9C3.57922 9 2.27192 9.77606 1.59158 11.0234L1.5 11.1912V12.5H6H8.5H9V14H0.75H0V13.25V11V10.8088L0.0915783 10.6409L0.274735 10.3051C1.21793 8.57589 3.03031 7.5 5 7.5C6.50888 7.5 7.92544 8.13136 8.92967 9.20412L7.92725 10.3318C7.19883 9.49584 6.13566 9 5 9ZM16 6C16 7.35173 15.1748 8.51071 14.0006 9.00065L15.5 10.5L14 12L15.5 13.5L14 15L13 16L11.5 14.5V9.00092C10.3255 8.51114 9.5 7.35197 9.5 6C9.5 4.20507 10.9551 2.75 12.75 2.75C14.5449 2.75 16 4.20507 16 6ZM12.75 6.25C13.3023 6.25 13.75 5.80228 13.75 5.25C13.75 4.69772 13.3023 4.25 12.75 4.25C12.1977 4.25 11.75 4.69772 11.75 5.25C11.75 5.80228 12.1977 6.25 12.75 6.25Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_6846_808">
                <rect fill="currentColor" height="16" width="16"></rect>
              </clipPath>
            </defs>
          </svg>
        </span>
        <span className="">Login with Passkey</span>
      </Button>
      <span className="geist-spacer"></span>
      <div className="text-center">
        <a
          href="#"
          onClick={() => {
            // redirectTo({ screen: "login", connection: "email" });
            setDisplay!(true);
          }}
          className="text-[14px] text-[#47a8ff] hover:underline hover:text-[#47a8ff]"
        >
          Continue with Email →
        </a>
      </div>
    </div>
  );
}
function MainLogin(props: {
  display?: boolean;
  setDisplay?: Dispatch<SetStateAction<boolean>>;
}) {
  const { display, setDisplay } = props;
  return (
    <>
      <SocialLogin loginIdManager={loginIdManager} view="login" />

      <Divider />

      <EnterpriseLogin display={display} setDisplay={setDisplay} />
    </>
  );
}

export default function LoginIdComponent() {
  // const isEmailPasswordless =
  //   loginIdManager.transaction.connectionStrategy === "email" ? true : false;

  const [isEmailPasswordless, setIsEmailPasswordless] = useState(false);
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

              {isEmailPasswordless ? (
                <EmailPasswordless
                  loginIdManager={loginIdManager}
                  type="login"
                  otherOption="Other Login options"
                  placeholder="Email"
                  display={isEmailPasswordless}
                  setDisplay={setIsEmailPasswordless}
                />
              ) : (
                <MainLogin
                  display={isEmailPasswordless}
                  setDisplay={setIsEmailPasswordless}
                />
              )}
            </div>
          </div>
        </main>

        <SignUp />
      </div>
      <Footer />
    </div>
  );
}
