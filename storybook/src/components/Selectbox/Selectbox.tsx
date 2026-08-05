import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import styles from "./Selectbox.module.css";

/**
 * KONACARD DS Selectbox
 * Figma: dHJa65PGtCQHq2n4qgL9Z9 (-AX-) / node 41:550 (select/select box)
 * spec: konacard-ds-components.md § 04_Forms > Selectbox
 *
 * TextField 와 동일한 48h 폼 필드에 chevron 이 우측 상시 노출.
 * Figma "State" (capital S) variant 는 5종:
 *   default / active(펼침) / select(값 선택됨) / disabled / error
 * 코드는 "disabled" → "inactive" 로 이름만 다름.
 * chevron 방향: default/select/disabled/error 는 아래(v), active 는 위(^).
 */

export type SelectboxState =
  | "default"
  | "active"
  | "select"
  | "inactive"
  | "error";

export interface SelectboxProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "value"> {
  state?: SelectboxState;
  /** 선택된 값 (미선택 시 placeholder 노출) */
  value?: string;
  placeholder?: string;
}

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

/* Figma ic_arrow/ic_arrow_down_12 원본:
 *   Vector 6×11 stroke=1 currentColor
 *   컨테이너 12×8 안에서 mark 위치는 x=1~11, y=2~7 (inset 8.33% 좌우, 25%/12.5% 상하)
 *   최종 v 모양: (1,2) → (6,7) → (11,2) */
function ChevronDown() {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      aria-hidden
      focusable="false"
    >
      <path
        d="M1 2 L6 7 L11 2"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* active 상태 (펼침): ^ 모양. mark 위치 x=1~11, y=1~6 (inset 12.5% 위, 25% 아래) */
function ChevronUp() {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      aria-hidden
      focusable="false"
    >
      <path
        d="M1 6 L6 1 L11 6"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const Selectbox = forwardRef<HTMLButtonElement, SelectboxProps>(
  function Selectbox(
    {
      state = "default",
      value,
      placeholder = "선택",
      className,
      disabled,
      type = "button",
      ...rest
    },
    ref,
  ) {
    const effectiveDisabled = disabled ?? state === "inactive";
    const displayText = value && value.length > 0 ? value : placeholder;
    const isOpen = state === "active";
    return (
      <button
        ref={ref}
        type={type}
        className={cx(styles.wrap, styles[`state-${state}`], className)}
        disabled={effectiveDisabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        {...rest}
      >
        <span className={styles.label}>{displayText}</span>
        <span className={styles.chevron} aria-hidden>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>
    );
  },
);
