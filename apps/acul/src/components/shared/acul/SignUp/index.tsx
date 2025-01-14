// import { LoginId } from "@auth0/auth0-acul-js";
import { redirectTo } from "../../utils";

export function sendToSignUp() {
  // const loginIdManager = new LoginId();
  // const domain = `t2vercel.mvbuilt.com`;
  redirectTo({
    screen: "signup",
    // link: `https://${domain}${loginIdManager.screen.signupLink}`,
    link: 'https://t2verceldashboard.vercel.app'
  });
}

export default function SignUp() {
  return (
    <div className="h-[100px] border-t p-[2em] flex justify-center items-center w-[100%] border-[#333]">
      <p className="">
        <a
          className="text-[1rem] text-[#47a8ff] hover:underline hover:text-[#47a8ff]"
          href="#"
          onClick={() => sendToSignUp()}
        >
          Don't have an account? Sign Up
        </a>
      </p>
    </div>
  );
}
