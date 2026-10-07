import type { ReactNode } from "react";
import { Button } from "./Button";
import styles from "./FixedBottom.module.css";

/**
 * KONACARD DS Fixed Bottom — 화면 맨 아래 고정 버튼 영역
 * Figma: ${FIGMA_DS_FILE_KEY} (-AX-) / node 17:1049 (button/fixed-bottom) · 02_Components 페이지
 *
 * AX 실측 2026-10-07 (Device AOS 360 · iOS 375 — 폭만 다르고 구조 같음 → 코드는 부모 폭 100%):
 *   - 흰 바탕 · padding 위 0 · 좌우 20 · 아래 16 · 버튼 사이 8
 *   - 왼쪽 보조 버튼: button/button primary · large · gray-light, 폭 115 고정
 *   - 오른쪽 주 버튼: button/button primary · large · brand, 남은 폭 채움
 *   - 보조 버튼 없이 주 버튼만 쓰면 폭 전체
 */

export interface FixedBottomProps {
  /** 오른쪽 주 버튼 글자 */
  primary: ReactNode;
  /** 왼쪽 보조 버튼 글자 (없으면 주 버튼만) */
  secondary?: ReactNode;
  onPrimary?: () => void;
  onSecondary?: () => void;
  primaryDisabled?: boolean;
  className?: string;
}

export function FixedBottom({
  primary,
  secondary,
  onPrimary,
  onSecondary,
  primaryDisabled,
  className,
}: FixedBottomProps) {
  return (
    <div className={[styles.fixedBottom, className].filter(Boolean).join(" ")}>
      {secondary != null && (
        <Button size="large" color="Gray_Light" className={styles.secondary} onClick={onSecondary}>
          {secondary}
        </Button>
      )}
      <Button size="large" color="Brand" className={styles.primary} disabled={primaryDisabled} onClick={onPrimary}>
        {primary}
      </Button>
    </div>
  );
}
