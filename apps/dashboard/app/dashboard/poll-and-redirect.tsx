"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import useSWR from "swr"

const fetcher = (...args: [string, RequestInit?]): Promise<any> =>
  fetch(...args).then((res) => {
    // if status code is 204, it means the user is not authenticated
    if (res.status === 204) {
      return null
    }

    if (!res.ok) {
      return null
    }

    return res.json()
  })

export function PollAndRedirect() {
  const { data, error, isLoading } = useSWR("/api/auth/me", fetcher, {
    refreshInterval: 5000, // poll every 5 seconds
  })
  const router = useRouter()

  useEffect(() => {
    if (error) return
    if (isLoading) return

    if (!data) {
      void router.push("/session-ended")
    }
  }, [data, router])

  return null
}
