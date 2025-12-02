"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"

// <CHANGE> Replaced Radix UI separator with native HTML hr element
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.HTMLAttributes<HTMLHRElement> & {
  orientation?: "horizontal" | "vertical"
  decorative?: boolean
}) {
  return (
    <hr
      data-slot="separator"
      className={cn(
        "bg-border shrink-0 border-0",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className,
      )}
      {...props}
    />
  )
}

export { Separator }
