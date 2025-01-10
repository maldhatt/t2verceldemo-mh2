import { cookies } from "next/headers"
import Link from "next/link"
import { redirect } from "next/navigation"
import { ChevronRightCircleIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import VercelSvg from "@/components/svg/vercel-svg"

import { CreateTeamForm } from "./create-team-form"
import { TestimonialsCarousel } from "./testimonials-carousel"

export default async function Home() {
  return (
    <div>
      <form
        action={async (formData: FormData) => {
          "use server"

          const teamName = formData.get("team_name")
          if (!teamName || typeof teamName !== "string") return

          cookies().set("teamName", teamName)
          redirect("/onboarding/signup")
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
          <div>
            <svg
              aria-label="Vercel logotype"
              height="22"
              role="img"
              viewBox="0 0 283 64"
            >
              <path
                d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" asChild>
              <Link href="/api/auth/login">Login</Link>
            </Button>
            <Button>Contact</Button>
          </div>
        </div>

        <div className="relative mx-auto mt-24 max-w-[550px] rounded-2xl border bg-card py-20">
          <div className="text-center text-3xl font-semibold tracking-tight">
            Your first deploy <br /> is just a sign-up away.
          </div>

          <div className="mt-12 px-20">
            <CreateTeamForm />
          </div>

          <div className="mt-16 text-center text-[13px] text-muted-foreground">
            By joining, you agree to our{" "}
            <Link
              href="https://vercel.com/legal/terms"
              className="text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="https://vercel.com/legal/privacy-policy"
              className="text-primary"
            >
              Privacy Policy
            </Link>
          </div>

          <a
            href="#"
            className="absolute bottom-0 m-3 flex w-[525px] items-center justify-center space-x-2 rounded-sm bg-[#f9f0ff] px-[20px] py-3 dark:bg-[#341142]"
          >
            <p className="text-[13px] text-[#7d00cc] dark:text-[#c472fb]">
              Have a complex company use case? Get <b> Enterprise grade </b>
              assistance
            </p>
            <ChevronRightCircleIcon className="size-4 text-[#7d00cc] dark:text-[#c472fb]" />
          </a>
        </div>

        <TestimonialsCarousel />
      </form>

      <footer className="mx-auto w-full p-6">
        <div className="container mx-auto max-w-7xl py-4">
          <div className="flex flex-col justify-between gap-y-4 sm:flex-row sm:items-center">
            <div className="flex flex-col gap-y-4 sm:flex-row sm:items-center sm:space-x-6">
              <Link href="/">
                <VercelSvg className="size-5" />
              </Link>
              <nav className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-6">
                <Link
                  href="https://vercel.com/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Home
                </Link>
                <Link
                  href="https://vercel.com/docs"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Docs
                </Link>
                <Link
                  href="https://vercel.com/guides"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Guides
                </Link>
                <Link
                  href="https://vercel.com/help"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Help
                </Link>
                <Link
                  href="https://vercel.com/contact"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </Link>
                <Link
                  href="https://vercel.com/legal"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Legal
                </Link>
              </nav>
            </div>

            <div className="-ml-3 flex items-center justify-between">
              <Button
                className="flex items-center"
                variant="ghost"
                size="sm"
                asChild
              >
                <Link href="https://vercel-status.com">
                  <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-blue-500">
                    All systems normal
                  </span>
                </Link>
              </Button>

              <ModeToggle />
            </div>
          </div>

          <div className="mt-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()}, Vercel Inc.
          </div>
        </div>
      </footer>
    </div>
  )
}
