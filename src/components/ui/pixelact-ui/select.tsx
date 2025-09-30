import * as SelectPrimitive from "@radix-ui/react-select";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import {
  Select as ShadcnSelect,
  SelectContent as ShadcnSelectContent,
  SelectGroup as ShadcnSelectGroup,
  SelectItem as ShadcnSelectItem,
  SelectLabel as ShadcnSelectLabel,
  SelectScrollDownButton as ShadcnSelectScrollDownButton,
  SelectScrollUpButton as ShadcnSelectScrollUpButton,
  SelectSeparator as ShadcnSelectSeparator,
  SelectTrigger as ShadcnSelectTrigger,
  SelectValue as ShadcnSelectValue,
} from "@/components/ui/select";

import "@/components/ui/pixelact-ui/styles/styles.css";
import "@/components/ui/pixelact-ui/styles/select.css";

export const selectVariants = cva("text-foreground", {
  variants: {
    font: {
      normal: "",
      pixel: "pixel-font",
    },
    variant: {
      default: "pixel__select",
      "custom-ui": "custom-ui-select",
    },
  },
  defaultVariants: {
    font: "pixel",
    variant: "default",
  },
});

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectVariants> {
  asChild?: boolean;
}

function Select({ ...props }: React.ComponentProps<typeof ShadcnSelect>) {
  return <ShadcnSelect {...props} />;
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <ShadcnSelectGroup {...props} />;
}

interface SelectValueProps
  extends React.ComponentProps<typeof SelectPrimitive.Value>,
    VariantProps<typeof selectVariants> {
  asChild?: boolean;
}

function SelectValue({ font, variant, ...props }: SelectValueProps) {
  return (
    <ShadcnSelectValue className={cn("custom-ui-select-value", selectVariants({ font, variant }))} {...props} />
  );
}

interface SelectTriggerProps
  extends React.ComponentProps<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof selectVariants> {
  asChild?: boolean;
}

function SelectTrigger({
  children,
  className,
  font,
  variant,
  ...props
}: SelectTriggerProps) {
  return (
    <div
      className={cn(
        selectVariants({ font, variant }),
        className
      )}
    >
      <ShadcnSelectTrigger
        {...props}
        className="rounded-none ring-0 w-full border-0 bg-transparent"
      >
        {children}
      </ShadcnSelectTrigger>
    </div>
  );
}

export interface SelectContentProps
  extends React.ComponentProps<typeof SelectPrimitive.Content>,
    VariantProps<typeof selectVariants> {
  asChild?: boolean;
}

function SelectContent({
  className,
  children,
  font,
  variant,
  ...props
}: SelectContentProps) {
  return (
    <ShadcnSelectContent
      className={cn(
        "custom-ui-select-content",
        selectVariants({ font, variant }),
        className
      )}
      {...props}
    >
      {children}
    </ShadcnSelectContent>
  );
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return <ShadcnSelectLabel className={cn(className)} {...props} />;
}

interface SelectItemProps extends React.ComponentProps<typeof SelectPrimitive.Item> {
  variant?: "default" | "custom-ui";
}

function SelectItem({
  className,
  children,
  variant = "default",
  ...props
}: SelectItemProps) {
  return (
    <ShadcnSelectItem
      className={cn(
        "custom-ui-select-item",
        className
      )}
      {...props}
    >
      {children}
    </ShadcnSelectItem>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return <ShadcnSelectSeparator className={cn(className)} {...props} />;
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof ShadcnSelectScrollUpButton>) {
  return <ShadcnSelectScrollUpButton className={cn(className)} {...props} />;
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return <ShadcnSelectScrollDownButton className={cn(className)} {...props} />;
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
