import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import styles from "./Radio.module.css";

/**
 * KONACARD DS Radio
 * Figma: ${FIGMA_DS_FILE_KEY} (-AX-) / node 30:409 (controls/radio button)
 * spec: konacard-ds-components.md § 05_Control
 *
 * Figma variants:
 *   - size:   large(32) / medium(28) / small(24) / tiny(20)
 *   - state:  true(selected) / false(unselected)
 *   - status: true(enabled) / false(disabled)
 *
 * 2026-10-07 AX 실측 대조 (사이즈마다 따로 그려져 있어 비율 계산 대신 표로 둠):
 *   - 바깥 원: fill #FFFFFF · 안쪽 테두리 #DDDDDD — 두께 large 1 / medium 0.875 / small 0.857 / tiny 0.714
 *   - 가운데 점(선택): 지름 large 14.93 / medium 13.07 / small 12 / tiny 10, 색 brand
 *   - 비활성(status=false) — Figma 그대로:
 *       선택 + 비활성   → 바깥 원 #F8F9FB · 점 #DDDDDD · 흐림 없음
 *       미선택 + 비활성 → 바깥 원 #F8F9FB · 전체 opacity 0.4
 */

export type RadioSize = "large" | "medium" | "small" | "tiny";

export interface RadioProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value"> {
  size?: RadioSize;
  checked?: boolean;
  onChange?: (next: boolean) => void;
}

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

const GEOM: Record<RadioSize, { px: number; border: number; dot: number }> = {
  large: { px: 32, border: 1, dot: 14.933 },
  medium: { px: 28, border: 0.875, dot: 13.067 },
  small: { px: 24, border: 0.857, dot: 12 },
  tiny: { px: 20, border: 0.714, dot: 10 },
};

function RadioSvg({
  checked,
  disabled,
  size,
}: {
  checked: boolean;
  disabled: boolean;
  size: RadioSize;
}) {
  const { px, border, dot } = GEOM[size];
  const c = px / 2;
  return (
    <svg
      width={px}
      height={px}
      viewBox={`0 0 ${px} ${px}`}
      fill="none"
      aria-hidden
      focusable="false"
    >
      {/* 안쪽 테두리: 선 중심을 border/2 만큼 안으로 */}
      <circle
        cx={c}
        cy={c}
        r={c - border / 2}
        fill={disabled ? "var(--color-background-secondary)" : "var(--color-background-primary)"}
        stroke="var(--color-border-default)"
        strokeWidth={border}
      />
      {checked && (
        <circle
          cx={c}
          cy={c}
          r={dot / 2}
          fill={disabled ? "var(--color-border-default)" : "var(--color-brand-primary)"}
        />
      )}
    </svg>
  );
}

export const Radio = forwardRef<HTMLButtonElement, RadioProps>(function Radio(
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
      role="radio"
      aria-checked={checked}
      disabled={disabled}
      className={cx(
        styles.radio,
        /* Figma: 미선택 + 비활성만 opacity 0.4 */
        disabled && !checked && styles.dim,
        className,
      )}
      onClick={(e) => {
        onChange?.(!checked);
        onClick?.(e);
      }}
      {...rest}
    >
      <RadioSvg checked={checked} disabled={!!disabled} size={size} />
    </button>
  );
});
