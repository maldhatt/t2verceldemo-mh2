import SsoNavLink from "../../../components/sso-nav-link"

interface EditOidcConnectionLayoutProps {
  children: React.ReactNode
  params: { connectionId: string }
}

export default async function EditOidcConnectionLayout({
  children,
}: EditOidcConnectionLayoutProps) {
  return (
    <div className="space-y-4">
      <nav className="space-x-6 border-b px-6 py-2 text-sm">
        <SsoNavLink slug="settings">Settings</SsoNavLink>
        <SsoNavLink slug="provisioning">Provisioning</SsoNavLink>
      </nav>

      <div>{children}</div>
    </div>
  )
}
