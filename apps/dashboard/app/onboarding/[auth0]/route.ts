import { NextRequest, NextResponse } from "next/server"
import slugify from "@sindresorhus/slugify"

import { managementClient, onboardingClient } from "@/lib/auth0"

export const GET = onboardingClient.handleAuth({
  signup: onboardingClient.handleLogin((request) => {
    return {
      authorizationParams: {
        screen_hint: "signup",
      },
      returnTo: "/dashboard",
    }
  }),
  async callback(req: any, ctx: any) {
    const res = await onboardingClient.handleCallback(req, ctx)
    const session = await onboardingClient.getSession(
      req as NextRequest,
      res as NextResponse
    )
    const teamName = (req as NextRequest).cookies.get("teamName")?.value

    if (teamName && session) {
      const { data: org } = await managementClient.organizations.create({
        name: slugify(teamName),
        display_name: teamName,
        enabled_connections: [
          {
            connection_id: process.env.DEFAULT_CONNECTION_ID,
          },
          {
            connection_id: process.env.EMAIL_CONNECTION_ID,
          },
          {
            connection_id: process.env.GITHUB_CONNECTION_ID
          },
          {
            connection_id: process.env.BITBUCKET_CONNECTION_ID
          }
        ],
      })

      await managementClient.organizations.addMembers(
        {
          id: org.id,
        },
        {
          members: [session.user.sub],
        }
      )

      await managementClient.organizations.addMemberRoles(
        {
          id: org.id,
          user_id: session.user.sub,
        },
        {
          roles: [process.env.AUTH0_ADMIN_ROLE_ID],
        }
      )
      ;(res as NextResponse).cookies.delete("teamName")

      return NextResponse.redirect(
        `https://t2verceldashboard.vercel.app/api/auth/login?organization=${org.id}`,
        res
      )
    }

    return res
  },
})
