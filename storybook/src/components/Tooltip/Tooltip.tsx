import { useState } from "react";
import type { ReactNode } from "react";
import styles from "./Tooltip.module.css";

/**
 * KONACARD DS Tooltip — Bubble Type
 * Figma: ${FIGMA_DS_FILE_KEY} (-AX-) / node 200:1909
 * spec: konacard-ds-components.md § 11_Tooltip
 *
 * Placement — Figma(AX) 이름 그대로 (2026-10-07 대조):
 *   top-*   : 말풍선이 위, 핀은 아래쪽에서 아래를 가리킴 (-left/-right = 핀 중심이 끝에서 20)
 *   bottom-*: 말풍선이 아래, 핀은 위쪽에서 위를 가리킴
 *   left    : 핀이 말풍선 왼쪽에 붙어 왼쪽을 가리킴
 *   right   : 핀이 말풍선 오른쪽에 붙어 오른쪽을 가리킴
 *   ※ top/bottom 은 "말풍선 위치", left/right 는 "핀 위치" 기준이라 Figma 이름 규칙이 서로 다름
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
 * Figma tooltip/pin (2416:6624) 원본 SVG 그대로 (2026-10-07 AX 재추출):
 *   - 12×8 마스크 안에 꼭짓점 모서리 2 인 삼각형(12×10) → 아래 2px 가 잘려 밑변이 안 보임
 *   - line: 흰 바탕 + #805AE9 안쪽 1px 선 / brand: #805AE9 채움 (선 없음)
 *   - 위를 향한 모양 하나만 두고, 방향은 SVG transform 으로 돌림
 */
type PinDirection = "down" | "up" | "left" | "right";

const PIN_PATH = {
  line: "M4.71387 3.11523C5.29652 2.14461 6.70348 2.14461 7.28613 3.11523L11.1172 9.5L0.882812 9.5L4.71387 3.11523Z",
  brand: "M4.28501 2.85831C5.06182 1.56363 6.93818 1.56363 7.71499 2.85831L12 10L0 10L4.28501 2.85831Z",
};

/* 위(12×8) 기준 좌표를 방향별로 옮기는 행렬 */
const PIN_TRANSFORM: Record<PinDirection, string | undefined> = {
  up: undefined,
  down: "matrix(-1 0 0 -1 12 8)",
  left: "matrix(0 -1 1 0 0 12)",
  right: "matrix(0 1 -1 0 8 0)",
};

function Pin({
  style,
  direction,
}: {
  style: TooltipStyle;
  direction: PinDirection;
}) {
  const vertical = direction === "up" || direction === "down";
  const w = vertical ? 12 : 8;
  const h = vertical ? 8 : 12;
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      aria-hidden
      focusable="false"
      style={{ overflow: "hidden" }}
    >
      <g transform={PIN_TRANSFORM[direction]}>
        {style === "brand" ? (
          <path d={PIN_PATH.brand} fill="var(--color-background-brand)" />
        ) : (
          <path
            d={PIN_PATH.line}
            fill="var(--color-background-primary)"
            stroke="var(--color-border-brand)"
          />
        )}
      </g>
    </svg>
  );
}

/* ── Placement → pin direction ─────────────────
 * Figma 이름 그대로: top-* / bottom-* 는 말풍선 위치(핀은 반대쪽),
 * left / right 는 핀이 붙는 쪽 (left = 핀이 왼쪽에서 왼쪽을 가리킴)
 */
function pinDirectionFor(placement: TooltipPlacement): PinDirection {
  if (placement.startsWith("top")) return "down";
  if (placement.startsWith("bottom")) return "up";
  if (placement === "left") return "left";
  return "right";
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
          {arrow}
          {body}
        </>
      )}
      {placement === "right" && (
        <>
          {body}
          {arrow}
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
