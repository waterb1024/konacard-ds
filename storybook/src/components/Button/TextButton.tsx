import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import styles from "./TextButton.module.css";

/**
 * KONACARD DS Text Button
 * Figma: ${FIGMA_DS_FILE_KEY} (-AX-) / node 10973:796 (button/text button)
 * Figma variants (2026-10-07 정리 후): size large·medium·small × color 4종 (state 속성 없음 — 비활성 디자인 없음)
 * 형태: 배경 없는 텍스트 링크성 버튼. **항상 밑줄 표시**.
 * 용도: 하단 유틸리티 링크, CTA 위 반대 액션, 부가 정보 링크 등.
 */

export type TextButtonSize = "large" | "medium" | "small";
export type TextButtonColor = "black" | "brand" | "gray" | "gray-light";

export interface TextButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  size?: TextButtonSize;
  color?: TextButtonColor;
  children: ReactNode;
}

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

export const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  function TextButton(
    { size = "large", color = "gray-light", className, children, ...rest },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type="button"
        className={cx(
          styles.textButton,
          styles[`size-${size}`],
          styles[`color-${color}`],
          className,
        )}
        {...rest}
      >
        <span className={styles.label}>{children}</span>
        {/* Figma 는 CSS text-decoration 이 아니라 별도 1px div 로 밑줄 렌더.
            opacity 0.8, bg 는 텍스트 색과 동일 (currentColor). */}
        <span className={styles.line} aria-hidden />
      </button>
    );
  },
);
