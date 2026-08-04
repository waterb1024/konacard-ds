import type { ReactNode } from "react";
import styles from "./Banner.module.css";

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

export type BannerColor =
  | "brand"
  | "gray"
  | "blue"
  | "green"
  | "yellow"
  | "pink";

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M8 5L13 10L8 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Benefit Banner (1 line) ─────────────────── */
export interface BenefitBannerProps {
  color?: BannerColor;
  icon?: ReactNode;
  title: ReactNode;
  /** 우측 강조 값 (nn개, 15,500원 등, 브랜드 보라 Bold) */
  value?: ReactNode;
  onClick?: () => void;
  showChevron?: boolean;
}

export function BenefitBanner({
  color = "brand",
  icon,
  title,
  value,
  onClick,
  showChevron = true,
}: BenefitBannerProps) {
  return (
    <button
      type="button"
      className={cx(styles.banner, styles.benefit, styles[`color-${color}`])}
      onClick={onClick}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <div className={styles.textArea}>
        <span className={styles.title}>{title}</span>
        {value && <span className={styles.value}>{value}</span>}
      </div>
      {showChevron && (
        <span className={styles.chevron}>
          <ChevronRight />
        </span>
      )}
    </button>
  );
}

/* ── Action Banner (2 depth) ─────────────────── */
export interface ActionBannerProps {
  color?: BannerColor;
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  onClick?: () => void;
  showChevron?: boolean;
}

export function ActionBanner({
  color = "brand",
  icon,
  title,
  description,
  onClick,
  showChevron = true,
}: ActionBannerProps) {
  return (
    <button
      type="button"
      className={cx(styles.banner, styles.action, styles[`color-${color}`])}
      onClick={onClick}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <div className={styles.textArea}>
        <span className={styles.title}>{title}</span>
        {description && (
          <span className={styles.description}>{description}</span>
        )}
      </div>
      {showChevron && (
        <span className={styles.chevron}>
          <ChevronRight />
        </span>
      )}
    </button>
  );
}

/* ── 흔한 아이콘 ────────────────────────────── */
export function GiftIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="8"
        width="18"
        height="12"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M3 12h18M12 8v12M8 8c-1.5-1.5-1.5-4 0-5s3 0 4 2c1-2 2.5-3 4-2s1.5 3.5 0 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CardBenefitIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="6"
        width="18"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="14" r="1.2" fill="currentColor" />
    </svg>
  );
}
