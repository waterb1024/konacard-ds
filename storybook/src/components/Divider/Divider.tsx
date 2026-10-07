import styles from "./Divider.module.css";

/**
 * KONACARD DS Divider — Figma `line` (10997:164) · ❖ Divider 페이지
 *
 * 2026-10-07 line/solid · line/dotted · line/divider · line/divider-line 4개 세트를 하나로 합침 (variant 키 유지)
 * Figma variants: type × color
 *   type  solid       — 가로 실선 1px (폭은 늘려 씀)
 *         dotted      — 가로 점선 1px (2/2)
 *         section     — 섹션 사이 높이 10 회색 띠 (구 line/divider) · light 만
 *         vertical-12 — 세로선 1×12 (구 line/divider-line size=12)
 *         vertical-8  — 세로선 1×8  (구 line/divider-line size=8)
 *   color light / dark — type 마다 실제 색이 다름 (Divider.module.css)
 */

export type DividerType = "solid" | "dotted" | "section" | "vertical-12" | "vertical-8";
export type DividerColor = "light" | "dark";

export interface DividerProps {
  type?: DividerType;
  /** section 은 light 만 있음 — dark 를 주면 light 로 그림 */
  color?: DividerColor;
  className?: string;
}

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

export function Divider({ type = "solid", color = "light", className }: DividerProps) {
  const c = type === "section" ? "light" : color;
  const vertical = type.startsWith("vertical");
  const Tag = vertical ? "span" : "div";
  return (
    <Tag
      role="separator"
      aria-orientation={vertical ? "vertical" : "horizontal"}
      className={cx(styles.line, styles[type], styles[`${vertical ? "vertical" : type}-${c}`], className)}
    />
  );
}
