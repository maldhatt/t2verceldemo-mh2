import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

interface AppBreadcrumbProps {
  href: string
  title: string
}

export const AppBreadcrumb = ({ href, title }: AppBreadcrumbProps) => {
  return (
    <Button variant="link" className="px-0" asChild>
      <Link href={href}>
        <ArrowLeftIcon className="mr-1.5 size-4" />
        {title}
      </Link>
    </Button>
  )
}
