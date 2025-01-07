"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string
    title: string
  }[]
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "ml-0 mt-8 flex min-h-full space-x-2 lg:mt-0 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Button
          asChild
          key={item.href}
          variant="ghost"
          className={cn(
            "w-full justify-start hover:bg-zinc-200 hover:text-accent-foreground dark:hover:bg-zinc-700",
            pathname.includes(item.href)
              ? "text-primary"
              : "text-muted-foreground"
          )}
        >
          <Link href={item.href}>{item.title}</Link>
        </Button>
      ))}
    </nav>
  )
}
