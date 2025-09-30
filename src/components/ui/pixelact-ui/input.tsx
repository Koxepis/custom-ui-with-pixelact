import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import "@/components/ui/pixelact-ui/styles/styles.css";
import "@/components/ui/pixelact-ui/styles/input.css";

const pixelInputVariants = cva(
  "cursor-pointer rounded-none w-full items-center justify-center whitespace-nowrap text-sm transition-colors transition-all duration-100",
  {
    variants: {
      variant: {
        default: "pixel__input box-shadow-margin",
        "custom-ui": "custom-ui-input",
      },
      size: {
        default: "h-10 px-3 py-2",
        sm: "h-8 px-2 text-xs",
        lg: "h-12 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface PixelInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof pixelInputVariants> {
  disabled?: boolean;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, PixelInputProps>(
  ({ className, variant, size, disabled, ...props }, ref) => {
    const isCustomUi = variant === "custom-ui";

    if (isCustomUi) {
      // For custom-ui variant, render a plain input element without shadcn styling
      return (
        <input
          className={cn(
            pixelInputVariants({ variant, size: undefined }),
            className
          )}
          disabled={disabled}
          ref={ref}
          {...props}
        />
      );
    }

    return (
      <input
        className={cn(
          pixelInputVariants({ variant, size }),
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "PixelInput";

export { Input };
