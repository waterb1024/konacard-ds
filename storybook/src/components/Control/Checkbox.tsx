import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import styles from "./Checkbox.module.css";

/**
 * KONACARD DS Checkbox
 * Figma: dHJa65PGtCQHq2n4qgL9Z9 (-AX-) / node 28:431 (controls/check box)
 * spec: konacard-ds-components.md § 05_Control
 *
 * Figma variants:
 *   - style: circle / square-fill / square-line / line
 *   - size:  large(32) / medium(28) / small(24) / tiny(20)
 *   - state: true(checked) / false(unchecked)
 *   - status: true(enabled) / false(disabled → opacity 0.4)
 *
 * Check mark 좌표는 Figma vector 686 (16×11.24 viewBox 의 path 를 32×32 좌표계로 이식):
 *   Original: M1.33 5.62 L5.78 9.90 L14.67 1.33
 *   Placed at 32×32 offset (8, 10.29): M9.33 15.91 L13.78 20.19 L22.67 11.62
 * line style 은 Figma vector 686-large (21.33×14.67) 를 32×32 로 이식:
 *   Original: M1.33 7.33 L7.56 13.33 L20 1.33
 *   Placed at offset (5.33, 8.33): M6.67 15.67 L12.89 21.67 L25.33 9.67
 */

export type CheckboxStyle =
  | "circle"
  | "square-fill"
  | "square-line"
  | "line";
export type CheckboxSize = "large" | "medium" | "small" | "tiny";

export interface CheckboxProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "onChange" | "value" | "style"
  > {
  /** Figma variant "style" 유지 — HTML style 속성과 이름 충돌 회피 위해 omit */
  style?: CheckboxStyle;
  size?: CheckboxSize;
  checked?: boolean;
  onChange?: (next: boolean) => void;
}

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

const SIZE_PX: Record<CheckboxSize, number> = {
  large: 32,
  medium: 28,
  small: 24,
  tiny: 20,
};

/* Figma vector 686 (checkmark) — path 는 32×32 viewBox 로 이식된 실제 Figma 좌표 */
function CheckboxSvg({
  style,
  checked,
  size,
}: {
  style: CheckboxStyle;
  checked: boolean;
  size: number;
}) {
  const brand = "var(--color-brand-primary)";
  const white = "var(--color-font-white)";
  const border = "var(--color-icon-quaternary)";
  const unfillBg = "var(--color-background-secondary)";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      focusable="false"
    >
      {/* ── Base box per style ──────────────────────── */}
      {style === "circle" &&
        (checked ? (
          <circle cx="16" cy="16" r="16" fill={brand} />
        ) : (
          <circle
            cx="16"
            cy="16"
            r="15"
            fill="none"
            stroke={border}
            strokeWidth="2"
          />
        ))}

      {style === "square-fill" && (
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="5.333"
          fill={checked ? brand : unfillBg}
          stroke={checked ? brand : border}
          strokeWidth="2"
        />
      )}

      {style === "square-line" && (
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="5.333"
          fill={white}
          stroke={brand}
          strokeWidth="2"
        />
      )}

      {/* line 스타일은 박스 없음 */}

      {/* ── Check mark ─────────────────────────────── */}
      {checked && style !== "line" && (
        <path
          d="M9.33 15.91 L13.78 20.19 L22.67 11.62"
          stroke={style === "square-line" ? brand : white}
          strokeWidth="2.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {checked && style === "line" && (
        <path
          d="M6.67 15.67 L12.89 21.67 L25.33 9.67"
          stroke={brand}
          strokeWidth="2.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  function Checkbox(
    {
      style = "circle",
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
        role="checkbox"
        aria-checked={checked}
        disabled={disabled}
        className={cx(
          styles.checkbox,
          disabled && styles.disabled,
          className,
        )}
        onClick={(e) => {
          onChange?.(!checked);
          onClick?.(e);
        }}
        {...rest}
      >
        <CheckboxSvg style={style} checked={checked} size={SIZE_PX[size]} />
      </button>
    );
  },
);
