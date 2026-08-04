import styles from "./Divider.module.css";

/**
 * KONACARD DS Divider (07_Line)
 * Figma: Nv4o6ozSx5W4w10uFnQIs5 / component 9362:7756, usage 99:1134
 *
 * 4 sub-components:
 *   Solid   — 1px 가로선
 *   Dotted  — 1px 가로선 (dashed 2/2 pattern)
 *   Section — 10px 두꺼운 섹션 구분 밴드
 *   Vertical — 1px 세로선 (인라인 구분자, size 8/12/16)
 */

export type DividerColor = "light" | "dark";
export type DividerColorWithWhite = DividerColor | "white";
export type VerticalDividerSize = "8" | "12" | "16";

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

/* ── Solid (1px 가로선) ───────────────────── */
export function DividerSolid({
  color = "light",
  className,
}: {
  color?: DividerColor;
  className?: string;
}) {
  return (
    <hr
      className={cx(styles.solid, styles[`solid-${color}`], className)}
      aria-hidden
    />
  );
}

/* ── Dotted (dashed 2/2) ─────────────────── */
export function DividerDotted({
  color = "light",
  className,
}: {
  color?: DividerColorWithWhite;
  className?: string;
}) {
  return (
    <hr
      className={cx(styles.dotted, styles[`dotted-${color}`], className)}
      aria-hidden
    />
  );
}

/* ── Section (10px 두꺼운 구분 밴드) ───────── */
export function DividerSection({
  color = "light",
  className,
}: {
  color?: DividerColor;
  className?: string;
}) {
  return (
    <div
      role="separator"
      className={cx(styles.section, styles[`section-${color}`], className)}
    />
  );
}

/* ── Vertical (인라인 구분자) ────────────── */
export function DividerVertical({
  size = "12",
  color = "light",
  className,
}: {
  size?: VerticalDividerSize;
  color?: DividerColorWithWhite;
  className?: string;
}) {
  return (
    <span
      className={cx(
        styles.vertical,
        styles[`vertical-size-${size}`],
        styles[`vertical-${color}`],
        className,
      )}
      aria-hidden
    />
  );
}

/**
 * Backwards-compat default export.
 * `variant` 로 4가지 서브 컴포넌트 스위치.
 */
export interface DividerProps {
  variant?: "solid" | "dotted" | "section" | "vertical";
  color?: DividerColorWithWhite;
  size?: VerticalDividerSize;
  className?: string;
}

export function Divider({
  variant = "solid",
  color = "light",
  size = "12",
  className,
}: DividerProps) {
  if (variant === "solid") {
    return (
      <DividerSolid
        color={color === "white" ? "light" : (color as DividerColor)}
        className={className}
      />
    );
  }
  if (variant === "dotted")
    return <DividerDotted color={color} className={className} />;
  if (variant === "section") {
    return (
      <DividerSection
        color={color === "white" ? "light" : (color as DividerColor)}
        className={className}
      />
    );
  }
  return <DividerVertical size={size} color={color} className={className} />;
}
