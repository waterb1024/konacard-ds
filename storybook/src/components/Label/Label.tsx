import type { ReactNode } from "react";
import styles from "./Label.module.css";

/**
 * KONACARD DS Label
 * Figma: Nv4o6ozSx5W4w10uFnQIs5
 *   Basic component: node 2121:5513
 *   Link variant:    node 2415:6389
 *   Usage guide:     node 149:1240
 */

export type LabelSize = "large" | "medium" | "small" | "tiny";
export type LabelType = "color" | "line";

/** Figma 원본 명칭 (오타 `gray-drak` 는 alias 로 허용) */
export type LabelColor =
  | "brand"
  | "brand-light"
  | "brand-gradient"
  | "gray-dark"
  | "gray-light"
  | "white"
  | "warning";

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

export interface LabelProps {
  size?: LabelSize;
  type?: LabelType;
  color?: LabelColor;
  children: ReactNode;
  className?: string;
}

/** Basic Label — 정보 표시 전용 pill */
export function Label({
  size = "large",
  type = "color",
  color = "brand",
  children,
  className,
}: LabelProps) {
  return (
    <span
      className={cx(
        styles.label,
        styles[`size-${size}`],
        styles[`color-${type}-${color}`],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ── Link Label ─────────────────────────────── */
export type LinkLabelBg =
  | "brand"
  | "brand-light"
  | "gray"
  | "gray-dark"
  | "white";

export interface LinkLabelProps {
  bg?: LinkLabelBg;
  type?: LabelType;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

/** Link Label — icon + text (기본 아이콘: 링크 16px) */
export function LinkLabel({
  bg = "brand",
  type = "color",
  icon,
  children,
  className,
}: LinkLabelProps) {
  /* bg → LabelColor 매핑 */
  const colorMap: Record<LinkLabelBg, LabelColor> = {
    brand: "brand",
    "brand-light": "brand-light",
    gray: "gray-light",
    "gray-dark": "gray-dark",
    white: "white",
  };
  const mappedColor = colorMap[bg];
  return (
    <span
      className={cx(
        styles.label,
        styles.link,
        styles[`color-${type}-${mappedColor}`],
        className,
      )}
    >
      <span className={styles.linkIcon}>{icon ?? <DefaultLinkIcon />}</span>
      <span>{children}</span>
    </span>
  );
}

/**
 * Figma 원본 아이콘 (node 2415:6315 — ic_system/ic_link_16_w) 을
 * currentColor 로 저장한 SVG. label 텍스트 색과 동일하게 tint 됩니다.
 */
export function DefaultLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      style={{ display: "block" }}
    >
      <path
        d="M3.5 5.5L2.5 6.5C1.11929 7.88071 1.11929 10.1193 2.5 11.5C3.88071 12.8807 6.11929 12.8807 7.5 11.5L8.5 10.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 8.5L8.5 5.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 3.5L6.5 2.5C7.8807 1.11933 10.1193 1.11931 11.5 2.5C12.8807 3.88074 12.8808 6.11928 11.5001 7.5L10.5 8.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
