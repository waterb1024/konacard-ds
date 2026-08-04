import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Checkbox.module.css";

export type CheckboxSize = "24-icon" | "24-box" | "28" | "32";

export interface CheckboxProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value"> {
  size?: CheckboxSize;
  checked?: boolean;
  onChange?: (next: boolean) => void;
}

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

function CheckIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      aria-hidden
    >
      <path
        d="M3 8.5L6.5 12L13 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  function Checkbox(
    {
      size = "28",
      checked = false,
      onChange,
      className,
      disabled,
      type = "button",
      onClick,
      ...rest
    },
    ref,
  ) {
    const iconSize = size === "32" ? 20 : size === "28" ? 18 : 14;
    return (
      <button
        ref={ref}
        type={type}
        role="checkbox"
        aria-checked={checked}
        disabled={disabled}
        className={cx(
          styles.checkbox,
          styles[`size-${size}`],
          checked && styles.checked,
          className,
        )}
        onClick={(e) => {
          onChange?.(!checked);
          onClick?.(e);
        }}
        {...rest}
      >
        <CheckIcon size={iconSize} />
      </button>
    );
  },
);

export interface AgreeRowProps {
  size?: CheckboxSize;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  children: ReactNode;
  /** 우측 chevron > 노출 (세부 약관 진입) */
  showChevron?: boolean;
  bold?: boolean;
  onDetail?: () => void;
}

/**
 * control/agree — Checkbox + 텍스트 (+ chevron) 조합
 * variant: 전체동의(32) / 일반 페이지 세부(28 + chevron) / 팝업 세부(24-icon + chevron)
 */
export function AgreeRow({
  size = "28",
  checked = false,
  onChange,
  children,
  showChevron = false,
  bold = false,
  onDetail,
}: AgreeRowProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--spacing-xsmall)",
        padding: "var(--spacing-xsmall) 0",
        minHeight: 40,
      }}
    >
      <Checkbox size={size} checked={checked} onChange={onChange} />
      <span
        style={{
          flex: 1,
          font: bold
            ? "var(--text-body-1-bold)"
            : "var(--text-body-1-regular)",
          letterSpacing: "var(--font-letterspacing-medium)",
          color: "var(--color-font-primary)",
        }}
      >
        {children}
      </span>
      {showChevron && (
        <button
          type="button"
          aria-label="자세히 보기"
          onClick={onDetail}
          style={{
            width: 24,
            height: 24,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "var(--color-icon-quaternary)",
            padding: 0,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
