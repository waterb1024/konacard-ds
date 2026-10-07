import type { ReactNode } from "react";
import styles from "./Label.module.css";

/**
 * KONACARD DS Label — 정보 표시 전용 pill
 * Figma: ${FIGMA_DS_FILE_KEY} (-AX-) / node 2121:5513 (label, 구 label/basic-label) · ❖ Label 페이지
 *
 * KeyScreen AOS 실사용 기준 정리 (2026-10-07 확정) — 29 variant
 *   - type=color: 5색(brand-gradient · brand · brand-light · gray-dark · warning) × 4사이즈
 *   - type=line : 3색(brand-gradient · brand · warning) × 3사이즈(large · medium · small), tiny 없음
 * 타입마다 허용 색·사이즈가 달라서 props 타입도 type 별로 나눔
 */

export type LabelSize = "large" | "medium" | "small" | "tiny";
export type LabelColorFill = "brand-gradient" | "brand" | "brand-light" | "gray-dark" | "warning";
export type LabelColorLine = "brand-gradient" | "brand" | "warning";
export type LabelColor = LabelColorFill;

interface Common {
  children: ReactNode;
  className?: string;
}

export type LabelProps = Common &
  (
    | { type?: "color"; size?: LabelSize; color?: LabelColorFill }
    | { type: "line"; size?: Exclude<LabelSize, "tiny">; color?: LabelColorLine }
  );

const cx = (...names: Array<string | false | undefined>) => names.filter(Boolean).join(" ");

export function Label({ type = "color", size = "large", color = "brand", children, className }: LabelProps) {
  return (
    <span
      className={cx(styles.label, styles[`size-${size}`], styles[`${type}-${color}`], className)}
    >
      {children}
    </span>
  );
}
