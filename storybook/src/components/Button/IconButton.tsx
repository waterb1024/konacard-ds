import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import styles from "./IconButton.module.css";

/**
 * KONACARD DS Icon Button
 * Figma: dHJa65PGtCQHq2n4qgL9Z9 (-AX-) / node 202:2574
 * spec: konacard-ds-components.md § 02_Button > Icon 버튼
 * 형태: 텍스트 + 우측 chevron(>) 아이콘.
 * 용도: 진입형 리스트 아이템 우측 · 설정 아이템 등.
 */

export type IconButtonSize = "large" | "medium" | "small" | "tiny";
export type IconButtonWeight = "bold" | "regular";
export type IconButtonType = "black" | "brand" | "gray";

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  size?: IconButtonSize;
  weight?: IconButtonWeight;
  /** 색상 톤. Figma variant "type" 을 그대로 옮김. */
  type?: IconButtonType;
  children: ReactNode;
}

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

// Figma: ic_arrow/ic_arrow_right_14 (large) · ic_arrow_right_12 (medium/small/tiny)
// 실제 spec: 8×14 (또는 7×12) 좁고 긴 > 모양.
// 내부 마크 좌표: left 25% · right 12.5% · top/bottom 14.29% 인셋으로 5×10 위치.
function ChevronRight({ h }: { h: 12 | 14 }) {
  const w = h === 14 ? 8 : 7;
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 8 14"
      fill="none"
      aria-hidden
      focusable="false"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M2 2 L7 7 L2 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    {
      size = "medium",
      weight = "bold",
      type = "black",
      className,
      children,
      ...rest
    },
    ref,
  ) {
    const arrowPx: 12 | 14 = size === "large" ? 14 : 12;
    return (
      <button
        ref={ref}
        type="button"
        className={cx(
          styles.iconButton,
          styles[`size-${size}`],
          styles[`weight-${weight}`],
          styles[`type-${type}`],
          className,
        )}
        {...rest}
      >
        <span className={styles.label}>{children}</span>
        <span className={styles.chevron} aria-hidden>
          <ChevronRight h={arrowPx} />
        </span>
      </button>
    );
  },
);
