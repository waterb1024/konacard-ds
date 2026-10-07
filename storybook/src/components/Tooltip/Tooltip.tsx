import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";
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
  /**
   * 말풍선 최대 폭. 기본 320 = 화면 360 − 좌우 여백 20×2.
   * 글자는 이 폭 안에서 줄바꿈되고, 문구 안의 줄바꿈(\n)도 그대로 지켜짐 (Figma 예시 화면이 직접 줄을 나눔)
   */
  maxWidth?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * 순수 렌더링 컴포넌트. 실제 앵커와 위치 계산은 부모(또는 BubbleTooltip)에서 처리.
 */
export function Tooltip({
  children,
  variant = "line",
  placement = "bottom-left",
  maxWidth = 320,
  className,
  style,
}: TooltipProps) {
  const dir = pinDirectionFor(placement);
  const body = (
    <div className={styles.body} role="tooltip" style={{ maxWidth }}>
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
      style={style}
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

/* ── 트리거 아이콘 ────────────────────────────────
 * Figma ❖ Tooltip 예시 화면에서 쓰는 회색 원형 아이콘 3종 (원본 SVG 그대로, #999)
 *   question — ic_20/ic_question_20_g (20) : 정보 값 옆 "?" — 용어·추가 설명
 *   guide    — ic_20/ic_guide_20_g (20)    : 정보 값 옆 "!" — 주의·조건 안내
 *   noti     — ic_info/ic_noti_16_g (16)   : 입력칸 제목 옆 작은 "?"
 */
export type TooltipIconType = "question" | "guide" | "noti";

const GRAY = "var(--color-icon-quaternary)"; /* #999 */

function TooltipIconSvg({ icon }: { icon: TooltipIconType }) {
  if (icon === "noti") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden focusable="false">
        <circle cx="8" cy="8" r="7.42857" stroke={GRAY} strokeWidth="1.14286" />
        <path
          d="M8.50778 9.37392H7.08479C7.08851 9.0391 7.11455 8.75078 7.16291 8.50896C7.21499 8.26343 7.30242 8.04207 7.42519 7.8449C7.55168 7.64773 7.71909 7.45242 7.92742 7.25896C8.10227 7.10271 8.2548 6.9539 8.38501 6.81254C8.51522 6.67117 8.61752 6.52608 8.69193 6.37727C8.76633 6.22474 8.80354 6.05547 8.80354 5.86945C8.80354 5.65368 8.77005 5.47511 8.70309 5.33374C8.63985 5.18865 8.54312 5.0789 8.41291 5.0045C8.28642 4.93009 8.12645 4.89289 7.933 4.89289C7.77303 4.89289 7.62422 4.92823 7.48657 4.99892C7.34892 5.06588 7.23546 5.17005 7.14617 5.31142C7.0606 5.45279 7.01596 5.6388 7.01224 5.86945H5.39394C5.4051 5.35978 5.52229 4.9394 5.7455 4.60829C5.97244 4.27347 6.27563 4.02608 6.6551 3.86611C7.03456 3.70242 7.46053 3.62057 7.933 3.62057C8.45383 3.62057 8.90026 3.70614 9.27229 3.87727C9.64431 4.04468 9.92891 4.29207 10.1261 4.61945C10.3233 4.94312 10.4218 5.33746 10.4218 5.80249C10.4218 6.12615 10.3586 6.41447 10.2321 6.66745C10.1056 6.9167 9.94007 7.14922 9.73546 7.36499C9.53084 7.58076 9.30577 7.80398 9.06023 8.03463C8.84818 8.22437 8.70309 8.4234 8.62496 8.63173C8.55056 8.84006 8.5115 9.08746 8.50778 9.37392ZM6.91738 11.0982C6.91738 10.8602 6.99922 10.663 7.16291 10.5067C7.3266 10.3468 7.5461 10.2668 7.82139 10.2668C8.09297 10.2668 8.3106 10.3468 8.4743 10.5067C8.64171 10.663 8.72541 10.8602 8.72541 11.0982C8.72541 11.3289 8.64171 11.5242 8.4743 11.6842C8.3106 11.8442 8.09297 11.9241 7.82139 11.9241C7.5461 11.9241 7.3266 11.8442 7.16291 11.6842C6.99922 11.5242 6.91738 11.3289 6.91738 11.0982Z"
          fill={GRAY}
        />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden focusable="false">
      <circle cx="10" cy="10" r="8.5" stroke={GRAY} />
      <path
        d="M9.12695 13.1836C9.12695 12.9437 9.20752 12.7467 9.36865 12.5928C9.53337 12.4352 9.74284 12.3564 9.99707 12.3564C10.2513 12.3564 10.459 12.4352 10.6201 12.5928C10.7848 12.7467 10.8672 12.9437 10.8672 13.1836C10.8672 13.4199 10.7866 13.6151 10.6255 13.769C10.4679 13.923 10.2585 14 9.99707 14C9.73568 14 9.52441 13.923 9.36328 13.769C9.20573 13.6151 9.12695 13.4199 9.12695 13.1836Z"
        fill={GRAY}
      />
      {icon === "question" ? (
        <path
          d="M9.28271 11.5347C9.28271 11.0334 9.34359 10.6341 9.46533 10.3369C9.58708 10.0397 9.80908 9.74788 10.1313 9.46143C10.4572 9.17139 10.6738 8.93685 10.7812 8.75781C10.8887 8.5752 10.9424 8.38363 10.9424 8.18311C10.9424 7.57796 10.6631 7.27539 10.1045 7.27539C9.83952 7.27539 9.62646 7.35775 9.46533 7.52246C9.30778 7.68359 9.22542 7.90739 9.21826 8.19385H7.66064C7.66781 7.50993 7.88802 6.97461 8.32129 6.58789C8.75814 6.20117 9.35254 6.00781 10.1045 6.00781C10.8636 6.00781 11.4526 6.19222 11.8716 6.56104C12.2905 6.92627 12.5 7.44368 12.5 8.11328C12.5 8.41764 12.432 8.70589 12.2959 8.97803C12.1598 9.24658 11.9217 9.54557 11.5815 9.875L11.1465 10.2886C10.8743 10.55 10.7186 10.8561 10.6792 11.207L10.6577 11.5347H9.28271Z"
          fill={GRAY}
        />
      ) : (
        <path
          d="M9.07975 6.99682C9.03677 6.45964 9.46111 6 10 6C10.5389 6 10.9632 6.45964 10.9203 6.99682L10.6478 10.4019C10.6208 10.7397 10.3388 11 10 11C9.66116 11 9.37917 10.7397 9.35215 10.4019L9.07975 6.99682Z"
          fill={GRAY}
          stroke={GRAY}
          strokeWidth="0.2"
        />
      )}
    </svg>
  );
}

/* ── BubbleTooltip: 아이콘 + 툴팁 ──────────────────
 * Figma 예시 화면 기준 사용법:
 *   - 아이콘을 누르면 열리고, 다시 누르면 닫힘
 *   - 핀 끝이 아이콘 가운데를 가리킴 (컴포넌트 핀 중심 = 말풍선 끝에서 20 → 그만큼 당겨서 붙임)
 *   - 아이콘 바로 아래(bottom-*) 또는 바로 위(top-*)에 붙음 — 간격 0
 *   - 화면 왼쪽 아이콘은 -left, 오른쪽 아이콘은 -right (말풍선이 화면 밖으로 안 나가게)
 */
export interface BubbleTooltipProps {
  content: ReactNode;
  icon?: TooltipIconType;
  variant?: TooltipStyle;
  placement?: Exclude<TooltipPlacement, "left" | "right">;
  defaultOpen?: boolean;
  maxWidth?: number;
  /** 접근성용 아이콘 이름 */
  label?: string;
}

const PIN_CENTER = 20; /* arrowSlot 40 의 가운데 */

export function BubbleTooltip({
  content,
  icon = "question",
  variant = "line",
  placement = "bottom-left",
  defaultOpen = false,
  maxWidth,
  label = "도움말",
}: BubbleTooltipProps) {
  const [open, setOpen] = useState(defaultOpen);
  const size = icon === "noti" ? 16 : 20;
  const half = size / 2;
  const below = placement.startsWith("bottom");
  const pos: CSSProperties = { position: "absolute", zIndex: 10, width: "max-content" };
  if (below) pos.top = "100%";
  else pos.bottom = "100%";
  if (placement.endsWith("-left")) pos.left = half - PIN_CENTER;
  else if (placement.endsWith("-right")) pos.right = half - PIN_CENTER;
  else {
    pos.left = "50%";
    pos.transform = "translateX(-50%)";
  }
  return (
    <span className={styles.anchor}>
      <button
        type="button"
        className={styles.iconButton}
        aria-label={label}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <TooltipIconSvg icon={icon} />
      </button>
      {open && (
        <Tooltip variant={variant} placement={placement} maxWidth={maxWidth} style={pos}>
          {content}
        </Tooltip>
      )}
    </span>
  );
}

export { TooltipIconSvg as TooltipIcon };
