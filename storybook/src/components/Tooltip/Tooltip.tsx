import { useState } from "react";
import type { ReactNode } from "react";
import styles from "./Tooltip.module.css";

/**
 * KONACARD DS Tooltip — Bubble Type
 * Figma: dHJa65PGtCQHq2n4qgL9Z9 (-AX-) / node 200:1909
 * spec: konacard-ds-components.md § 11_Tooltip
 *
 * Placement 명명 규칙 = "툴팁이 앵커에 대해 어디에 위치하는지"
 *   top-*   : 툴팁이 앵커 위에 있음, arrow 하단에서 아래로 향함
 *   bottom-*: 툴팁이 앵커 아래에 있음, arrow 상단에서 위로 향함
 *   left    : 툴팁이 앵커 왼쪽, arrow 우측에서 오른쪽으로 향함
 *   right   : 툴팁이 앵커 오른쪽, arrow 좌측에서 왼쪽으로 향함
 */

export type TooltipPlacement =
  | "top-left"
  | "top"
  | "top-right"
  | "bottom-left"
  | "bottom"
  | "bottom-right"
  | "left"
  | "right";

export type TooltipStyle = "line" | "brand";

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

/* ── Pin (arrow) SVG ──────────────────────────────
 * Figma polygon2 원본을 그대로 반영:
 *   - Tip 은 cubic bezier 로 둥글게 처리 (`strokeLinejoin: round` 만으로는
 *     실제 tip 이 각져 보였음 — Figma 는 진짜 rounded tip).
 *   - Diagonals 는 pin container 의 base edge 까지 연장돼 fill 이 body
 *     border 를 완전히 덮음 (seam 방지).
 *   - Stroke path 는 base 를 뺀 open path — body 의 border 와 이어져 보이도록.
 */
type PinDirection = "down" | "up" | "left" | "right";

