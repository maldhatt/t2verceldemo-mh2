import { appClient } from "@/lib/auth0"
import { getOrCreateDomainVerificationToken } from "@/lib/domain-verification"
import { AppBreadcrumb } from "@/components/app-breadcrumb"

import { CreateOidcConnectionForm } from "./create-oidc-connection-form"

export default async function CreateOidcConnection() {
  const session = await appClient.getSession()

  const domainVerificationToken = await getOrCreateDomainVerificationToken(
    session!.user.org_id
  )

  return (
    <div className="space-y-1">
      <div className="pb-2">
        <AppBreadcrumb
          title="Back to connections"
          href="/dashboard/organization/sso"
        />
      </div>

      <CreateOidcConnectionForm
        domainVerificationToken={domainVerificationToken}
      />
    </div>
  )
}
