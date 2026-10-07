import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import styles from "./Checkbox.module.css";

/**
 * KONACARD DS Checkbox
 * Figma: ${FIGMA_DS_FILE_KEY} (-AX-) / node 28:431 (controls/check box)
 * spec: konacard-ds-components.md § 05_Control
 *
 * Figma variants:
 *   - style: circle(28) / square-fill(20) / square-line(24) / line(24)
 *   - state: true(checked) / false(unchecked)
 *   - status: true(enabled) / false(disabled → opacity 0.4)
 *
 * 2026-10-07 사용자가 Figma 에서 size 속성 삭제 — 실화면에서 style 마다 한 크기만 써서
 * style 별 크기로 고정 (circle = 구 medium · square-fill = 구 tiny · square-line·line = 구 small).
 * 체크 위치·선 두께·모서리는 AX 실측 좌표를 GEOM 표에 그대로 옮기고, viewBox 를 크기와 1:1 로 둔다.
 */

export type CheckboxStyle =
  | "circle"
  | "square-fill"
  | "square-line"
  | "line";

export interface CheckboxProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "onChange" | "value" | "style"
  > {
  /** Figma variant "style" 유지 — HTML style 속성과 이름 충돌 회피 위해 omit */
  style?: CheckboxStyle;
  checked?: boolean;
  onChange?: (next: boolean) => void;
}

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

/* 체크 표시: [path(절대 좌표), 선 두께] — Figma Vector 의 x·y + vectorPath 를 더한 값 */
type Check = [string, number];

const GEOM: Record<
  CheckboxStyle,
  { px: number; check: Check; border?: number; radius?: number }
> = {
  circle: { px: 28, check: ["M8 14 L12 18 L20 10", 2] },
  "square-fill": {
    px: 20,
    check: ["M5.833 9.940 L8.611 12.619 L14.167 7.262", 1.5],
    border: 1,
    radius: 4,
  },
  "square-line": {
    px: 24,
    check: ["M7 11.929 L10.333 15.143 L17 8.714", 2],
    border: 1.5,
    radius: 4,
  },
  line: { px: 24, check: ["M5 11.5 L9.667 16 L19 7", 2] },
};

function CheckboxSvg({
  style,
  checked,
}: {
  style: CheckboxStyle;
  checked: boolean;
}) {
  const g = GEOM[style];
  const px = g.px;
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
          {mark(g.check, white)}
        </>
      )}

      {(style === "square-fill" || style === "square-line") && (() => {
        const border = g.border!;
        const fillBox = style === "square-fill" && checked;
        /* Figma 테두리는 안쪽(INSIDE) — 선 중심을 border/2 만큼 안으로, 모서리도 그만큼 줄여 바깥 모서리를 radius 로 맞춤 */
        return (
          <>
            <rect
              x={border / 2}
              y={border / 2}
              width={px - border}
              height={px - border}
              rx={g.radius! - border / 2}
              fill={fillBox ? brand : white}
              stroke={checked ? brand : off}
              strokeWidth={border}
            />
            {mark(g.check, checked ? (fillBox ? white : brand) : off)}
          </>
        );
      })()}

      {style === "line" && mark(g.check, checked ? brand : lineOff)}
    </svg>
  );
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  function Checkbox(
    {
      style = "circle",
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
        <CheckboxSvg style={style} checked={checked} />
      </button>
    );
  },
);
