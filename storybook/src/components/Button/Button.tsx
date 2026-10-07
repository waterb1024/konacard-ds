import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

/**
 * KONACARD DS Button (Box)
 * Figma: ${FIGMA_DS_FILE_KEY} (-AX-) / node 10973:356 (button/button)
 *
 * Figma variants (2026-10-07 KeyScreen 실사용 기준 정리 후):
 *   - style: primary / secondary          → 코드 prop `variant` (HTML style 속성과 이름 충돌 회피)
 *   - size:  primary large·medium·small / secondary large·medium·small·tiny
 *   - type:  brand · brand-light · brand-line · gray · gray-light · gray-line · gray-line-light → 코드 prop `color`
 *   - state: true / false                → HTML `disabled`
 */

export type ButtonVariant = "primary" | "secondary";

/** tiny 는 secondary 에만 있음 — primary 에 주면 small 로 그림 */
export type ButtonSize = "large" | "medium" | "small" | "tiny";

export type ButtonColor =
  | "Brand"
  | "Brand_Light"
  | "Brand_Line"
  | "Gray"
  | "Gray_Light"
  | "Gray_Line"
  | "Gray_Line_Light";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  fullWidth?: boolean;
}

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      size = "large",
      color = "Brand",
      fullWidth = false,
      className,
      type = "button",
      children,
      ...rest
    },
    ref,
  ) {
    const finalSize = variant === "primary" && size === "tiny" ? "small" : size;
    return (
      <button
        ref={ref}
        type={type}
        className={cx(
          styles.button,
          styles[variant],
          styles[`size-${finalSize}`],
          styles[`color-${color}`],
          fullWidth && styles.fullWidth,
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
