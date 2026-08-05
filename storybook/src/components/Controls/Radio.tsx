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
      {/* Ring: 겹친 fill circle 2개. 내부 반지름 15.5 로 링 두께 0.5 viewBox unit →
          32px 렌더 시 0.5px 두께가 antialiasing 으로 부드럽게 spread 되어 Figma
          stroke 렌더와 시각적 두께 매칭 (1px solid fill 은 너무 진했음). */}
      <circle cx="16" cy="16" r="16" fill="var(--color-border-default)" />
      <circle
        cx="16"
        cy="16"
        r="15.5"
        fill="var(--color-background-primary)"
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
