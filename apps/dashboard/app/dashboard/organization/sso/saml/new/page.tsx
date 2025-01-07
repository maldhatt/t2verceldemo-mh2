import { appClient } from "@/lib/auth0"
import { getOrCreateDomainVerificationToken } from "@/lib/domain-verification"

import { CreateSamlConnectionForm } from "./create-saml-connection-form"

export default async function CreateSamlConnection() {
  const session = await appClient.getSession()

  const domainVerificationToken = await getOrCreateDomainVerificationToken(
    session!.user.org_id
  )

  return (
    <div>
      <CreateSamlConnectionForm
        domainVerificationToken={domainVerificationToken}
      />
    </div>
  )
}
