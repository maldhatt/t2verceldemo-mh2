/** @format */

import React, { HtmlHTMLAttributes } from "react"

import { cn } from "@/lib/utils"

export default function VercelSvg(props: HtmlHTMLAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      {...props}
      aria-label="Vercel Logo"
      className={cn("size-6 fill-black dark:fill-white", props.className)}
      viewBox="0 0 75 65"
    >
      <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
    </svg>
  )
}
