import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import "@/components/ui/pixelact-ui/styles/styles.css";
import "@/components/ui/pixelact-ui/styles/container.css";

const containerVariants = cva("custom-ui-container", {
  variants: {
    variant: {
      default: "",
      golden: "golden",
      golden2: "golden2",
      grey: "grey",
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
    layout: "default",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof containerVariants>, 'size'> {
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, layout, disabled, children, style, ...props }, ref) => {
    return (
      <div
        className={cn(
          containerVariants({ variant, layout }),
          disabled && "disabled",
          className
        )}
        style={style}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Container.displayName = "Container";

export { Container };
