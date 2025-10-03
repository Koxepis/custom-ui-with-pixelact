import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import "@/components/ui/pixelact-ui/styles/styles.css";
import "@/components/ui/pixelact-ui/styles/input.css";

const inputVariants = cva(
  "cursor-pointer rounded-none w-full items-center justify-center whitespace-nowrap text-sm transition-colors transition-all duration-100",
  {
    variants: {
      variant: {
        "custom-input-1": "custom-input-1",
      },
    },
    defaultVariants: {
      variant: "custom-input-1",
    },
  }
);

export interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  disabled?: boolean;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, disabled, variant, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ variant }), className)}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "CustomInput";

export { Input };
