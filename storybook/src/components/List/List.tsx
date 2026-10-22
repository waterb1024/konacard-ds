import type { ReactNode } from "react";
import styles from "./List.module.css";

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

/* Figma ic_arrow/ic_arrow_right_14 원본 (8×14, #333) */
function ChevronRight() {
  return (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" aria-hidden>
      <path
        d="M2 2L7 7L2 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Basic list item ─────────────────────────────── */
export interface ListItemProps {
  /** large: 상하 12 · 우측 영역 40 → 한 줄 65 / medium: 상하 16 → 한 줄 55 (link) */
  size?: "large" | "medium";
  title: ReactNode;
  description?: ReactNode;
  /** 우측 값 (항목+값 형태) */
  value?: ReactNode;
  /** 진입형 chevron 노출 */
  chevron?: boolean;
  /** 우측 추가 슬롯 (예: 인라인 액션 버튼) */
  action?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  /** 마지막 아이템일 때 bottom border 제거 */
  last?: boolean;
}

export function ListItem({
  size = "large",
  title,
  description,
  value,
  chevron,
  action,
  disabled,
  onClick,
  last,
}: ListItemProps) {
  const interactive = !!onClick && !action;
  const Element: "button" | "div" = interactive ? "button" : "div";
  return (
    <Element
      {...(interactive ? { type: "button", onClick, disabled } : {})}
      className={cx(
        styles.item,
        styles[size],
        !interactive && styles.nonInteractive,
        last && styles.last,
      )}
    >
      <div className={styles.itemText}>
        <span className={styles.itemTitle}>{title}</span>
        {description && (
          <span className={styles.itemDescription}>{description}</span>
        )}
      </div>
      {(value || action || chevron) && (
        <div className={styles.itemRight}>
          {value && <span className={styles.itemValue}>{value}</span>}
          {action}
          {chevron && (
            <span className={styles.itemChevron}>
              <ChevronRight />
            </span>
          )}
        </div>
      )}
    </Element>
  );
}

/* ── Bottomsheet option item (list/bottomsheet) ──── */
/* Figma ic_system/ic_select_on 원본 (20×20, #805AE9) */
function SelectCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M2 9.18301L7.12 15L18 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export interface BottomsheetItemProps {
  title: ReactNode;
  selected?: boolean;
  onClick?: () => void;
}

export function BottomsheetItem({
  title,
  selected,
  onClick,
}: BottomsheetItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cx(styles.bottomsheetItem, selected && styles.selected)}
    >
      <span className={styles.bottomsheetTitle}>{title}</span>
      <span className={styles.bottomsheetCheck}>
        <SelectCheck />
      </span>
    </button>
  );
}

/* ── List container ─────────────────────────────── */
export function List({ children }: { children: ReactNode }) {
  return <div className={styles.list}>{children}</div>;
}

/* ── Card Select ─────────────────────────────────── */
export interface CardSelectProps {
  title: ReactNode;
  description?: ReactNode;
  imageLabel?: string;
  selected?: boolean;
  onClick?: () => void;
}

export function CardSelect({
  title,
  description,
  imageLabel = "CARD",
  selected,
  onClick,
}: CardSelectProps) {
  return (
    <button
      type="button"
      className={cx(styles.cardSelect, selected && styles.selected)}
      onClick={onClick}
      aria-pressed={selected}
    >
      <span className={styles.cardSelectImage} aria-hidden>
        {imageLabel}
      </span>
      <div className={styles.cardSelectText}>
        <span className={styles.cardSelectTitle}>{title}</span>
        {description && (
          <span className={styles.cardSelectDesc}>{description}</span>
        )}
      </div>
    </button>
  );
}
