import { SignupId, LoginId } from "@auth0/auth0-acul-js";
import Header from "@/components/shared/components/Header";
import Footer from "@/components/shared/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import "./styles.css";
import StyledInput from "@/components/shared/components/StyledInput";
import SocialLogin from "@/components/shared/acul/SocialLogin";
import EmailPasswordless from "@/components/shared/acul/EmailPasswordless";

export interface Settings {
  mode?: string;
}

export default function SignupComponent(props: Settings) {
  const { mode } = props || "light";
  const signupIdManager = new SignupId();
  const { loginLink } = signupIdManager.screen;
  const loginIdManager = new LoginId();
  let authParams = signupIdManager.untrustedData.getAuthParams();
  // console.log(authParams);
  // console.log(signupIdManager);
  let extFrom: string | undefined | unknown = null;
  if (authParams && authParams["ext"] && authParams["ext"]["ext-from"]) {
    extFrom = authParams["ext"]["ext-from"];
  }
  // const loginLink = "";
  // const loginIdManager = "";
  const customers = [
    {
      companyName: "Parachute",
      useCase: (
        <span className="text-[#A1A1A1] text-[0.875rem]">
          saw pages load{" "}
          <span className="text-[white] text-[0.875rem] leading-[1.25rem] font-medium">
            60% faster
          </span>
        </span>
      ),
      lightLogo:
        "https://vercel.com/_next/static/media/parachute-light.5f3c1a6d.svg",
      darkLogo:
        "https://vercel.com/_next/static/media/parachute-dark.ba1219bf.svg",
      width: "107.89",
      height: "10",
    },
    {
      companyName: "Ebay",
      useCase: (
        <span className="text-[#A1A1A1] text-[0.875rem]">
          has{" "}
          <span className="text-[white] text-[0.875rem] leading-[1.25rem] font-medium">
            6x faster{" "}
          </span>
          release cycles
        </span>
      ),
      lightLogo:
        "https://vercel.com/_next/static/media/ebay-color-light.04f2a0da.svg",
      darkLogo:
        "https://vercel.com/_next/static/media/ebay-color-dark.04f2a0da.svg",
      width: "60",
      height: "24",
    },
    {
      companyName: "Chick Fil a",
      useCase: (
        <span className="text-[#A1A1A1] text-[0.875rem] self-end">
          build times dropped from{" "}
          <span className="text-[white] text-[0.875rem] leading-[1.25rem] font-medium">
            25m to 5ms
          </span>
        </span>
      ),
      lightLogo:
        "https://vercel.com/_next/static/media/chick-fil-a-color-light.7c6922d0.svg",
      darkLogo:
        "https://vercel.com/_next/static/media/chick-fil-a-color-dark.baa95872.svg",
      width: "65.5",
      height: "32",
    },
    {
      companyName: "Stripe",
      useCase: (
        <span className="text-[#A1A1A1] text-[0.875rem]">
          had{" "}
          <span className="text-[white] text-[0.875rem] leading-[1.25rem] font-medium">
            100% uptime{" "}
          </span>
          at peak Black Friday volume
        </span>
      ),
      lightLogo:
        "https://vercel.com/_next/static/media/stripe-color-light.4858bc6d.svg",
      darkLogo:
        "https://vercel.com/_next/static/media/stripe-color-dark.4858bc6d.svg",
      width: "47.85",
      height: "20",
    },
    {
      companyName: "Adobe",
      useCase: (
        <span className="text-[#A1A1A1] text-[0.875rem]">
          has{" "}
          <span className="text-[white] text-[0.875rem] leading-[1.25rem] font-medium">
            6x faster{" "}
          </span>
          preview builds & deployments
        </span>
      ),
      lightLogo:
        "https://vercel.com/_next/static/media/adobe-color-light.233a89e1.svg",
      darkLogo:
        "https://vercel.com/_next/static/media/adobe-color-dark.233a89e1.svg",
      width: "68.1",
      height: "18",
    },
  ];

  const [showPlan, setShowPlan] = useState("none");
  const [showHobby, setShowHobby] = useState("none");
  const [showPro, setShowPro] = useState("none");

  const [teamname, setTeamname] = useState("");

  const [teamurl, setTeamurl] = useState("");

  const [view, setView] = useState("first");

  const [showTeamurl, setShowTeamurl] = useState(false);

  useEffect(() => {
    if (extFrom) {
      console.log("ext from ", extFrom);
      setView("three");
    }
    // Cheeky way of hiding the carousel buttons...
    const mainSect = document.getElementById("main-sect");
    if (mainSect !== null) {
      let divs = mainSect.getElementsByTagName("div");
      for (const div of divs) {
        if (div.ariaRoleDescription && div.ariaRoleDescription === "carousel") {
          const buttons = div.getElementsByTagName("button");
          for (const button of buttons) {
            button.style.display = "none";
          }
        }
      }
    }
  }, []);

  useEffect(() => {
    setTeamurl(teamname);
  }, [showTeamurl]);

  function togglePlan(
    hobbyPlan: HTMLElement | null,
    proPlan: HTMLElement | null
  ) {
    function toggleClassList(classList: DOMTokenList) {
      setTeamname("");
      setTeamurl("");
      setShowTeamurl(false);
      if (classList.contains("unchecked")) {
        classList.remove("unchecked");
        classList.add("checked");
      } else {
        classList.remove("checked");
        classList.add("unchecked");
      }
    }

    function togglePath(isHobby: boolean, isPro: boolean) {
      const checkedPath: string =
        "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5303 6.53033L12.0607 6L11 4.93934L10.4697 5.46967L6.5 9.43934L5.53033 8.46967L5 7.93934L3.93934 9L4.46967 9.53033L5.96967 11.0303C6.26256 11.3232 6.73744 11.3232 7.03033 11.0303L11.5303 6.53033Z";
      const uncheckedPath: string =
        "M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8Z";
      const hobbyPath: HTMLElement | null =
        document.getElementById("hobby-path");
      const proPath: HTMLElement | null = document.getElementById("pro-path");
      if (isHobby && !isPro) {
        hobbyPath?.setAttribute("d", checkedPath);
        hobbyPath?.setAttribute("fill", "#47a8ff");
        proPath?.setAttribute("d", uncheckedPath);
        proPath?.setAttribute("fill", "hsla(0,0%,27%,1)");
      } else if (isPro && !isHobby) {
        hobbyPath?.setAttribute("d", uncheckedPath);
        hobbyPath?.setAttribute("fill", "hsla(0,0%,27%,1)");
        proPath?.setAttribute("d", checkedPath);
        proPath?.setAttribute("fill", "#47a8ff");
      } else {
        proPath?.setAttribute("d", uncheckedPath);
        proPath?.setAttribute("fill", "hsla(0,0%,27%,1)");
        hobbyPath?.setAttribute("d", uncheckedPath);
        hobbyPath?.setAttribute("fill", "hsla(0,0%,27%,1)");
      }
    }
    const tempHobbyPlan = document.getElementById("hobby-plan");
    const tempProPlan = document.getElementById("pro-plan");

    const hobbyUnchecked = tempHobbyPlan?.classList.contains("unchecked");
    const proUnchecked = tempProPlan?.classList.contains("unchecked");

    if (hobbyUnchecked && proUnchecked && hobbyPlan) {
      // Enable hobby and disable pro
      toggleClassList(hobbyPlan.classList);
      togglePath(true, false);
      setShowPlan("flex");
      setShowHobby("block");
      setShowPro("none");
    } else if (!proUnchecked && hobbyUnchecked && hobbyPlan) {
      toggleClassList(hobbyPlan.classList);
      toggleClassList(tempProPlan!.classList);
      togglePath(true, false);
      setShowPlan("flex");
      setShowHobby("block");
      setShowPro("none");
    } else if (proUnchecked && !hobbyUnchecked && hobbyPlan) {
      toggleClassList(hobbyPlan.classList);
      togglePath(false, false);
      setShowPlan("none");
      setShowHobby("none");
      setShowPro("none");
    } else if (proUnchecked && hobbyUnchecked && proPlan) {
      // Enable pro and disable hobby
      toggleClassList(proPlan.classList);
      togglePath(false, true);
      setShowPlan("flex");
      setShowPro("block");
      setShowHobby("none");
    } else if (!hobbyUnchecked && proUnchecked && proPlan) {
      toggleClassList(proPlan.classList);
      toggleClassList(tempHobbyPlan!.classList);
      togglePath(false, true);
      setShowPlan("flex");
      setShowPro("block");
      setShowHobby("none");
    } else if (!proUnchecked && hobbyUnchecked && proPlan) {
      toggleClassList(proPlan.classList);
      togglePath(false, false);
      setShowPlan("none");
      setShowHobby("none");
      setShowPro("none");
    }
  }

  return (
    <>
      <Header type="signup" loginLink={`${loginLink}`} />
      <div className="bg-[hsla(0,0%,0%,1)]">
        <div className="min-h-[calc(100vh - 64px)] pt-[120px]">
          <main id="main-sect" className="min-h-screen">
            <main
              className={`min-w-[550px] max-w-[550px] rounded-[12px] flex-col flex mx-auto my-0 bg-[hsla(0,0%,4%,1)] shadow-signupBox`}
            >
              {view === "first" ? (
                <>
                  <div
                    className={`px-[80px] pt-[64px] pb-[48px] flex flex-col items-stretch justify-start gap-[32px] mb-auto box-border`}
                  >
                    <h1 className="text-[hsla(0,0%,93%,1)] text-[2rem] font-semibold leading-[2.5rem] text-center tracking-[-1.28px]font-['Geist', 'Geist Fallback', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol']">
                      Your first deploy
                      <br />
                      is just a sign-up away.
                    </h1>
                    <div className="flex flex-col align-stretch justify-start gap-[8px] w-full box-border">
                      <div>
                        <div className="flex flex-col align-stretch justify-start gap-[8px]">
                          <p className="text-[hsla(0,0%,63%,1)] text-[0.8125rem] leading-[1.125rem] tracking-initial font-normal">
                            Plan Type
                          </p>
                          <div className="rg-root w-full" id="plantype">
                            <div
                              className="flex gap-[6px] items-center h-[40px] p-[8px] relative bg-[hsla(0,0%,4%,1)] border-[hsla(0,0%,18%,1)] border rounded-[6px] hover:cursor-pointer relative unchecked"
                              id="hobby-plan"
                              onClick={(e) => {
                                togglePlan(e.currentTarget, null);
                              }}
                            >
                              <svg
                                data-testid="geist-icon"
                                height="16"
                                strokeLinejoin="round"
                                viewBox="0 0 16 16"
                                width="16"
                                className="text-[hsla(0,0%,27%,1)] align-middle"
                                id="hobby-svg"
                              >
                                <path
                                  d="M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8Z"
                                  fill="hsla(0,0%,27%,1)"
                                  id="hobby-path"
                                ></path>
                              </svg>
                              <p className="text-[0.875rem] leading-[1.25rem] font-medium text-[hsla(0,0%,63%,1)] hover:cursor-pointer">
                                <span className="text-[0.875rem] leading-[1.25rem] font-medium text-[hsla(0,0%,63%,1)]">
                                  I'm working on personal projects
                                </span>
                              </p>
                              <div className="ml-auto ">
                                <span className="py-[6px] px-[6px] bg-[hsla(0,0%,56%,1)] text-[#fff] text-[11px] h-[20px] tracking-[0.2px] font-medium rounded-[9999px]">
                                  Hobby
                                </span>
                              </div>
                            </div>
                            <div
                              className="flex gap-[6px] items-center h-[40px] p-[8px] relative bg-[hsla(0,0%,4%,1)] border-[hsla(0,0%,18%,1)] border rounded-[6px] hover:cursor-pointer unchecked"
                              id="pro-plan"
                              onClick={(e) => {
                                togglePlan(null, e.currentTarget);
                              }}
                            >
                              <svg
                                data-testid="geist-icon"
                                height="16"
                                strokeLinejoin="round"
                                viewBox="0 0 16 16"
                                width="16"
                                className="text-[hsla(0,0%,27%,1)] align-middle"
                                id="pro-svg"
                              >
                                <path
                                  d="M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8Z"
                                  fill="hsla(0,0%,27%,1)"
                                  id="pro-path"
                                ></path>
                              </svg>
                              <p className="text-[0.875rem] leading-[1.25rem] font-medium text-[hsla(0,0%,63%,1)] hover:cursor-pointer">
                                <span className="text-[0.875rem] leading-[1.25rem] font-medium text-[hsla(0,0%,63%,1)]">
                                  I'm working on commercial projects
                                </span>
                              </p>
                              <div className="ml-auto ">
                                <span className="py-[6px] px-[6px] bg-[#006efe] text-[#fff] text-[11px] h-[20px] tracking-[0.2px] font-medium rounded-[9999px]">
                                  Pro
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-start flex-col items-stretch gap-[16px] mt-[32px]">
                            <div
                              className="flex flex-col gap-[8px]"
                              style={{ display: showPlan }}
                            >
                              <span className="text-[13px] text-[hsla(0,0%,63%,1)]">
                                {showHobby === "block"
                                  ? "Your Name"
                                  : showPro === "block"
                                  ? "Team Name"
                                  : ""}
                              </span>
                              <StyledInput
                                placeholder=""
                                height={"40px"}
                                br={"6px"}
                                val={teamname}
                                setVal={setTeamname}
                              />
                              {showPro === "block" && showTeamurl ? (
                                <div
                                  className="flex flex-col gap-[8px] h-[62.5px] mt-[5px]"
                                  style={{ display: showPlan }}
                                >
                                  <span className="text-[13px] text-[hsla(0,0%,63%,1)]">
                                    {"Team URL"}
                                  </span>
                                  <StyledInput
                                    placeholder=""
                                    height={"40px"}
                                    br="6px"
                                    val={teamurl}
                                    setVal={setTeamurl}
                                  />
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                            {showPro === "block" ? (
                              <details className="mb-[32px] flex flex-col gap-[8px]">
                                <summary className="text-[0.8125rem] leading-[1.25rem] text-[hsla(0,0%,63%,1)] list-none">
                                  <div className="flex items-center">
                                    <span className="mr-[8px] text-[#888] inline-flex">
                                      <svg
                                        height="20"
                                        strokeLinejoin="round"
                                        viewBox="0 0 16 16"
                                        width="20"
                                        // style="width: 20px; height: 20px; color: currentcolor;"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M6.74999 3.93933L7.28032 4.46966L10.1035 7.29288C10.4941 7.68341 10.4941 8.31657 10.1035 8.7071L7.28032 11.5303L6.74999 12.0607L5.68933 11L6.21966 10.4697L8.68933 7.99999L6.21966 5.53032L5.68933 4.99999L6.74999 3.93933Z"
                                          fill="hsla(0,0%,63%,1)"
                                        ></path>
                                      </svg>
                                    </span>
                                    <p
                                      className="text_wrapper__i87JK"
                                      // style="--text-color: var(--ds-gray-900); --text-size: 0.8125rem; --text-line-height: 1rem; --text-letter-spacing: 0px; --text-weight: 500;"
                                    >
                                      Continuing will start a 14-day Pro plan
                                      trial.
                                    </p>
                                  </div>
                                </summary>
                                <div className="mt-[8px] ml-[calc(20px+8px)] flex flex-col gap-[8px]">
                                  <p className="text-[0.875rem] leading-[1.25rem] text-[hsla(0,0%,63%,1)] m-0 font-normal">
                                    Once the trial period ends for your new
                                    Vercel team, you can continue on the Pro
                                    plan starting at $20 per team seat.
                                  </p>
                                  <div className="">
                                    <a
                                      href="#"
                                      className="text-[#fff] flex items-center gap-[2px] hover:text-[#fff]"
                                    >
                                      <p className="text-[0.875rem] font-medium leading-[1.25rem]">
                                        Learn More
                                      </p>
                                      <svg
                                        height="16"
                                        strokeLinejoin="round"
                                        viewBox="0 0 16 16"
                                        width="16"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M11.5 9.75V11.25C11.5 11.3881 11.3881 11.5 11.25 11.5H4.75C4.61193 11.5 4.5 11.3881 4.5 11.25L4.5 4.75C4.5 4.61193 4.61193 4.5 4.75 4.5H6.25H7V3H6.25H4.75C3.7835 3 3 3.7835 3 4.75V11.25C3 12.2165 3.7835 13 4.75 13H11.25C12.2165 13 13 12.2165 13 11.25V9.75V9H11.5V9.75ZM8.5 3H9.25H12.2495C12.6637 3 12.9995 3.33579 12.9995 3.75V6.75V7.5H11.4995V6.75V5.56066L8.53033 8.52978L8 9.06011L6.93934 7.99945L7.46967 7.46912L10.4388 4.5H9.25H8.5V3Z"
                                          fill="#fff"
                                        ></path>
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </details>
                            ) : (
                              ""
                            )}
                            <button
                              className={`${
                                teamname.length === 0
                                  ? "text-[hsla(0,0%,56%,1)]"
                                  : "text-[hsla(0,0%,4%,1)]"
                              } ${
                                teamname.length === 0
                                  ? "bg-[hsla(0,0%,10%,1)]"
                                  : "bg-[hsla(0,0%,93%,1)]"
                              } border-[hsla(0,0%,18%,1)] h-[40px] px-[12px] py-0 items-center justify-center leading-[1.25rem] flex rounded-[6px] text-[0.875rem] font-medium max-w-full min-w-full hover:border-none border-none disabled:hover:cursor-not-allowed shadow-continue`}
                              disabled={teamname.length === 0 ? true : false}
                              onClick={() => {
                                if (showPro === "block") {
                                  // Ok is the team name filled out
                                  // And not shown team url field
                                  if (teamname.length > 0 && !showTeamurl) {
                                    // show team url
                                    setShowTeamurl(true);
                                  } else if (
                                    teamname.length > 0 &&
                                    showTeamurl
                                  ) {
                                    setView("two");
                                  }
                                }
                                if (showHobby === "block") {
                                  if (teamname.length > 0) {
                                    setView("two");
                                  }
                                }
                              }}
                            >
                              <span className="px-[6px]">Continue</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center h-[48px] py-[8px] py-[16px] rounded-[4px] m-[12px] gap-[8px] text-balance no-underline">
                    <p className="text-[0.8125rem] leading-[1rem] font-medium text-[hsla(0,0%,63%,1)] tracking-[0xp] leading-[1rem]">
                      By joining, you agree to our{" "}
                      <a
                        href=""
                        target="_blank"
                        className="text-[hsla(0,0%,93%,1)] rounded-[2px] no-underline font-normal hover:text-[hsla(0,0%,93%,1)]"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href=""
                        target="_blank"
                        className="text-[hsla(0,0%,93%,1)] rounded-[2px] no-underline font-normal hover:text-[hsla(0,0%,93%,1)]"
                      >
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                  <a
                    href=""
                    className="bg-[#341142] flex gap-[8px] justify-center items-center h-[48px] py-[8px] px-[16px] m-[12px] rounded-[4px] no-underline text-balance text-[#c472fb]"
                  >
                    <p className="text-[0.8125rem] leading-[1rem] font-normal tracking-[0px] m-0">
                      Have a complex company use case? Get{" "}
                      <strong> Enterprise grade </strong>assistance
                    </p>
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
                        d="M8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8 14.5ZM0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8ZM7.53033 11.2803L10.1106 8.70004C10.4972 8.31342 10.4972 7.68658 10.1106 7.29996L7.53033 4.71967L7 4.18934L5.93934 5.25L6.46967 5.78033L8.68934 8L6.46967 10.2197L5.93934 10.75L7 11.8107L7.53033 11.2803Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </>
              ) : view === "two" ? (
                <>
                  <div
                    className={`px-[80px] pt-[64px] pb-[48px] flex flex-col items-stretch justify-start gap-[32px] mb-auto box-border`}
                  >
                    <h1 className="text-[hsla(0,0%,93%,1)] text-[2rem] font-semibold leading-[2.5rem] text-center tracking-[-1.28px]font-['Geist', 'Geist Fallback', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol']">
                      Let's connect
                      <br />
                      your Git provider
                    </h1>
                    <SocialLogin
                      view="signup"
                      signupIdManager={signupIdManager}
                    />
                    <div className="text-center">
                      <a
                        href="#"
                        onClick={() => {
                          setView("three");
                        }}
                        className="text-[16px] text-[#47a8ff] hover:underline hover:text-[#47a8ff]"
                      >
                        Continue with Email →
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={`px-[80px] pt-[64px] pb-[48px] flex flex-col items-stretch justify-start mb-auto box-border gap-[32px]`}
                  >
                    <h1 className="text-[hsla(0,0%,93%,1)] text-[2rem] font-semibold leading-[2.5rem] text-center tracking-[-1.28px]font-['Geist', 'Geist Fallback', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol']">
                      Sign up for Vercel
                    </h1>
                    <EmailPasswordless
                      loginIdManager={loginIdManager}
                      placeholder={"Work Email"}
                      otherOption={"Other Sign Up options"}
                      textSize="16px"
                      setView={setView}
                      type="signup"
                      otherData={{teamname, teamurl}}
                    />
                  </div>
                </>
              )}
            </main>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
              className="w-full max-w-md mx-auto mt-[48px]"
              orientation="vertical"
            >
              <CarouselContent className="h-[100px] w-full">
                {customers.map((customer, idx) => {
                  return (
                    <CarouselItem className="h-[10px] w-full" key={idx}>
                      <div className="p-1 w-full gap-[8px] flex justify-center items-center">
                        <img
                          src={
                            mode === "light"
                              ? customer.lightLogo
                              : customer.darkLogo
                          }
                          alt={customer.companyName}
                          loading="eager"
                          width={`${customer.width}`}
                          height={`${customer.height}`}
                          decoding="async"
                          style={{ color: "transparent" }}
                          className=""
                        />
                        {customer.useCase}
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
