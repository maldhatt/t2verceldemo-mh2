"use client"

import React from "react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"

import { cn } from "@/lib/utils"

import { Button } from "./ui/button"

const pages = [
  {
    title: "Overview",
    href: "/dashboard",
    slug: null,
  },
  {
    title: "Integrations",
    href: "#",
    slug: "integrations",
  },
  {
    title: "Activity",
    href: "#",
    slug: "activity",
  },
  {
    title: "Domains",
    href: "#",
    slug: "domains",
  },
  {
    title: "Usage",
    href: "#",
    slug: "usage",
  },
  {
    title: "Storage",
    href: "#",
    slug: "storage",
  },
  {
    title: "Monitoring",
    href: "#",
    slug: "monitoring",
  },
  {
    title: "Settings",
    href: "/dashboard/organization/general",
    slug: "organization",
  },
]

export default function Header() {
  const segment = useSelectedLayoutSegment()

  return (
    <div className="border-b px-2">
      <section className="scrollbar-hide flex gap-2 overflow-auto">
        {pages.map((d, i) => (
          <div
            key={i}
            className={cn(
              segment === d.slug && "border-b-2 border-primary",
              "pb-1"
            )}
          >
            <Button
              variant="ghost"
              className={cn(
                "py-0 font-normal",
                segment === d.slug ? "text-primary" : "text-muted-foreground"
              )}
              asChild
            >
              <Link href={d.href}>{d.title}</Link>
            </Button>
          </div>
        ))}
      </section>
    </div>
  )
}
