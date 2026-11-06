import type { ReactNode } from "react";
import styles from "./Heading.module.css";

/**
 * KONACARD DS Heading
 * Figma: ${FIGMA_DS_FILE_KEY} (-AX-) · ❖ Heading 페이지 (2026-11-06 사용자 정리 완료)
 *
 * heading/headline (1098:4409) — 화면 맨 위(header 아래) 한 번만 쓰는 큰 제목
 *   - 틀: 폭 360(화면 폭) · padding 위아래 24(spacing/xlarge) · 좌우 20(layout/margin) · 글 사이 8(spacing/xsmall)
 *   - 주 문구: heading/1-bold 24/32 · -0.48 · color/font/primary
 *     강조 구절은 fill 만 color/font/brand 로 칠함 → 코드에서는 <HeadlineEmphasis>
 *   - 보조 문구(sub text, 기본 꺼짐): body/2-Regular 14/22 · -0.28 · color/font/tertiary · 주 문구 아래
 *
 * heading/section (576:6131) — 화면 안에서 묶음(섹션)을 나누는 제목
 *   - 틀: 폭 FILL(360 화면에서 320) · 글자 위아래 padding 8(spacing/xsmall)
 *   - size=large  : body/2-bold 14/22 · -0.28 · color/font/primary    → 높이 38
 *   - size=medium : body/3-Bold 12/18 · -0.24 · color/font/quaternary → 높이 34
 *   - size=small  : body/4-Bold 11/16 · -0.22 · color/font/quaternary → 높이 32
 */

const cx = (...n: Array<string | false | undefined>) => n.filter(Boolean).join(" ");

/* ── heading/headline ─────────────────────────── */
export interface HeadlineProps {
  /** 주 문구 — 강조 구절은 `<HeadlineEmphasis>` 로 감쌈 */
  children: ReactNode;
  /** 보조 문구 (Figma sub text 켬 + sub). 없으면 숨김 */
  sub?: ReactNode;
  className?: string;
}

export function Headline({ children, sub, className }: HeadlineProps) {
  return (
    <div className={cx(styles.headline, className)}>
      <h1 className={styles["headline-main"]}>{children}</h1>
      {sub && <p className={styles["headline-sub"]}>{sub}</p>}
    </div>
  );
}

/** 주 문구 안의 강조 구절 — 글자 색만 color/font/brand 로 바꿈 (굵기·크기 그대로) */
export function HeadlineEmphasis({ children }: { children: ReactNode }) {
  return <span className={styles["headline-emphasis"]}>{children}</span>;
}

/* ── heading/section ──────────────────────────── */
export type SectionTitleSize = "large" | "medium" | "small";

export interface SectionTitleProps {
  /** Figma title */
  children: ReactNode;
  /** large = 검정 14/22 · medium = 회색 12/18 · small = 회색 11/16 */
  size?: SectionTitleSize;
  className?: string;
}

export function SectionTitle({ children, size = "large", className }: SectionTitleProps) {
  return (
    <h2 className={cx(styles.section, styles[`section-${size}`], className)}>
      {children}
    </h2>
  );
}
