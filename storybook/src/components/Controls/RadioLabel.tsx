import type { HTMLAttributes, ReactNode } from "react";
import { Radio } from "./Radio";
import styles from "./RadioLabel.module.css";

/**
 * KONACARD DS Radio label (라디오 + 텍스트 인라인 옵션)
 * Figma: ${FIGMA_DS_FILE_KEY} (-AX-) / node 2408:5563 (controls/radio label, 구 control/radio-text)
 * spec: konacard-ds-components.md § control/radio-text
 *
 * Figma variants:
 *   - size: small (2026-10-06 실사용 1종만 남김)
 *   - 선택 여부는 세트 속성이 아니라 내장 controls/radio button 의 state 로 제어
 *
 * Figma 실측 (2026-10-06):
 *   - 항목: radio button size=small(24) + body/1-regular #000, gap 8, padding 8 0 → h40
 *   - 항목 사이 gap 16
 *   - 텍스트 min-width 48 (Figma 의 max-width 는 항목마다 120/200 으로 달라 미적용)
 */

export interface RadioLabelOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface RadioLabelProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  options: RadioLabelOption[];
  value?: string;
  onChange?: (value: string) => void;
}

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

export function RadioLabel({
  options,
  value,
  onChange,
  className,
  ...rest
}: RadioLabelProps) {
  return (
    <div role="radiogroup" className={cx(styles.root, className)} {...rest}>
      {options.map((o) => (
        <div
          key={o.value}
          className={cx(styles.item, o.disabled && styles.disabled)}
        >
          <Radio
            size="small"
            checked={value === o.value}
            disabled={o.disabled}
            onChange={() => onChange?.(o.value)}
            aria-label={typeof o.label === "string" ? o.label : undefined}
          />
          <span
            className={styles.text}
            onClick={() => !o.disabled && onChange?.(o.value)}
          >
            {o.label}
          </span>
        </div>
      ))}
    </div>
  );
}
