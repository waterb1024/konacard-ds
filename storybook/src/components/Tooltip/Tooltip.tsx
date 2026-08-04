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

/* ── Pin (arrow) SVG ────────────────────────────── */
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

  if (direction === "down") {
    /* tip at bottom-center — attached below body */
    return (
      <svg width="12" height="8" viewBox="0 0 12 8" aria-hidden>
        {isBrand ? (
          <path d="M0 0 L6 8 L12 0 Z" fill={fill} />
        ) : (
          <path d="M0 0 L6 8 L12 0" fill={fill} stroke={stroke} strokeWidth="1" />
        )}
      </svg>
    );
  }

  if (direction === "up") {
    /* tip at top-center — attached above body */
    return (
      <svg width="12" height="8" viewBox="0 0 12 8" aria-hidden>
        {isBrand ? (
          <path d="M0 8 L6 0 L12 8 Z" fill={fill} />
        ) : (
          <path d="M0 8 L6 0 L12 8" fill={fill} stroke={stroke} strokeWidth="1" />
        )}
      </svg>
    );
  }

  if (direction === "right") {
    /* tip at right-center — attached to right of body */
    return (
      <svg width="8" height="12" viewBox="0 0 8 12" aria-hidden>
        {isBrand ? (
          <path d="M0 0 L8 6 L0 12 Z" fill={fill} />
        ) : (
          <path d="M0 0 L8 6 L0 12" fill={fill} stroke={stroke} strokeWidth="1" />
        )}
      </svg>
    );
  }

  /* left — tip at left-center, attached to left of body */
  return (
    <svg width="8" height="12" viewBox="0 0 8 12" aria-hidden>
      {isBrand ? (
        <path d="M8 0 L0 6 L8 12 Z" fill={fill} />
      ) : (
        <path d="M8 0 L0 6 L8 12" fill={fill} stroke={stroke} strokeWidth="1" />
      )}
    </svg>
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
