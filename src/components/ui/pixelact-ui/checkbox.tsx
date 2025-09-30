import * as React from "react";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils";

import { Checkbox as ShadcnCheckbox } from "@/components/ui/checkbox";

import "@/components/ui/pixelact-ui/styles/styles.css";
import "@/components/ui/pixelact-ui/styles/checkbox.css";

export interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  asChild?: boolean;
  variant?: "default" | "custom-ui";
}

function Checkbox({ className, variant = "default", ...props }: CheckboxProps) {
  if (variant === "custom-ui") {
    const { id, disabled, onCheckedChange, checked, defaultChecked, ...rest } = props as any;
    const boolChecked = typeof checked === "boolean" ? checked : undefined;
    const boolDefaultChecked = typeof defaultChecked === "boolean" ? defaultChecked : undefined;
    return (
      <input
        type="checkbox"
        id={id}
        className={cn("custom-ui-checkbox", className)}
        disabled={disabled}
        checked={boolChecked}
        defaultChecked={boolDefaultChecked}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        {...rest}
      />
    );
  }

  return (
    <ShadcnCheckbox
      className={cn(
        // shape + reset
        "rounded-none size-4 ring-0 border-none box-shadow-margin outline-none transition-shadow",
        // colors + states to match pixelact example
        "border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary",
        className
      )}
      style={{ boxShadow: "var(--pixel-box-shadow)" }}
      {...props}
    />
  );
}

export { Checkbox };
