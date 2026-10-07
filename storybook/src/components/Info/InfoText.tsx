import type { HTMLAttributes, ReactNode } from "react";
import styles from "./InfoText.module.css";

/**
 * KONACARD DS Info text — 입력칸 아래 안내·오류 문구
 * Figma: ${FIGMA_DS_FILE_KEY} (-AX-) / node 41:1241 (info, 구 input/info-text) · ❖ Info 페이지
 *
 * Figma variants: type 5종
 *   info       — 회색 글자 (font/tertiary #666), 아이콘 없음
 *   error      — 빨간 글자 (font/error #FF364B), 아이콘 없음
 *   icon-error — input/bullet icon_danger + 빨간 글자
 *   icon-info  — input/bullet icon_alert_black + 검정 글자 (font/primary)
 *   icon-guide — input/bullet icon_alert_gray + 회색 글자 (#666)
 *
 * 2026-10-07 AX 실측: 좌우 padding 4 · gap 4 · 위 정렬, 글자 body/3-Regular (12/18, -0.24) 줄바꿈.
 * 아이콘은 14×16 자리(위 padding 2) 안에 14×14 → 여러 줄이면 첫 줄 옆에 붙음.
 * Figma 컴포넌트 폭은 230 고정이지만 실제로는 부모 폭에 맞춰 늘려 쓰므로 width 100%.
 * Input 의 안내 문구로 쓸 컴포넌트 (Input 정리 후 연결 예정).
 */

export type InfoTextType =
  | "info"
  | "error"
  | "icon-error"
  | "icon-info"
  | "icon-guide";

export interface InfoTextProps extends HTMLAttributes<HTMLDivElement> {
  type?: InfoTextType;
  children: ReactNode;
}

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

/* input/bullet (2234:5516) size=large 원본 SVG path 그대로 */
const DANGER_PATH =
  "M7 3C6.44772 3 6 3.44772 6 4V7C6 7.55228 6.44772 8 7 8C7.55228 8 8 7.55228 8 7V4C8 3.44772 7.55228 3 7 3ZM7.00003 8.99999C6.44775 8.99999 6.00003 9.44771 6.00003 9.99999C6.00003 10.5523 6.44775 11 7.00003 11C7.55232 11 8.00003 10.5523 8.00003 9.99999C8.00003 9.44771 7.55232 8.99999 7.00003 8.99999Z";
const ALERT_PATH =
  "M6.83359 3.5C6.2813 3.5 5.83359 3.94772 5.83359 4.5V6.875C5.83359 7.42728 6.2813 7.875 6.83359 7.875H7.16692C7.71921 7.875 8.16692 7.42728 8.16692 6.875V4.5C8.16692 3.94772 7.71921 3.5 7.16692 3.5H6.83359ZM6.8335 8.75C6.28121 8.75 5.8335 9.19771 5.8335 9.75V10.0833C5.8335 10.6356 6.28121 11.0833 6.8335 11.0833H7.16683C7.71911 11.0833 8.16683 10.6356 8.16683 10.0833V9.75C8.16683 9.19772 7.71911 8.75 7.16683 8.75H6.8335Z";

const BULLET: Partial<Record<InfoTextType, { bg: string; path: string }>> = {
  "icon-error": { bg: "var(--color-icon-accent-red)", path: DANGER_PATH }, // #FF364B icon_danger
  "icon-info": { bg: "var(--color-icon-secondary)", path: ALERT_PATH }, // #333 icon_alert_black
  "icon-guide": { bg: "var(--color-icon-quaternary)", path: ALERT_PATH }, // #999 icon_alert_gray
};

export function InfoText({
  type = "icon-error",
  className,
  children,
  ...rest
}: InfoTextProps) {
  const bullet = BULLET[type];
  return (
    <div className={cx(styles.info, styles[type], className)} {...rest}>
      {bullet && (
        <span className={styles.ic} aria-hidden>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" focusable="false">
            <circle cx="7" cy="7" r="7" fill={bullet.bg} />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d={bullet.path}
              fill="var(--color-icon-white)"
            />
          </svg>
        </span>
      )}
      <span className={styles.text}>{children}</span>
    </div>
  );
}
