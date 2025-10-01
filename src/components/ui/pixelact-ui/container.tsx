import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import "@/components/ui/pixelact-ui/styles/styles.css";
import "@/components/ui/pixelact-ui/styles/container.css";

const containerVariants = cva("custom-ui-container", {
  variants: {
    variant: {
      "custom-container-1": "custom-container-1",
      "custom-container-2": "custom-container-2",
      "custom-container-3": "custom-container-3",
      "custom-container-4": "custom-container-4",
      "custom-container-5": "custom-container-5",
    },
  },
  defaultVariants: {
    variant: "custom-container-1",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof containerVariants>, "size" | "layout"> {
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, disabled, children, style, ...props }, ref) => {
    // Map old variant names to the new naming scheme for backward compatibility
    const normalizedVariant = ((): VariantProps<
      typeof containerVariants
    >["variant"] => {
      switch (variant as any) {
        case "default":
          return "custom-container-1";
        case "golden":
          return "custom-container-2";
        case "golden2":
          return "custom-container-3";
        case "grey":
          return "custom-container-4";
        default:
          return (variant as any) ?? "custom-container-1";
      }
    })();
    return (
      <div
        className={cn(
          containerVariants({ variant: normalizedVariant }),
          disabled && "disabled",
          className,
        )}
        style={style}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Container.displayName = "Container";

export { Container };
