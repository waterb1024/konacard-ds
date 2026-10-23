import type { CSSProperties, ReactNode } from "react";
import styles from "./Toast.module.css";

/**
 * KONACARD DS Toast
 * Figma: ${FIGMA_DS_FILE_KEY} (-AX-) / node 11099:3580 (toast) · ❖ Toast 페이지
 *
 * AX 실측 (2026-10-22 사용자 정리 완료)
 *   - 틀: 320×42 · radius 12 (radius/components/toast) · 바탕 color/background/dimed (검정 64%)
 *   - 글자: body/2 Regular 14/22 · -0.28 · 흰색 · 가운데
 *   - variant·속성 없음 — 성공/실패 색 구분 없이 문구로만 성격 전달
 *   - 배치 (예시 화면 #CBP_toast popup_CASE): 화면 아래에서 40, 좌우 20
 *     → 360 화면에서 폭 320. 폭은 고정값이 아니라 화면 폭 − 40
 */

export interface ToastProps {
  /** 알림 문구 — Figma 에서 바꿔 쓰는 유일한 값 */
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const cx = (...n: Array<string | false | undefined>) => n.filter(Boolean).join(" ");

/** 항상 화면 아래 40 · 좌우 20 에 고정 (position: fixed). 미리보기에서는 transform 을 준 틀이 고정 기준이 됨 */
export function Toast({ children, className, style }: ToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cx(styles.toast, className)}
      style={style}
    >
      {children}
    </div>
  );
}
