import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Radio.module.css";

export type RadioSize = "24" | "28";

export interface RadioProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value"> {
  size?: RadioSize;
  checked?: boolean;
  onChange?: (next: boolean) => void;
}

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

export const Radio = forwardRef<HTMLButtonElement, RadioProps>(function Radio(
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
  return (
    <button
      ref={ref}
      type={type}
      role="radio"
      aria-checked={checked}
      disabled={disabled}
      className={cx(
        styles.radio,
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
      <span className={styles.dot} />
    </button>
  );
});

export interface RadioTextProps {
  variant?: "basic" | "small";
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  children: ReactNode;
}

/**
 * control/radio-text — Radio + 우측 텍스트 라벨
 * Basic: 28 Radio + body/1-regular · Small: 24 Radio + body/2-regular
 */
export function RadioText({
  variant = "basic",
  checked = false,
  onChange,
  disabled,
  children,
}: RadioTextProps) {
  const size: RadioSize = variant === "basic" ? "28" : "24";
  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      disabled={disabled}
      className={cx(styles.radioText, styles[variant])}
      onClick={() => onChange?.(!checked)}
    >
      <Radio size={size} checked={checked} tabIndex={-1} />
      <span className={styles.radioTextLabel}>{children}</span>
    </button>
  );
}
