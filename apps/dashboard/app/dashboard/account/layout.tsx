import { SidebarNav } from "@/components/sidebar-nav"

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/dashboard/account/profile",
  },
  {
    title: "Security",
    href: "/dashboard/account/security",
  },
]

interface AccountLayoutProps {
  children: React.ReactNode
}

export default async function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <div className="mx-auto w-full lg:space-y-8">
      <div className="border-b py-8">
        <h1 className="mx-auto w-full max-w-7xl text-3xl font-medium tracking-tight">
          Account Settings
        </h1>
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <div className="flex min-h-full flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>

          <div className="lg:w-4/5">
            <div className="mx-auto max-w-6xl">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
