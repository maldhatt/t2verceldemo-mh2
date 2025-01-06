import Link from "next/link"
import { redirect } from "next/navigation"
import { UserProvider } from "@auth0/nextjs-auth0/client"
import { BellIcon, SlashIcon } from "lucide-react"

import { appClient, managementClient } from "@/lib/auth0"
import { Button } from "@/components/ui/button"
import { Auth0Logo } from "@/components/auth0-logo"
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
        {/* Top bar: Organization Switcher and Profile in Layout.tsx */}
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

        {/* Horizontal Menu from Vercel Dashboard's Header.tsx */}
        <Header />

        {/* This handles the navigation menu (Overview, Integrations, etc.) */}
        {/* Main element here scopes page.tsx elements */}
        <main className="mx-auto grid min-h-[calc(100svh-164px)] max-w-full bg-secondary px-2 py-6 sm:px-8">
          {children}
        </main>

        <footer className="mx-auto max-w-7xl px-2 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Auth0Logo className="h-6 w-6" />

              <div className="font-mono font-semibold">
                <Link href="/">SaaStart</Link>
              </div>

              <div>
                <Button variant="link" asChild>
                  <Link href="/">Home</Link>
                </Button>

                <Button variant="link" asChild>
                  <Link
                    href="https://github.com/auth0-developer-hub/auth0-b2b-saas-starter"
                    target="_blank"
                  >
                    Source
                  </Link>
                </Button>
              </div>
            </div>

            <div className="items-center gap-x-2">
              <ModeToggle />
            </div>
          </div>
        </footer>
      </div>
    </UserProvider>
  )
}
