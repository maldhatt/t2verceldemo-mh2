import {
  initAuth0,
  SessionStore,
  SessionStorePayload,
} from "@auth0/nextjs-auth0"
import { Redis } from "@upstash/redis"
import { ManagementClient } from "auth0"

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

class RedisSessionStore implements SessionStore {
  async get(id: string) {
    const data = await redis.get<SessionStorePayload>(id)
    if (!data) {
      return null
    }

    return data
  }

  async set(id: string, data: SessionStorePayload) {
    await redis.set(id, data)
  }

  async delete(id: string) {
    await redis.del(id)
  }
}

const store = new RedisSessionStore()

export const managementClient = new ManagementClient({
  domain: process.env.AUTH0_MANAGEMENT_API_DOMAIN,
  clientId: process.env.AUTH0_MANAGEMENT_CLIENT_ID,
  clientSecret: process.env.AUTH0_MANAGEMENT_CLIENT_SECRET,
})

export const onboardingClient = initAuth0({
  clientID: process.env.AUTH0_MANAGEMENT_CLIENT_ID,
  clientSecret: process.env.AUTH0_MANAGEMENT_CLIENT_SECRET,
  baseURL: process.env.APP_BASE_URL,
  issuerBaseURL: `https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}`,
  secret: process.env.SESSION_ENCRYPTION_SECRET,
  routes: {
    callback: "/onboarding/callback",
    postLogoutRedirect: "/",
  },
  session: {
    store,
  },
  backchannelLogout: true,
})

export const appClient = initAuth0({
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  baseURL: process.env.APP_BASE_URL,
  issuerBaseURL: `https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}`,
  secret: process.env.SESSION_ENCRYPTION_SECRET,
  idpLogout: true,
  session: {
    store,
  },
  backchannelLogout: true,
})
