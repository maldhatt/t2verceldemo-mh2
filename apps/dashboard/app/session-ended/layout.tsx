import { Suspense } from "react"

export default async function SessionEndedLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Suspense>
      <main className="flex min-h-screen items-center">{children}</main>
    </Suspense>
  )
}