function Pin({
  style,
  direction,
}: {
  style: TooltipStyle;
  direction: PinDirection;
}) {
  const isBrand = style === "brand";
  const fill = isBrand
    ? "var(--color-background-brand)"
    : "var(--color-background-primary)";
  const stroke = "var(--color-border-focus)";

  const render = (
    fillPath: string,
    strokePath: string,
    w: number,
    h: number,
  ) => (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      aria-hidden
      focusable="false"
    >
      <path d={fillPath} fill={fill} />
      {!isBrand && (
        <path
          d={strokePath}
          fill="none"
          stroke={stroke}
          strokeWidth="1"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );

  /* Figma polygon2 원본 tip curve:
   *   (4.71, 1.23) → C(5.30, 0.26) (6.70, 0.26) (7.29, 1.23)
   * viewBox 12×8 기준 (Figma 8.113 → 8 로 살짝 스케일).
   * Diagonals 는 tip 끝점에서 pin 의 base edge 코너 (0/12, 0/8) 까지 연장 →
   * 원본보다 base 가 약간 넓어지지만 fill 이 body border 를 완전히 덮어 seam 방지.
   */

  if (direction === "up") {
    /* tip up, base at bottom (bottom-* placement) */
    return render(
      "M0 8 L4.71 1.23 C5.30 0.26 6.70 0.26 7.29 1.23 L12 8 Z",
      "M0 8 L4.71 1.23 C5.30 0.26 6.70 0.26 7.29 1.23 L12 8",
      12,
      8,
    );
  }
  if (direction === "down") {
    /* tip down, base at top (top-* placement). 세로 뒤집기: y' = 8 - y */
    return render(
      "M0 0 L4.71 6.77 C5.30 7.74 6.70 7.74 7.29 6.77 L12 0 Z",
      "M0 0 L4.71 6.77 C5.30 7.74 6.70 7.74 7.29 6.77 L12 0",
      12,
      8,
    );
  }
  if (direction === "right") {
    /* tip right, base at left (left placement). 시계방향 90도 회전 */
    return render(
      "M0 0 L6.77 4.71 C7.74 5.30 7.74 6.70 6.77 7.29 L0 12 Z",
      "M0 0 L6.77 4.71 C7.74 5.30 7.74 6.70 6.77 7.29 L0 12",
      8,
      12,
    );
  }
  /* left — tip left, base at right (right placement). 좌우 반전 */
  return render(
    "M8 0 L1.23 4.71 C0.26 5.30 0.26 6.70 1.23 7.29 L8 12 Z",
    "M8 0 L1.23 4.71 C0.26 5.30 0.26 6.70 1.23 7.29 L8 12",
    8,
    12,
  );
}

/* ── Placement → pin direction ─────────────────── */
function pinDirectionFor(placement: TooltipPlacement): PinDirection {
  if (placement.startsWith("top")) return "down";
  if (placement.startsWith("bottom")) return "up";
  if (placement === "left") return "right";
  return "left";
}

/* ── Tooltip (inline bubble) ───────────────────── */
export interface TooltipProps {
  children: ReactNode;
  /** style variant */
  variant?: TooltipStyle;
  /** placement around anchor */
  placement?: TooltipPlacement;
  className?: string;
}

/**
 * 순수 렌더링 컴포넌트. 실제 앵커와 위치 계산은 부모에서 처리.
 * TooltipTrigger + BubbleTooltip 조합으로 인라인 사용 가능.
 */
export function Tooltip({
  children,
  variant = "line",
  placement = "bottom-left",
  className,
}: TooltipProps) {
  const dir = pinDirectionFor(placement);
  const body = (
    <div className={styles.body} role="tooltip">
      {children}
    </div>
  );
  const arrow = (
    <div className={styles.arrowSlot}>
      <Pin style={variant} direction={dir} />
    </div>
  );

  const isTop = placement.startsWith("top");
  const isBottom = placement.startsWith("bottom");
  const isLeft = placement === "left";

  return (
    <div
      className={cx(
        styles.tooltip,
        styles[variant],
        styles[`p-${placement}`],
        className,
      )}
    >
      {isTop && (
        <>
          {body}
          {arrow}
        </>
      )}
      {isBottom && (
        <>
          {arrow}
          {body}
        </>
      )}
      {isLeft && (
        <>
          {body}
          {arrow}
        </>
      )}
      {placement === "right" && (
        <>
          {arrow}
          {body}
        </>
      )}
    </div>
  );
}

/* ── Trigger (?/!) ────────────────────────────── */
export function TooltipTrigger({
  icon = "!",
  children,
  onClick,
}: {
  icon?: "?" | "!";
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <button type="button" className={styles.trigger} onClick={onClick}>
      <span>{children}</span>
      <span className={styles.triggerIcon} aria-hidden>
        {icon}
      </span>
    </button>
  );
}

/* ── Legacy: BubbleTooltip (기존 API 유지) ─────── */
export interface BubbleTooltipProps {
  label: ReactNode;
  content: ReactNode;
  /** @deprecated alias — variant 사용 권장 */
  type?: TooltipStyle;
  variant?: TooltipStyle;
  placement?: TooltipPlacement;
  defaultOpen?: boolean;
}

/**
 * Trigger + Tooltip 조합. `!` 아이콘 탭 시 인접 위치에 tooltip 노출.
 */
export function BubbleTooltip({
  label,
  content,
  type,
  variant,
  placement = "bottom-left",
  defaultOpen = false,
}: BubbleTooltipProps) {
  const [open, setOpen] = useState(defaultOpen);
  const finalVariant = variant ?? type ?? "line";
  return (
    <span style={{ position: "relative", display: "inline-flex", flexDirection: "column" }}>
      <TooltipTrigger icon="!" onClick={() => setOpen((v) => !v)}>
        {label}
      </TooltipTrigger>
      {open && (
        <div style={{ position: "absolute", top: "100%", left: 0 }}>
          <Tooltip variant={finalVariant} placement={placement}>
            {content}
          </Tooltip>
        </div>
      )}
    </span>
  );
}
