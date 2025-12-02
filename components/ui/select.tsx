"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"

// <CHANGE> Replaced Radix UI select with native HTML select element
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children?: React.ReactNode
}

function Select({ className, children, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  )
}

// Simplified wrapper components for compatibility
const SelectTrigger = Select
const SelectValue = ({ placeholder }: { placeholder?: string; children?: React.ReactNode }) => null
const SelectContent = ({ children }: { children: React.ReactNode }) => <>{children}</>
const SelectItem = ({ value, children }: { value: string; children: React.ReactNode }) => (
  <option value={value}>{children}</option>
)

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue }

