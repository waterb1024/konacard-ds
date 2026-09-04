import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Switch.module.css";

/**
 * KONACARD DS Switch
 * Figma: ${FIGMA_DS_FILE_KEY} (-AX-) / node 28:409 (controls/swtich)
 * spec: konacard-ds-components.md § 05_Control
 *
 * Figma variants:
 *   - size:   large(50×28) / medium(42×24) / small(34×20) / tiny(28×16)
 *   - state:  true(on, 트랙 브랜드 보라, 핸들 우측) / false(off, 트랙 회색, 핸들 좌측)
 *   - status: true(enabled) / false(disabled → opacity 0.4)
 */

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
      <span className={styles.track} />
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
