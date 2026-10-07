import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import styles from "./Checkbox.module.css";

/**
 * KONACARD DS Checkbox
 * Figma: ${FIGMA_DS_FILE_KEY} (-AX-) / node 28:431 (controls/check box)
 * spec: konacard-ds-components.md § 05_Control
 *
 * Figma variants:
 *   - style: circle / square-fill / square-line / line
 *   - size:  large(32) / medium(28) / small(24) / tiny(20)
 *   - state: true(checked) / false(unchecked)
 *   - status: true(enabled) / false(disabled → opacity 0.4)
 *
 * 2026-10-07 AX 실측 대조: Figma 는 사이즈마다 체크 위치·선 두께·모서리를 따로 그렸다
 * (32 를 비율로 줄인 값이 아님 — 예: tiny circle 체크 두께 1.43, square 테두리 1 / 모서리 4).
 * 그래서 사이즈별 실측 좌표를 GEOM 표에 그대로 옮기고, viewBox 를 사이즈와 1:1 로 둔다.
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

/* 체크 표시: [path(절대 좌표), 선 두께] — Figma Vector 의 x·y + vectorPath 를 더한 값 */
type Check = [string, number];

const GEOM: {
  circle: Record<CheckboxSize, Check>;
  line: Record<CheckboxSize, Check>;
  square: Record<CheckboxSize, { check: Check; border: number; radius: number }>;
} = {
  circle: {
    large: ["M9 16.5 L13.667 21 L23 12", 2],
    medium: ["M8 14 L12 18 L20 10", 2],
    small: ["M6.857 12 L10.286 15.429 L17.143 8.571", 1.714],
    tiny: ["M5.714 10 L8.571 12.857 L14.286 7.143", 1.429],
  },
  line: {
    large: ["M6.667 15.333 L12.889 21.333 L25.333 9.333", 2.667],
    medium: ["M5.833 13.417 L11.278 18.667 L22.167 8.167", 2.333],
    small: ["M5 11.5 L9.667 16 L19 7", 2],
    tiny: ["M4.167 9.583 L8.056 13.333 L15.833 5.833", 1.5],
  },
  square: {
    large: { check: ["M9.333 15.905 L13.778 20.190 L22.667 11.619", 2.667], border: 2, radius: 5.333 },
    medium: { check: ["M8.167 13.917 L12.056 17.667 L19.833 10.167", 2.333], border: 1.75, radius: 4.667 },
    small: { check: ["M7 11.929 L10.333 15.143 L17 8.714", 2], border: 1.5, radius: 4 },
    tiny: { check: ["M5.833 9.940 L8.611 12.619 L14.167 7.262", 1.5], border: 1, radius: 4 },
  },
};

function CheckboxSvg({
  style,
  checked,
  size,
}: {
  style: CheckboxStyle;
  checked: boolean;
  size: CheckboxSize;
}) {
  const px = SIZE_PX[size];
  const brand = "var(--color-brand-primary)"; /* #805AE9 */
  const white = "var(--color-font-white)"; /* #FFFFFF */
  const off = "var(--color-border-default)"; /* #DDDDDD */
  const lineOff = "var(--color-icon-quaternary)"; /* #999999 — line 스타일 미체크만 */

  const mark = ([d, w]: Check, stroke: string) => (
    <path
      d={d}
      stroke={stroke}
      strokeWidth={w}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  );

  return (
    <svg
      width={px}
      height={px}
      viewBox={`0 0 ${px} ${px}`}
      fill="none"
      aria-hidden
      focusable="false"
    >
      {style === "circle" && (
        <>
          <circle cx={px / 2} cy={px / 2} r={px / 2} fill={checked ? brand : off} />
          {/* circle 은 체크·미체크 모두 흰 체크 */}
          {mark(GEOM.circle[size], white)}
        </>
      )}

      {(style === "square-fill" || style === "square-line") && (() => {
        const g = GEOM.square[size];
        const fillBox = style === "square-fill" && checked;
        /* Figma 테두리는 안쪽(INSIDE) — 선 중심을 border/2 만큼 안으로, 모서리도 그만큼 줄여 바깥 모서리를 radius 로 맞춤 */
        return (
          <>
            <rect
              x={g.border / 2}
              y={g.border / 2}
              width={px - g.border}
              height={px - g.border}
              rx={g.radius - g.border / 2}
              fill={fillBox ? brand : white}
              stroke={checked ? brand : off}
              strokeWidth={g.border}
            />
            {mark(g.check, checked ? (fillBox ? white : brand) : off)}
          </>
        );
      })()}

      {style === "line" && mark(GEOM.line[size], checked ? brand : lineOff)}
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
        <CheckboxSvg style={style} checked={checked} size={size} />
      </button>
    );
  },
);
