import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import styles from "./Radio.module.css";

/**
 * KONACARD DS Radio
 * Figma: dHJa65PGtCQHq2n4qgL9Z9 (-AX-) / node 30:409 (controls/radio button)
 * spec: konacard-ds-components.md § 05_Control
 *
 * Figma variants:
 *   - size:   large(32) / medium(28) / small(24) / tiny(20)
 *   - state:  true(selected) / false(unselected)
 *   - status: true(enabled) / false(disabled → opacity 0.4)
 *
 * Figma vector 좌표 (모든 사이즈 공통 32×32 viewBox 로 이식):
 *   Outer: circle cx=16 cy=16 r=15.5 fill=white stroke=#DDD width=1
 *   Inner dot (selected): circle cx=16 cy=16 r=7.47 fill=brand
 * (Figma inset 26.67% → dot 반지름 = 32 * (1 - 0.5334) / 2 ≈ 7.47)
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

const SIZE_PX: Record<RadioSize, number> = {
  large: 32,
  medium: 28,
  small: 24,
  tiny: 20,
};

function RadioSvg({
  checked,
  size,
}: {
  checked: boolean;
  size: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      focusable="false"
    >
      {/* Outer: 항상 white bg + #DDD 테두리 (Figma 원본 SVG 그대로)
          vector-effect: non-scaling-stroke 로 사이즈에 관계없이 stroke 항상 1px 물리 픽셀 */}
      <circle
        cx="16"
        cy="16"
        r="15.5"
        fill="var(--color-background-primary)"
        stroke="var(--color-border-default)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      {/* Inner dot (state=true 만): 보라 채움 */}
      {checked && (
        <circle
          cx="16"
          cy="16"
          r="7.47"
          fill="var(--color-brand-primary)"
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
        disabled && styles.disabled,
        className,
      )}
      onClick={(e) => {
        onChange?.(!checked);
        onClick?.(e);
      }}
      {...rest}
    >
      <RadioSvg checked={checked} size={SIZE_PX[size]} />
    </button>
  );
});
