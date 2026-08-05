import { forwardRef, useId } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import styles from "./Input.module.css";

export type InputState =
  | "default"
  | "focus"
  | "active"
  | "complete"
  | "inactive"
  | "error";

export type GuideTone =
  | "info-gray"
  | "info-black"
  | "guide-gray"
  | "guide-black"
  | "error";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** konacard-ds-components.md § Inputbox — 6 State */
  state?: InputState;
  /** 상단 Title 라벨 (body/3-Bold) */
  title?: string;
  /** 하단 Guide Text */
  guide?: string;
  /** Guide Text tone. `error`는 자동으로 error state 와 페어링 권장 */
  guideTone?: GuideTone;
  /** clear(×) 버튼 노출. Active·Error 에서 true 권장 */
  showClear?: boolean;
  onClear?: () => void;
  /** 라벨/필드 wrapper 커스터마이즈 */
  wrapperClassName?: string;
}

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

// Figma: input/bullet (2234:5516). 원형 배경 + 흰색 "!" 마크.
// - error 톤 → type=icon_danger (2×5 둥근사각 + 원 r=1)
// - gray/black 톤 → type=icon_alert_gray/black (2.33×4.375 + 2.33×2.33 둥근사각 두 개)
//   Figma 원본 SVG 를 그대로 옮긴 좌표.
function BulletIcon({
  tone,
  size = 14,
}: {
  tone: "gray" | "black" | "error";
  size?: 14 | 12;
}) {
  const bg =
    tone === "error"
      ? "var(--color-icon-accent-red)"
      : tone === "black"
        ? "var(--color-icon-secondary)"
        : "var(--color-icon-quaternary)";

  if (tone === "error") {
    // icon_danger: rect(2×5) + circle(r=1)
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 14 14"
        aria-hidden
        focusable="false"
        style={{ flexShrink: 0 }}
      >
        <circle cx="7" cy="7" r="7" fill={bg} />
        <rect x="6" y="3" width="2" height="5" rx="1" fill="#fff" />
        <circle cx="7" cy="10" r="1" fill="#fff" />
      </svg>
    );
  }

  // icon_alert_gray / icon_alert_black: 둥근사각 두 개 (rect + rect)
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      aria-hidden
      focusable="false"
      style={{ flexShrink: 0 }}
    >
      <circle cx="7" cy="7" r="7" fill={bg} />
      <rect
        x="5.833"
        y="3.5"
        width="2.334"
        height="4.375"
        rx="1"
        fill="#fff"
      />
      <rect
        x="5.833"
        y="8.75"
        width="2.334"
        height="2.334"
        rx="1"
        fill="#fff"
      />
    </svg>
  );
}

// Figma: input/icon type=icon_delete. 24×24 컨테이너 · 18×18 원(inset 12.5%) + 흰색 × 크로스.
// Figma 원본 SVG 좌표 그대로: 원 r=9 at (12,12), × stroke width 1 (default), 7px 대각선.
function DeleteIcon({ size = 24 }: { size?: 24 | 20 | 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      focusable="false"
    >
      <circle cx="12" cy="12" r="9" fill="var(--color-icon-quinary)" />
      <path
        d="M8.5 8.5 L15.5 15.5 M15.5 8.5 L8.5 15.5"
        stroke="var(--color-icon-white)"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GuideText({ tone, children }: { tone: GuideTone; children: ReactNode }) {
  const withIcon = tone.startsWith("guide-") || tone === "error";
  const iconVariant =
    tone === "error"
      ? "error"
      : tone === "guide-black"
        ? "black"
        : "gray";
  return (
    <span className={cx(styles.guide, styles[`guide-${tone}`])}>
      {withIcon && <BulletIcon tone={iconVariant} />}
      {children}
    </span>
  );
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    state = "default",
    title,
    guide,
    guideTone = "info-gray",
    showClear,
    onClear,
    wrapperClassName,
    className,
    disabled,
    id,
    ...rest
  },
  ref,
) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const effectiveDisabled = disabled ?? state === "inactive";
  const shouldShowClear =
    showClear ?? (state === "active" || state === "error");

  return (
    <div className={cx(styles.field, styles[`state-${state}`], wrapperClassName)}>
      {title && (
        <label htmlFor={inputId} className={styles.title}>
          {title}
        </label>
      )}
      <div className={styles.inputWrap}>
        <input
          ref={ref}
          id={inputId}
          className={cx(styles.input, className)}
          disabled={effectiveDisabled}
          {...rest}
        />
        {shouldShowClear && (
          <button
            type="button"
            aria-label="지우기"
            className={styles.clear}
            onClick={onClear}
          >
            <DeleteIcon />
          </button>
        )}
      </div>
      {guide && <GuideText tone={guideTone}>{guide}</GuideText>}
    </div>
  );
});
