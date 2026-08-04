import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Switch.module.css";

export type SwitchSize = "large" | "medium" | "small" | "tiny";

export interface SwitchProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  size?: SwitchSize;
  checked?: boolean;
  onChange?: (next: boolean) => void;
}

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  {
    size = "large",
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
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      className={cx(
        styles.switch,
        styles[`size-${size}`],
        checked && styles.on,
        className,
      )}
      onClick={(e) => {
        onChange?.(!checked);
        onClick?.(e);
      }}
      {...rest}
    >
      <span className={styles.thumb} />
    </button>
  );
});

export interface SwitchSettingProps {
  title: string;
  description?: ReactNode;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  background?: "white" | "gray";
  disabled?: boolean;
}

/**
 * control/swtich_setting 조합 — Title + Description + Switch(large)
 */
export function SwitchSetting({
  title,
  description,
  checked = false,
  onChange,
  background = "white",
  disabled,
}: SwitchSettingProps) {
  return (
    <div
      className={cx(
        styles.settingRow,
        background === "gray" && styles["settingRow-gray"],
      )}
    >
      <div className={styles.settingText}>
        <span className={styles.settingTitle}>{title}</span>
        {description && <span className={styles.settingDesc}>{description}</span>}
      </div>
      <Switch
        size="large"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}
