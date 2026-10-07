import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./TertiaryButton.module.css";

/**
 * KONACARD DS Tertiary Button — "+ 추가" 작은 버튼
 * Figma: ${FIGMA_DS_FILE_KEY} (-AX-) / node 1212:4553 (button/tetiary — Figma 원본 오타 그대로) · 02_Components 페이지
 *
 * AX 실측 2026-10-07:
 *   - 높이 28 · padding 4 12 · 아이콘↔글자 4 · 모서리 4
 *   - 글자 14/22 Bold, 자간 -3% (텍스트 스타일 연결 없음)
 *   - 아이콘 ic_system/ic_plus_12 (12×12, 선 1.5) Figma 원본 SVG
 *   - Type Dark  : 바탕 #999 · 글자 흰색 · 아이콘 흰색 (ic_plus_12_w)
 *     Type Gray  : 바탕 #DDD · 글자 #000 · 아이콘 #333
 *     Type line  : 바탕 흰색 + 안쪽 1px #DDD 테두리 · 글자 #333 · 아이콘 #333
 */

export type TertiaryButtonType = "Dark" | "Gray" | "line";

export interface TertiaryButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  /** Figma variant "Type" 값 그대로 */
  type?: TertiaryButtonType;
  children: ReactNode;
}

function PlusIcon({ white }: { white: boolean }) {
  const c = white ? "var(--color-icon-white)" : "var(--color-icon-secondary)"; /* #FFF / #333 */
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden focusable="false">
      <path d="M1 6H11" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 1L6 11" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export const TertiaryButton = forwardRef<HTMLButtonElement, TertiaryButtonProps>(
  function TertiaryButton({ type = "Dark", className, children, ...rest }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        className={[styles.tertiary, styles[`type-${type}`], className].filter(Boolean).join(" ")}
        {...rest}
      >
        <PlusIcon white={type === "Dark"} />
        <span>{children}</span>
      </button>
    );
  },
);
