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
 *   Vector 6×11 (`<` shape) → CSS rotate(90) + scale-x(-1) 로 `v` 형태로 변환.
 *   최종 렌더 크기 11×6, viewBox 12×8 안에서 마크는 x=0.5~11.5, y=1~7.
 *   round linecap 으로 stroke 이 viewBox 경계까지 자연스럽게 확장. */
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
        d="M0.5 1.5 L6 7 L11.5 1.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* active 상태 (펼침): ^ 모양. 세로 뒤집기 (y' = 8 - y) */
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
        d="M0.5 6.5 L6 1 L11.5 6.5"
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
