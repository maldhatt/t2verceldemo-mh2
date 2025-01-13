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
// import StyledInput from "@/components/shared/components/StyledInput";
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

  // const [showPlan, setShowPlan] = useState("none");
  // const [showHobby, setShowHobby] = useState("none");
  // const [showPro, setShowPro] = useState("none");

  // const [teamname, setTeamname] = useState("");

  // const [teamurl, setTeamurl] = useState("");

  const [view, setView] = useState("first");

  // const [showTeamurl, setShowTeamurl] = useState(false);

  useEffect(() => {
    if (extFrom) {
      console.log("ext from ", extFrom);
      setView("two");
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

  // useEffect(() => {
  // setTeamurl(teamname);
  // }, [showTeamurl]);

  // function togglePlan(
  //   hobbyPlan: HTMLElement | null,
  //   proPlan: HTMLElement | null
  // ) {
  //   function toggleClassList(classList: DOMTokenList) {
  //     setTeamname("");
  //     setTeamurl("");
  //     setShowTeamurl(false);
  //     if (classList.contains("unchecked")) {
  //       classList.remove("unchecked");
  //       classList.add("checked");
  //     } else {
  //       classList.remove("checked");
  //       classList.add("unchecked");
  //     }
  //   }

  //   function togglePath(isHobby: boolean, isPro: boolean) {
  //     const checkedPath: string =
  //       "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5303 6.53033L12.0607 6L11 4.93934L10.4697 5.46967L6.5 9.43934L5.53033 8.46967L5 7.93934L3.93934 9L4.46967 9.53033L5.96967 11.0303C6.26256 11.3232 6.73744 11.3232 7.03033 11.0303L11.5303 6.53033Z";
  //     const uncheckedPath: string =
  //       "M13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8Z";
  //     const hobbyPath: HTMLElement | null =
  //       document.getElementById("hobby-path");
  //     const proPath: HTMLElement | null = document.getElementById("pro-path");
  //     if (isHobby && !isPro) {
  //       hobbyPath?.setAttribute("d", checkedPath);
  //       hobbyPath?.setAttribute("fill", "#47a8ff");
  //       proPath?.setAttribute("d", uncheckedPath);
  //       proPath?.setAttribute("fill", "hsla(0,0%,27%,1)");
  //     } else if (isPro && !isHobby) {
  //       hobbyPath?.setAttribute("d", uncheckedPath);
  //       hobbyPath?.setAttribute("fill", "hsla(0,0%,27%,1)");
  //       proPath?.setAttribute("d", checkedPath);
  //       proPath?.setAttribute("fill", "#47a8ff");
  //     } else {
  //       proPath?.setAttribute("d", uncheckedPath);
  //       proPath?.setAttribute("fill", "hsla(0,0%,27%,1)");
  //       hobbyPath?.setAttribute("d", uncheckedPath);
  //       hobbyPath?.setAttribute("fill", "hsla(0,0%,27%,1)");
  //     }
  //   }
  //   const tempHobbyPlan = document.getElementById("hobby-plan");
  //   const tempProPlan = document.getElementById("pro-plan");

  //   const hobbyUnchecked = tempHobbyPlan?.classList.contains("unchecked");
  //   const proUnchecked = tempProPlan?.classList.contains("unchecked");

  //   if (hobbyUnchecked && proUnchecked && hobbyPlan) {
  //     // Enable hobby and disable pro
  //     toggleClassList(hobbyPlan.classList);
  //     togglePath(true, false);
  //     // setShowPlan("flex");
  //     // setShowHobby("block");
  //     // setShowPro("none");
  //   } else if (!proUnchecked && hobbyUnchecked && hobbyPlan) {
  //     toggleClassList(hobbyPlan.classList);
  //     toggleClassList(tempProPlan!.classList);
  //     togglePath(true, false);
  //     // setShowPlan("flex");
  //     // setShowHobby("block");
  //     // setShowPro("none");
  //   } else if (proUnchecked && !hobbyUnchecked && hobbyPlan) {
  //     toggleClassList(hobbyPlan.classList);
  //     togglePath(false, false);
  //     setShowPlan("none");
  //     setShowHobby("none");
  //     setShowPro("none");
  //   } else if (proUnchecked && hobbyUnchecked && proPlan) {
  //     // Enable pro and disable hobby
  //     toggleClassList(proPlan.classList);
  //     togglePath(false, true);
  //     setShowPlan("flex");
  //     setShowPro("block");
  //     setShowHobby("none");
  //   } else if (!hobbyUnchecked && proUnchecked && proPlan) {
  //     toggleClassList(proPlan.classList);
  //     toggleClassList(tempHobbyPlan!.classList);
  //     togglePath(false, true);
  //     setShowPlan("flex");
  //     setShowPro("block");
  //     setShowHobby("none");
  //   } else if (!proUnchecked && hobbyUnchecked && proPlan) {
  //     toggleClassList(proPlan.classList);
  //     togglePath(false, false);
  //     setShowPlan("none");
  //     setShowHobby("none");
  //     setShowPro("none");
  //   }
  // }

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
                          setView("two");
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
                      // otherData={{ teamname, teamurl }}
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
