import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export type ButtonSize = "large" | "medium" | "small";

export type ButtonColor =
  | "Brand"
  | "Brand_Light"
  | "Brand_Line"
  | "Gray"
  | "Gray_Line"
  | "Dark"; // Small 전용

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  size?: ButtonSize;
  color?: ButtonColor;
  fullWidth?: boolean;
}

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
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
    return (
      <button
        ref={ref}
        type={type}
        className={cx(
          styles.button,
          styles[`size-${size}`],
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
