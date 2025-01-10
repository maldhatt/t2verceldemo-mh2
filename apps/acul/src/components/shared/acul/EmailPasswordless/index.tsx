import { LoginId, SignupId } from "@auth0/auth0-acul-js";
import StyledInput from "../../components/StyledInput";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useState } from "react";
// import { redirectTo } from "../../utils";
export interface Props {
  type: string;
  setView?: Dispatch<SetStateAction<string>>;
  loginIdManager: LoginId;
  placeholder?: string;
  otherOption: string;
  textSize?: string;
  display?: boolean;
  setDisplay?: Dispatch<SetStateAction<boolean>>;
}
export default function EmailPasswordless(props: Props) {
  const {
    loginIdManager,
    placeholder,
    otherOption,
    textSize,
    type,
    setView,
    // display,
    setDisplay,
  } = props;
  const [username, setUsername] = useState("");

  return (
    <div>
      <StyledInput
        placeholder={placeholder}
        height={"48px"}
        br={"8px"}
        val={username}
        setVal={setUsername}
      />
      <span className="mt-[11px] h-[1px] min-h-[1px] block w-[1px] m-w-[1px] ml-[23px]"></span>
      <Button
        className="min-w-full max-w-full h-[48px] px-[14px] bg-[hsla(0,0%,93%,1)] text-[hsla(0,0%,4%,1)] font-medium text-[16px] hover:cursor-pointer hover:border-none hover:bg-[#ccc] border-none"
        onClick={() => {
          if (type === "login") {
            loginIdManager.login({
              username,
            });
          } else if (type === "signup") {
            new SignupId().signup({
              email: username,
            });
            // redirectTo({
            //   screen: "signup",
            //   screenHint: "signup",
            //   connection: "email",
            //   extFrom: "signup",
            //   loginHint: `${username}`,
            // });
          }
        }}
      >
        <span className="">
          <svg
            height="16"
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            width="16"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.2642 3.5H2.73578L8 8.01219L13.2642 3.5ZM1.5 4.41638V11.5C1.5 12.0523 1.94772 12.5 2.5 12.5H13.5C14.0523 12.5 14.5 12.0523 14.5 11.5V4.41638L8.48809 9.56944L8 9.98781L7.51191 9.56944L1.5 4.41638ZM0 2H1.5H14.5H16V3.5V11.5C16 12.8807 14.8807 14 13.5 14H2.5C1.11929 14 0 12.8807 0 11.5V3.5V2Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <span className="">Continue with Email</span>
      </Button>
      <span className="mt-[23px] h-[1px] min-h-[1px] block w-[1px] m-w-[1px] ml-[23px]"></span>
      <div className="text-center">
        <a
          href="#"
          onClick={() => {
            if (type === "signup") {
              setView!("two");
            } else if (type === "login") {
              // redirectTo({ screen: "login" });
              setDisplay!(false);
            }
          }}
          className={`text-[${
            textSize || "14px"
          }] text-[#47a8ff] hover:underline hover:text-[#47a8ff]`}
        >
          ← {otherOption}
        </a>
      </div>
    </div>
  );
}
