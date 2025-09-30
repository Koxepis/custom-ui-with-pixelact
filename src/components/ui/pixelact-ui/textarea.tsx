import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import "@/components/ui/pixelact-ui/styles/styles.css";
import "@/components/ui/pixelact-ui/styles/input.css";

const pixelTextareaVariants = cva(
  "cursor-pointer rounded-none w-full items-center justify-center whitespace-nowrap text-sm transition-colors transition-all duration-100",
  {
    variants: {
      variant: {
        default: "pixel__input box-shadow-margin",
        "custom-ui": "custom-ui-textarea",
      },
      size: {
        default: "h-20 px-3 py-2",
        sm: "h-16 px-2 text-xs",
        lg: "h-24 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface PixelTextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    VariantProps<typeof pixelTextareaVariants> {
  disabled?: boolean;
  className?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, PixelTextareaProps>(
  ({ className, variant, size, disabled, ...props }, ref) => {
    const isCustomUi = variant === "custom-ui";

    if (isCustomUi) {
      // For custom-ui variant, render a plain textarea element
      return (
        <textarea
          className={cn(
            pixelTextareaVariants({ variant, size: undefined }),
            className
          )}
          disabled={disabled}
          ref={ref}
          {...props}
        />
      );
    }

    return (
      <textarea
        className={cn(
          pixelTextareaVariants({ variant, size }),
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "PixelTextarea";

export { Textarea };
