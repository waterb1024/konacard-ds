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
 * 두 개의 path 사용:
 *   1) fill path — "지붕 있는 집" 모양. body 방향 1px 스트립 + 삼각형.
 *      → fill 이 body 의 border 1px 를 덮어 이음새(seam) 방지.
 *   2) stroke path — 두 대각선만. body 방향 base 는 stroke 안 함
 *      (body 의 border 와 자연스럽게 이어져 보이도록).
 * strokeLinejoin="round" 로 tip 을 살짝 둥글게 (Figma rounded tip 대응).
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
          strokeLinecap="round"
        />
      )}
    </svg>
  );

  if (direction === "down") {
    /* tip at bottom, base at top overlaps body's bottom edge */
    return render("M0 0 L12 0 L12 1 L6 8 L0 1 Z", "M0 1 L6 8 L12 1", 12, 8);
  }
  if (direction === "up") {
    /* tip at top, base at bottom overlaps body's top edge */
    return render("M0 8 L12 8 L12 7 L6 0 L0 7 Z", "M0 7 L6 0 L12 7", 12, 8);
  }
  if (direction === "right") {
    /* tip at right, base at left overlaps body's right edge */
    return render("M0 0 L1 0 L8 6 L1 12 L0 12 Z", "M1 0 L8 6 L1 12", 8, 12);
  }
  /* left — tip at left, base at right overlaps body's left edge */
  return render("M8 0 L7 0 L0 6 L7 12 L8 12 Z", "M7 0 L0 6 L7 12", 8, 12);
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
