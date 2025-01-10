import { redirect } from "next/navigation"
import { NextRequest } from "next/server"
import { HandlerError } from "@auth0/nextjs-auth0"

import { appClient } from "@/lib/auth0"

export const GET = appClient.handleAuth({
  login: appClient.handleLogin((request) => {
    // NOTE: this is a typing issue. The request Object here is of type NextRequest (not NextApiRequest)
    // as this is a route handler.
    // See: https://nextjs.org/docs/app/building-your-application/routing/route-handlers#url-query-parameters
    // @ts-ignore
    const searchParams = request.nextUrl.searchParams
    const organization = searchParams.get("organization")
    const invitation = searchParams.get("invitation")

    return {
      authorizationParams: {
        // if the user is accepting an invite, we need to forward it to Auth0
        organization,
        invitation,
      },
      returnTo: "/dashboard",
    }
  }),
  signup: appClient.handleLogin((request) => {
    return {
      authorizationParams: {
        screen_hint: "signup",
      },
      returnTo: "/dashboard",
    }
  }),
  // async callback(req: any, ctx: any) {
  //   const res = await appClient.handleCallback(req, ctx)
  //   const session = await appClient.getSession(
  //     req as NextRequest,
  //     res as NextResponse
  //   )
  //   const teamName = (req as NextRequest).cookies.get("teamName")?.value

  //   if (teamName && session) {
  //     const { data: org } = await managementClient.organizations.create({
  //       name: slugify(teamName),
  //       display_name: teamName,
  //       enabled_connections: [
  //         {
  //           connection_id: process.env.DEFAULT_CONNECTION_ID,
  //         },
  //       ],
  //     })

  //     await managementClient.organizations.addMembers(
  //       {
  //         id: org.id,
  //       },
  //       {
  //         members: [session.user.sub],
  //       }
  //     )

  //     await managementClient.organizations.addMemberRoles(
  //       {
  //         id: org.id,
  //         user_id: session.user.sub,
  //       },
  //       {
  //         roles: [process.env.AUTH0_ADMIN_ROLE_ID],
  //       }
  //     )
  //     ;(res as NextResponse).cookies.delete("teamName")

  //     return NextResponse.redirect(
  //       `http://localhost:3000/api/auth/login?organization=${org.id}`,
  //       res
  //     )
  //   }

  //   return res
  // },
  onError(_req: NextRequest, error: HandlerError) {
    redirect(
      `/api/auth/error?error=${error.cause?.message || "An error occured while authenticating the user."}`
    )
  },
})
