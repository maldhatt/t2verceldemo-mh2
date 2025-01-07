import { appClient, managementClient } from "@/lib/auth0"
import { DEFAULT_MFA_POLICY } from "@/lib/mfa-policy"

import { MfaPolicyForm } from "./mfa-policy-form"

export default async function SecurityPolicies() {
  const session = await appClient.getSession()
  const { data: org } = await managementClient.organizations.get({
    id: session!.user.org_id,
  })

  return (
    <div className="space-y-8">
      <MfaPolicyForm
        organization={{
          id: org.id,
          slug: org.name,
          displayName: org.display_name,
          mfaPolicy: org.metadata?.mfaPolicy
            ? JSON.parse(org.metadata.mfaPolicy)
            : DEFAULT_MFA_POLICY,
        }}
      />
    </div>
  )
}
