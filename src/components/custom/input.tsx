import * as React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input">;

function Input({ className, type = "text", ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Base
        "flex w-full min-w-0 rounded-lg border text-base md:text-base shadow-sm outline-none",
        "px-4 py-2 h-11 md:h-12 transition-[color,box-shadow,border-color,background-color]",

        // Gray-ish background like PocketBase
        "bg-zinc-50 border-zinc-300 placeholder:text-zinc-400",
        "dark:bg-zinc-900/40 dark:border-zinc-700 dark:placeholder:text-zinc-500",

        // Focus states
        "focus-visible:border-zinc-400 focus-visible:ring-4 focus-visible:ring-zinc-200",
        "dark:focus-visible:ring-zinc-800",

        // File input tweaks
        "file:inline-flex file:h-8 file:px-3 file:rounded-md file:border-0 file:bg-transparent",
        "file:text-sm file:font-medium file:text-foreground",

        // Selection + disabled
        "selection:bg-primary selection:text-primary-foreground",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",

        // Invalid
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",

        className
      )}
      {...props}
    />
  );
}

export { Input };
