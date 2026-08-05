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

function ChevronRight({ px }: { px: 12 | 14 }) {
  // stroke="currentColor" 로 텍스트 톤과 자동 동기화.
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
      focusable="false"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M4.5 3 L7.5 6 L4.5 9"
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
        <ChevronRight px={arrowPx} />
      </button>
    );
  },
);
