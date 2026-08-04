import { useState } from "react";
import type { ReactNode } from "react";
import styles from "./List.module.css";

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

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

function ChevronDown() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckCircle() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="M7.5 12.5L10.5 15.5L16.5 9"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Basic list item ─────────────────────────────── */
export interface ListItemProps {
  title: ReactNode;
  description?: ReactNode;
  /** 우측 값 (항목+값 형태) */
  value?: ReactNode;
  /** 진입형 chevron 노출 */
  chevron?: boolean;
  /** 우측 추가 슬롯 (예: 인라인 액션 버튼) */
  action?: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  /** 마지막 아이템일 때 bottom border 제거 */
  last?: boolean;
}

export function ListItem({
  title,
  description,
  value,
  chevron,
  action,
  selected,
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
        !interactive && styles.nonInteractive,
        selected && styles.selected,
        last && styles.last,
      )}
    >
      <div className={styles.itemText}>
        <span className={styles.itemTitle}>{title}</span>
        {description && (
          <span className={styles.itemDescription}>{description}</span>
        )}
      </div>
      {value && <span className={styles.itemValue}>{value}</span>}
      {action}
      {chevron && (
        <span className={styles.itemChevron}>
          <ChevronRight />
        </span>
      )}
    </Element>
  );
}

/* ── List container ─────────────────────────────── */
export function List({ children }: { children: ReactNode }) {
  return <div className={styles.list}>{children}</div>;
}

/* ── Expand ──────────────────────────────────────── */
export interface ExpandProps {
  title: ReactNode;
  description?: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onToggle?: (next: boolean) => void;
  children?: ReactNode;
  /** 2depth 부연 텍스트 */
  subContent?: ReactNode;
}

export function Expand({
  title,
  description,
  defaultOpen = false,
  open: controlled,
  onToggle,
  children,
  subContent,
}: ExpandProps) {
  const [internal, setInternal] = useState(defaultOpen);
  const isOpen = controlled ?? internal;
  return (
    <div className={styles.expand}>
      <button
        type="button"
        className={styles.expandHeader}
        onClick={() => {
          const next = !isOpen;
          setInternal(next);
          onToggle?.(next);
        }}
        aria-expanded={isOpen}
      >
        <div className={styles.expandHeaderText}>
          <span className={styles.expandTitle}>{title}</span>
          {description && (
            <span className={styles.expandDesc}>{description}</span>
          )}
        </div>
        <span className={cx(styles.expandChevron, isOpen && styles.open)}>
          <ChevronDown />
        </span>
      </button>
      {isOpen && (
        <div className={styles.expandBody}>
          <div className={styles.expandBodyText}>{children}</div>
          {subContent && (
            <div className={styles.expandBodySub}>{subContent}</div>
          )}
        </div>
      )}
    </div>
  );
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
      {selected && (
        <span className={styles.cardSelectCheck}>
          <CheckCircle />
        </span>
      )}
    </button>
  );
}
