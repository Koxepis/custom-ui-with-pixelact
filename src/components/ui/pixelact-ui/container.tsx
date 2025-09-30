import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import "@/components/ui/pixelact-ui/styles/styles.css";
import "@/components/ui/pixelact-ui/styles/container.css";

const containerVariants = cva(
  "custom-ui-container",
  {
    variants: {
      variant: {
        default: "",
        golden: "golden",
        golden2: "golden2", 
        grey: "grey",
      },
      size: {
        default: "",
        small: "small",
        large: "large",
      },
      layout: {
        default: "",
        fixedWidth: "fixed-width",
        fixedHeight: "fixed-height",
        scrollable: "scrollable",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      layout: "default",
    },
  }
);

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, size, layout, disabled, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          containerVariants({ variant, size, layout }),
          disabled && "disabled",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="custom-ui-container-content">
          {children}
        </div>
      </div>
    );
  }
);
Container.displayName = "Container";

export { Container };
