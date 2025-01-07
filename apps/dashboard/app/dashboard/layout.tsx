import Link from "next/link"
import { redirect } from "next/navigation"
import { UserProvider } from "@auth0/nextjs-auth0/client"
import { BellIcon, SlashIcon } from "lucide-react"

import { appClient, managementClient } from "@/lib/auth0"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import { ModeToggle } from "@/components/mode-toggle"
import { OrganizationSwitcher } from "@/components/organization-switcher"
import { UserNav } from "@/components/user-nav"

import VercelSvg from "../../components/svg/vercel-svg"

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await appClient.getSession()

  // if the user is not authenticated, redirect to login
  if (!session?.user) {
    redirect("/api/auth/login")
  }

  const { data: orgs } = await managementClient.users.getUserOrganizations({
    id: session.user.sub,
  })

  // if the user does not belong to any organizations, redirect to onboarding
  if (!orgs.length) {
    redirect("/onboarding/create")
  }

  return (
    <UserProvider>
      <div>
        <div className="mx-auto flex max-w-full items-center justify-between px-2 pb-2 pt-4 sm:px-6">
          <div className="flex items-center space-x-2">
            {/* Vercel Logo  */}
            <Link href="/dashboard">
              <VercelSvg />
            </Link>
            {/* slash  */}
            <SlashIcon
              className="size-5 -rotate-[15deg] text-secondary"
              strokeWidth="3"
            />
            <OrganizationSwitcher
              organizations={orgs.map((o) => ({
                id: o.id,
                slug: o.name,
                displayName: o.display_name!,
                logoUrl: o.branding?.logo_url,
              }))}
              currentOrgId={session.user.org_id}
            />
          </div>

          {/* Profile & Settings Section */}
          <div className="flex flex-row items-center gap-x-6">
            <Button variant="outline" size="sm" className="font-normal">
              Feedback
            </Button>

            <div className="space-x-4 text-sm">
              <Link
                className="text-muted-foreground transition-colors hover:text-primary"
                href="https://vercel.com/changelog"
              >
                Changelog
              </Link>

              <Link
                className="text-muted-foreground transition-colors hover:text-primary"
                href="https://vercel.com/help"
              >
                Help
              </Link>

              <Link
                className="text-muted-foreground transition-colors hover:text-primary"
                href="https://vercel.com/docs"
              >
                Docs
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                className="size-8 rounded-full"
                size="icon"
              >
                <BellIcon />
              </Button>

              <UserNav />
            </div>
          </div>
        </div>

        <Header />

        <main className="mx-auto grid min-h-[calc(100svh-164px)] max-w-full bg-secondary pb-12 dark:bg-inherit">
          {children}
        </main>

        <footer className="mx-auto border-t p-6">
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
    </UserProvider>
  )
}
