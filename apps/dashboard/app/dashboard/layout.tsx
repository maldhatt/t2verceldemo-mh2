import Link from "next/link"
import { redirect } from "next/navigation"
import { UserProvider } from "@auth0/nextjs-auth0/client"
import { SettingsIcon } from "lucide-react"

import { appClient, managementClient } from "@/lib/auth0"
import { Button } from "@/components/ui/button"
import { Auth0Logo } from "@/components/auth0-logo"
import { ModeToggle } from "@/components/mode-toggle"
import { OrganizationSwitcher } from "@/components/organization-switcher"
import { UserNav } from "@/components/user-nav"
// Copying over Header.tsx from Vercel Dashboard Example
import Header from "@/components/Header"
import verceImg from "@/public/vercel.svg";
import VercelSvg from "../../components/svg/vercel-svg";
import { BsSlashLg } from "react-icons/bs";

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
      <div className="mx-auto flex max-w-full items-center justify-between px-2 py-4 sm:px-8">
        <div className="flex items-center space-x-4">
          {/* Vercel Logo  */}
          <VercelSvg />
          {/* slash  */}
          <BsSlashLg className="dark:text-gray-500" />
          <OrganizationSwitcher
            organizations={orgs.map((o) => ({
              id: o.id,
              slug: o.name,
              displayName: o.display_name!,
              logoUrl: o.branding?.logo_url,
            }))}
            currentOrgId={session.user.org_id}
          />
          {/* Home Link */}
          <Link
            href="/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
        </div>

        {/* Profile & Settings Section */}
        <div className="flex flex-row gap-x-2">
        {/* <div className="flex items-center space-x-2"> */}
          <Button variant="ghost" asChild className="px-2 py-2">
            <Link href="/dashboard/organization/general">
              <SettingsIcon className="h-[1.2rem] w-[1.2rem]" />
            </Link>
          </Button>
          <UserNav />
        </div>
      </div>

      {/* Horizontal Menu from Vercel Dashboard's Header.tsx */}
      <Header /> {/* This handles the navigation menu (Overview, Integrations, etc.) */}

      {/* Main element here scopes page.tsx elements */}
      <main className="mx-auto grid min-h-[calc(100svh-164px)] max-w-full px-2 sm:px-8 lg:py-6">
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
);
}




// <UserProvider>
//       {/* Replace Nav with Header from Vercel Dash Example */}
//       {/* <nav className="mx-auto flex max-w-7xl items-center justify-between px-2 py-4 sm:px-8"> */}
//       <Header className="mx-auto flex max-w-7xl items-center justify-between px-2 py-4 sm:px-8">
//         <div className="flex items-center space-x-6">
//           <OrganizationSwitcher
//             organizations={orgs.map((o) => ({
//               id: o.id,
//               slug: o.name,
//               displayName: o.display_name!,
//               logoUrl: o.branding?.logo_url,
//             }))}
//             currentOrgId={session.user.org_id}
//           />

//           <Link
//             href="/dashboard"
//             className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
//           >
//             Home
//           </Link>
//         </div>

//         <div className="flex flex-row gap-x-4">
//           <Button variant="ghost" asChild className="px-2 py-2">
//             <Link href="/dashboard/organization/general">
//               <SettingsIcon className="h-[1.2rem] w-[1.2rem]" />
//             </Link>
//           </Button>
//           <UserNav />
//         </div>
//       </Header>

//       <main className="mx-auto grid min-h-[calc(100svh-164px)] max-w-7xl px-2 sm:px-8 lg:py-6">
//         {children}
//       </main>

//       <footer className="mx-auto max-w-7xl px-2 py-6 sm:px-6 lg:px-8">
//         <div className="flex justify-between">
//           <div className="flex items-center space-x-2">
//             <Auth0Logo className="h-6 w-6" />

//             <div className="font-mono font-semibold">
//               <Link href="/">SaaStart</Link>
//             </div>

//             <div>
//               <Button variant="link" asChild>
//                 <Link href="/">Home</Link>
//               </Button>

//               <Button variant="link" asChild>
//                 <Link
//                   href="https://github.com/auth0-developer-hub/auth0-b2b-saas-starter"
//                   target="_blank"
//                 >
//                   Source
//                 </Link>
//               </Button>
//             </div>
//           </div>

//           <div className="items-center gap-x-2">
//             <ModeToggle />
//           </div>
//         </div>
//       </footer>
//     </UserProvider>
//   )
// }
