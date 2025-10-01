import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button as ShadcnButton, buttonVariants } from "@/components/ui/button";
import "@/components/ui/pixelact-ui/styles/styles.css";
import "@/components/ui/pixelact-ui/styles/button.css";

const pixelButtonVariants = cva(
  "pixel__button cursor-pointer rounded-none w-fit items-center justify-center whitespace-nowrap text-sm transition-colors transition-all duration-100",
  {
    variants: {
      variant: {
        default: "pixel-default__button box-shadow-margin",
        secondary: "pixel-secondary__button box-shadow-margin",
        warning: "pixel-warning__button box-shadow-margin",
        success: "pixel-success__button box-shadow-margin",
        destructive: "pixel-destructive__button box-shadow-margin",
        link: "pixel-link__button bg-transparent text-link underline-offset-4 underline",
        "custom-ui": "custom-ui-button",
        "custom-ui-increment": "custom-ui-button-increment",
        "custom-ui-decrement": "custom-ui-button-decrement",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 text-xs",
        lg: "h-11 px-8 text-base",
        rgui:"h-auto w-fit",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface PixelButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pixelButtonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<
  React.ComponentRef<typeof ShadcnButton>,
  PixelButtonProps
>(({ className, variant, size, ...props }, ref) => {
  const isCustomUi =
    variant === "custom-ui" ||
    variant === "custom-ui-increment" ||
    variant === "custom-ui-decrement";

  if (isCustomUi) {
    // For custom-ui variant, render a plain button element without shadcn styling
    return (
      <button
        className={cn(
          pixelButtonVariants({ variant, size: undefined }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }

  return (
    <ShadcnButton
      className={cn(
        buttonVariants({ variant: variant as any, size: size as any }),
        pixelButtonVariants({ variant, size }),
        className
      )}
      variant={variant as any}
      size={size as any}
      ref={ref}
      {...props}
    />
  );
});

export { Button };
