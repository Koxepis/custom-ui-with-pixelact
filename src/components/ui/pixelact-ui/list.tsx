import * as React from "react";
import { cn } from "@/lib/utils";
import "@/components/ui/pixelact-ui/styles/styles.css";
import "@/components/ui/pixelact-ui/styles/list.css";

export type ListItem = {
  id: string;
  label: React.ReactNode;
  disabled?: boolean;
};

export interface ListProps
  extends Omit<React.HTMLAttributes<HTMLUListElement>, "onChange" | "onSelect"> {
  items: ListItem[];
  selectedId?: string; // controlled
  defaultSelectedId?: string; // uncontrolled
  onValueChange?: (id: string) => void;
  disabled?: boolean;
  /**
   * Max height of the list area; set via style when provided
   */
  maxHeight?: number | string;
}

export const List = React.forwardRef<HTMLUListElement, ListProps>(
  (
    {
      className,
      items,
      selectedId,
      defaultSelectedId,
      onValueChange,
      disabled = false,
      maxHeight,
      ...props
    },
    ref
  ) => {
    const isControlled = selectedId !== undefined;
    const [internalSelected, setInternalSelected] = React.useState<
      string | undefined
    >(defaultSelectedId);

    const effectiveSelected = isControlled ? selectedId : internalSelected;

    const listRef = React.useRef<HTMLUListElement | null>(null);
    React.useImperativeHandle(ref, () => listRef.current as HTMLUListElement);

    const focusList = () => listRef.current?.focus();

    const setSelected = (id: string) => {
      if (!isControlled) setInternalSelected(id);
      onValueChange?.(id);
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLUListElement> = (e) => {
      if (disabled) return;
      const enabledItems = items.filter((i) => !i.disabled);
      if (enabledItems.length === 0) return;

      const currentIndex = enabledItems.findIndex(
        (i) => i.id === effectiveSelected
      );

      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next = enabledItems[(currentIndex + 1) % enabledItems.length];
        if (next) setSelected(next.id);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const prev =
          enabledItems[(currentIndex - 1 + enabledItems.length) % enabledItems.length];
        if (prev) setSelected(prev.id);
      } else if (e.key === "Home") {
        e.preventDefault();
        setSelected(enabledItems[0].id);
      } else if (e.key === "End") {
        e.preventDefault();
        setSelected(enabledItems[enabledItems.length - 1].id);
      } else if (e.key === "Enter" || e.key === " ") {
        // Confirm current selection
        if (effectiveSelected) onValueChange?.(effectiveSelected);
      }
    };

    return (
      <ul
        ref={listRef}
        className={cn("custom-ui-list", className)}
        role="listbox"
        aria-disabled={disabled || undefined}
        aria-activedescendant={
          effectiveSelected ? `custom-ui-list-item-${effectiveSelected}` : undefined
        }
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
        style={maxHeight !== undefined ? { maxHeight } : undefined}
        {...props}
      >
        {items.map((item) => {
          const selected = item.id === effectiveSelected;
          return (
            <li
              key={item.id}
              id={`custom-ui-list-item-${item.id}`}
              role="option"
              aria-selected={selected}
              aria-disabled={item.disabled || undefined}
              className={cn(selected && "custom-ui-selected")}
              
              onClick={() => {
                if (disabled || item.disabled) return;
                setSelected(item.id);
                focusList();
              }}
            >
              {item.label}
            </li>
          );
        })}
      </ul>
    );
  }
);

List.displayName = "CustomUiList";
