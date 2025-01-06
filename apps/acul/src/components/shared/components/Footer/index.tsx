import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function Footer() {
  return (
    <footer className="border-t border-[#ffffff24] p-[20px] bg-[hsla(0,0%,0%,1)]">
      <nav className="grid gap-y-6 gap-x-2 items-center grid-cols-2 justify-between w-full max-w-[1200px] auto-cols-fr my-0 mx-auto">
        <div className="flex flex-row items-center gap-[16px]">
          <a href="/home" className="">
            <svg
              height="16"
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width="16"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 1L16 15H0L8 1Z"
                fill="white"
              ></path>
            </svg>
          </a>
          <ul className="grid grid-cols-2 md:flex gap-4 p-0 m-0 w-full md:items-center items-start list-none text-[#888] text-[0.875rem]">
            <li className="">
              <a href="/home" className="text-[#888] hover:text-[#fff]">
                Home
              </a>
            </li>
            <li className="">
              <a href="/docs" className="text-[#888] hover:text-[#fff]">
                Docs
              </a>
            </li>
            <li className="">
              <a href="/guides" className="text-[#888] hover:text-[#fff]">
                Guides
              </a>
            </li>
            <li className="">
              <a href="/help" className="text-[#888] hover:text-[#fff]">
                Help
              </a>
            </li>
            <li className="">
              <a href="/contact" className="text-[#888] hover:text-[#fff]">
                Contact
              </a>
            </li>
            <li>
              <button
                type="submit"
                id=""
                className="bg-transparent hover:border-none border-none hover:text-[#fff] !active:border-none !active:shadow-none focus:border-none"
              >
                <span className="">
                  <span className="flex items-center gap-[2px] w-[100%]">
                    Legal
                    <svg
                      height="16"
                      strokeLinejoin="round"
                      viewBox="0 0 16 16"
                      width="16"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0607 6.74999L11.5303 7.28032L8.7071 10.1035C8.31657 10.4941 7.68341 10.4941 7.29288 10.1035L4.46966 7.28032L3.93933 6.74999L4.99999 5.68933L5.53032 6.21966L7.99999 8.68933L10.4697 6.21966L11 5.68933L12.0607 6.74999Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end gap-[16px]">
          <a
            href="https://vercel-status.com"
            rel="noopener"
            target="_blank"
            className="text-[0.875rem]"
          >
            <div className="text-[#0070f3]">
              <span className=""></span>
              <p className="">All systems normal</p>
            </div>
          </a>
          <ToggleGroup type="single">
            <ToggleGroupItem value="single">
              <label>
                <svg
                  height="16"
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width="16"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.5 3.25C0.5 1.45507 1.95507 0 3.75 0H8.25C10.0449 0 11.5 1.45507 11.5 3.25V11.25V12H10.75H1.25H0.5V11.25V3.25ZM3.75 1.5C2.7835 1.5 2 2.2835 2 3.25V10.5H10V3.25C10 2.2835 9.2165 1.5 8.25 1.5H3.75ZM3 3.5C3 2.94772 3.44772 2.5 4 2.5H8C8.55228 2.5 9 2.94772 9 3.5V7H3V3.5ZM6.5 9.5H9V8H6.5V9.5Z"
                    fill="#888"
                    transform="translate(2.5, 2)"
                  ></path>{" "}
                </svg>
              </label>
            </ToggleGroupItem>
            <ToggleGroupItem value="light">
              <label>
                <svg
                  height="16"
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width="16"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.75 1V0.25H6.25V1V1.25V2H7.75V1.25V1ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9ZM7 10.5C8.933 10.5 10.5 8.933 10.5 7C10.5 5.067 8.933 3.5 7 3.5C5.067 3.5 3.5 5.067 3.5 7C3.5 8.933 5.067 10.5 7 10.5ZM7.75 12V12.75V13V13.75H6.25V13V12.75V12H7.75ZM12 6.25H12.75H13H13.75V7.75H13H12.75H12V6.25ZM1 6.25H0.25V7.75H1H1.25H2V6.25H1.25H1ZM10.0052 2.93414L10.5355 2.40381L10.7123 2.22703L11.2426 1.6967L12.3033 2.75736L11.773 3.28769L11.5962 3.46447L11.0659 3.9948L10.0052 2.93414ZM2.22703 10.7123L1.6967 11.2426L2.75736 12.3033L3.28769 11.773L3.46447 11.5962L3.9948 11.0659L2.93414 10.0052L2.40381 10.5355L2.22703 10.7123ZM2.93414 3.9948L2.40381 3.46447L2.22703 3.28769L1.6967 2.75736L2.75736 1.6967L3.28769 2.22703L3.46447 2.40381L3.9948 2.93414L2.93414 3.9948ZM10.7123 11.773L11.2426 12.3033L12.3033 11.2426L11.773 10.7123L11.5962 10.5355L11.0659 10.0052L10.0052 11.0659L10.5355 11.5962L10.7123 11.773Z"
                    fill="#888"
                    transform="translate(1.25, 1.25)"
                  ></path>
                </svg>
              </label>
            </ToggleGroupItem>
            <ToggleGroupItem value="dark">
              <label>
                <svg
                  height="16"
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width="16"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.5 0.25V1V1.5H11L11.75 1.5V3H11H10.5V3.5V4.25H9V3.5V3H8.5H7.75V1.5H8.5H9V1V0.25H10.5ZM3.25514 2.75496C2.33413 3.53491 1.75 4.69972 1.75 6C1.75 8.34721 3.65279 10.25 6 10.25C7.30029 10.25 8.4651 9.66587 9.24505 8.74485C9.16377 8.74827 9.08207 8.74999 9 8.74999C5.82436 8.74999 3.25 6.17563 3.25 2.99999C3.25 2.91792 3.25172 2.83623 3.25514 2.75496ZM0.25 6C0.25 3.51072 1.83142 1.39271 4.042 0.592193L5.00256 1.55275C4.83933 2.00347 4.75 2.49047 4.75 2.99999C4.75 5.3472 6.65279 7.24999 9 7.24999C9.50953 7.24999 9.99653 7.16065 10.4473 6.99743L11.4078 7.95798C10.6073 10.1686 8.48929 11.75 6 11.75C2.82436 11.75 0.25 9.17564 0.25 6Z"
                    fill="#888"
                    transform="translate(2.25, 2.25)"
                  ></path>
                </svg>
              </label>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="">
          <p className="text-[#888] text-[0.75rem]">{"© 2024, Vercel Inc."}</p>
        </div>
      </nav>
    </footer>
  );
}
