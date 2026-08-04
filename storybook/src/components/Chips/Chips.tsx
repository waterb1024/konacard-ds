import type { ReactNode } from "react";
import styles from "./Chips.module.css";

export type ChipsColor =
  | "Brand"
  | "Brand_Light"
  | "Gray_Light"
  | "Dark"
  | "White";

export type ChipsType = "Fill" | "Line";

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

export interface ChipsProps {
  type?: ChipsType;
  color?: ChipsColor;
  variant?: "basic" | "link";
  icon?: ReactNode;
  children: ReactNode;
}

export function Chips({
  type = "Fill",
  color = "Brand_Light",
  variant = "basic",
  icon,
  children,
}: ChipsProps) {
  const styleKey = type === "Fill" ? `fill-${color}` : `line-${color}`;
  return (
    <span
      className={cx(
        styles.label,
        styles[variant],
        styles[styleKey],
      )}
    >
      {variant === "link" && icon && (
        <span className={styles.linkIcon}>{icon}</span>
      )}
      {children}
    </span>
  );
}

export function LinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M4.5 7.5L7.5 4.5M5 3.5L6 2.5C6.83 1.67 8.17 1.67 9 2.5C9.83 3.33 9.83 4.67 9 5.5L8 6.5M4 5.5L3 6.5C2.17 7.33 2.17 8.67 3 9.5C3.83 10.33 5.17 10.33 6 9.5L7 8.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
