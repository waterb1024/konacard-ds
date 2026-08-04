import type { ReactNode } from "react";
import styles from "./Info.module.css";

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

/* ── Text info ──────────────────────────────────── */
export interface TextInfoProps {
  title?: ReactNode;
  /** 제목 없는 안내문구는 상단 dotted line 필수 */
  dottedTop?: boolean;
  children: ReactNode;
}

export function TextInfo({ title, dottedTop, children }: TextInfoProps) {
  const showDotted = !title && (dottedTop ?? true);
  return (
    <div className={cx(styles.textInfo, showDotted && styles.dottedTop)}>
      {title && (
        <div className={styles.textInfoTitle}>
          <span className={styles.textInfoTitleIcon} aria-hidden>
            {infoIcon}
          </span>
          {title}
        </div>
      )}
      {children}
    </div>
  );
}

const infoIcon = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M7 6.5v3.5M7 4.2v0.1"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export function InfoLine({
  depth = 1,
  children,
}: {
  depth?: 1 | 2;
  children: ReactNode;
}) {
  return (
    <div
      className={cx(styles.textInfoRow, depth === 1 ? styles["depth-1"] : styles["depth-2"])}
    >
      <span className={styles.bullet} aria-hidden>
        {depth === 1 ? "•" : "*"}
      </span>
      <span>{children}</span>
    </div>
  );
}

/* ── Info-box (Item List / Box Case) ─────────────── */
export interface InfoBoxProps {
  children: ReactNode;
}

export function InfoBox({ children }: InfoBoxProps) {
  return <div className={styles.infoBox}>{children}</div>;
}

export interface ItemListRowProps {
  label: ReactNode;
  children: ReactNode;
}

export function ItemListRow({ label, children }: ItemListRowProps) {
  return (
    <div className={styles.itemList}>
      <span className={styles.itemLabel}>{label}</span>
      <span className={styles.itemContent}>{children}</span>
    </div>
  );
}

export function GroupDivider() {
  return <div className={styles.groupDivider} />;
}
