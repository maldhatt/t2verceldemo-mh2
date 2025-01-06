import { useEffect } from "react";
import Logo from "../Logo";
import { sendToSignUp } from "../../acul/SignUp";
import "./styles.css";
import { redirectTo } from "../../utils";

export interface Props {
  type: string;
  loginLink?: string;
}

export default function Header(props: Props) {
  const { type, loginLink } = props;
  useEffect(() => {
    const header = document.getElementById("signup-header");
    const main = document.getElementById("main");
    window.addEventListener("scroll", () => {
      // console.log(el)
      if (main !== null && header !== null) {
        const headerPos = document.documentElement.scrollTop;
        // Scrolling happening...let's add a border to the header
        header.classList.toggle("is-sticky", headerPos > 0);
      }
    });
  }, []);
  return (
    <>
      {type === "login" ? (
        <header className="h-[64px] flex justify-between top-0 bg-[hsla(0,0%,4%,1)] z-[1] px-[24px]">
          <div className="flex w-full justify-between items-center">
            <Logo type="login" />
            <div className="flex items-center gap-[12px]">
              <a
                className="text-[hsla(0,0%,63%,1)] text-[0.875rem] hover:text-[hsla(0,0%,63%,1)] hover:cursor-pointer"
                onClick={() => {
                  redirectTo({
                    screen: "login",
                    link: "https://vercel.com/contact",
                  });
                }}
              >
                Contact
              </a>
              <a
                className="text-[hsla(0,0%,93%,1)] text-[0.875rem] px-[6px] h-[32px] flex justify-center items-center bg-transparent shadow-button rounded-[6px] hover:text-[hsla(0,0%,93%,1)] hover:bg-[#ffffff17] hover:cursor-pointer"
                onClick={() => sendToSignUp()}
              >
                Sign Up
              </a>
            </div>
          </div>
        </header>
      ) : (
        <header
          id="signup-header"
          className="h-[64px] flex justify-between sticky top-0 bg-[hsla(0,0%,0%,1)] z-[1]"
        >
          <div className="flex w-full px-[24px] justify-between items-center my-0 mx-auto max-w-[calc(1400px+calc(2*24px))]">
            <Logo type="signup" />
            <div id="main" className="flex items-center gap-[12px] top-0">
              <a
                className="rounded-[6px] flex items-center h-[32px] text-[hsla(0,0%,93%,1)] text-[14px] border border-[#ffffff24] px-[6px] hover:border-[#ffffff2b] hover:cursor-pointer hover:text-[hsla(0,0%,93%,1)]"
                onClick={() => {
                  redirectTo({ screen: "login", link: `${loginLink}` });
                }}
              >
                <span className="px-[6px]">Log In</span>
              </a>
              <a
                className="text-[hsla(0,0%,4%,1)] text-[14px] px-[6px] h-[32px] flex justify-center items-center shadow-button rounded-[6px] hover:text-[hsla(0,0%,4%,1)] hover:bg-[#ccc] hover:cursor-pointer bg-[hsla(0,0%,93%,1)]"
                onClick={() => {
                  redirectTo({
                    screen: "login",
                    link: "https://vercel.com/contact",
                  });
                }}
              >
                <span className="px-[6px]">Contact</span>
              </a>
            </div>
          </div>
        </header>
      )}
    </>
  );
}
