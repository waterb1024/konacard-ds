import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import styles from "./IconButton.module.css";

/**
 * KONACARD DS Icon Button — 글자 + 오른쪽 화살표(>)
 * Figma: ${FIGMA_DS_FILE_KEY} (-AX-) / node 10973:651 (button/icon button)
 *
 * Figma variants (2026-10-07 정리 후): size large·medium·small × weight bold·regular × type black·brand·gray
 * (state 속성 없음 — 비활성 디자인 없음)
 *
 * AX 실측: 높이 40 / 32 / 24 · 글자 body/1(15/24) · body/2(14/22) · body/3(12/18) · 글자↔화살표 4
 * 화살표는 Figma 원본 SVG:
 *   large  ic_arrow_right_14 — 8×14, 선 1.5
 *   medium ic_arrow_right_12 — 8×12, 선 1
 *   small  ic_arrow_right_12 — 8×12, 선 1 (gray 는 ic_arrow_right_12_g_l: #333 에 투명도 0.6)
 *   색: gray #666 · black #333 · brand #805AE9 (글자색과 별개)
 */

export type IconButtonSize = "large" | "medium" | "small";
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

const ARROW_COLOR: Record<IconButtonType, string> = {
  gray: "var(--color-icon-tertiary)", // #666
  black: "var(--color-icon-secondary)", // #333
  brand: "var(--color-icon-brand)", // #805AE9
};

function Arrow({ size, type }: { size: IconButtonSize; type: IconButtonType }) {
  const large = size === "large";
  // small·gray 는 #333 + 투명도 0.6 (ic_arrow_right_12_g_l)
  const smallGray = size === "small" && type === "gray";
  return (
    <svg
      width="8"
      height={large ? 14 : 12}
      viewBox={large ? "0 0 8 14" : "0 0 8 12"}
      fill="none"
      aria-hidden
      focusable="false"
      style={{ flexShrink: 0 }}
    >
      <path
        d={large ? "M2 2L7 7L2 12" : "M2 11L7 6L2 1"}
        stroke={smallGray ? "var(--color-icon-secondary)" : ARROW_COLOR[type]}
        strokeOpacity={smallGray ? 0.6 : undefined}
        strokeWidth={large ? 1.5 : 1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    {
      size = "large",
      weight = "regular",
      type = "gray",
      className,
      children,
      ...rest
    },
    ref,
  ) {
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
        <Arrow size={size} type={type} />
      </button>
    );
  },
);
