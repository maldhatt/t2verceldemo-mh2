import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function SessionEndedPage() {
  return (
    <div className="mx-auto max-w-sm">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>You&apos;ve been logged out</CardTitle>
          <CardDescription>
            You&apos;ve been logged out and your session has been terminated. You can
            log back in to continue using the app.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href="/api/auth/login" className="w-full">
            <Button className="w-full">
              Login <ArrowRightIcon className="ml-1 size-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
