import * as React from "react";
import { cn } from "@/lib/utils";

import "@/components/ui/pixelact-ui/styles/styles.css";
import "@/components/ui/pixelact-ui/styles/progress.css";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0..100
  label?: React.ReactNode; // right handle text (e.g., 1/5 or 65%)
  height?: number; // pixel height for the bar track (default 16)
  disabled?: boolean; // visual disabled state
}

export function Progress({ value, label, height = 16, disabled = false, className, ...props }: ProgressProps) {
  const clamped = Math.max(0, Math.min(100, value ?? 0));

  return (
    <div
      className={cn("custom-ui-progress", disabled && "is-disabled", className)}
      aria-disabled={disabled || undefined}
      {...props}
    >
      <span className="custom-ui-progress__handle custom-ui-progress__handle--left" aria-hidden />
      <div
        className="custom-ui-progress__track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={clamped}
        style={{ height }}
      >
        <div className="custom-ui-progress__fill" style={{ width: `${clamped}%` }} />
      </div>
      <span className="custom-ui-progress__handle custom-ui-progress__handle--right">
        {label}
      </span>
    </div>
  );
}
