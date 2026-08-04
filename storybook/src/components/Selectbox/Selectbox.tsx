import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import styles from "./Selectbox.module.css";

export type SelectboxState = "default" | "active" | "inactive" | "error";

export interface SelectboxProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "value"> {
  state?: SelectboxState;
  /** 선택된 값 (미선택 시 placeholder 노출) */
  value?: string;
  placeholder?: string;
  /** chevron 방향 — true 시 펼침(위) */
  open?: boolean;
}

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

function ChevronIcon() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden>
      <path
        d="M5 8L10 13L15 8"
        stroke="currentColor"
        strokeWidth="1.6"
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
      open = false,
      className,
      disabled,
      type = "button",
      ...rest
    },
    ref,
  ) {
    const effectiveDisabled = disabled ?? state === "inactive";
    const displayText = value && value.length > 0 ? value : placeholder;
    return (
      <button
        ref={ref}
        type={type}
        className={cx(styles.wrap, styles[`state-${state}`], className)}
        disabled={effectiveDisabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        {...rest}
      >
        <span className={styles.label}>{displayText}</span>
        <span className={cx(styles.chevron, open && styles["chevron-up"])}>
          <ChevronIcon />
        </span>
      </button>
    );
  },
);
