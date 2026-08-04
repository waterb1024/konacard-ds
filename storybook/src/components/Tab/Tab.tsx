import type { ReactNode } from "react";
import styles from "./Tab.module.css";

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

export interface TabItem<T = string> {
  id: T;
  label: ReactNode;
  disabled?: boolean;
}

/* ── Main Tab ─────────────────────────────────────── */
export interface MainTabsProps<T extends string = string> {
  items: TabItem<T>[];
  value: T;
  onChange: (id: T) => void;
  /** basic = Full 균등분할 (2·3개) / multi = 스크롤 가변폭 (4개+) */
  variant?: "basic" | "multi";
}

export function MainTabs<T extends string = string>({
  items,
  value,
  onChange,
  variant = "basic",
}: MainTabsProps<T>) {
  return (
    <div
      role="tablist"
      className={cx(styles.mainTabs, variant === "multi" && styles.multi)}
    >
      {items.map((it) => {
        const selected = it.id === value;
        return (
          <button
            key={it.id}
            role="tab"
            aria-selected={selected}
            disabled={it.disabled}
            type="button"
            className={cx(
              styles.mainTab,
              variant === "basic" && styles.basic,
              selected && styles.selected,
            )}
            onClick={() => onChange(it.id)}
          >
            {it.label}
          </button>
        );
      })}
    </div>
  );
}

/* ── Sub Tab (Pill) ───────────────────────────────── */
export interface SubTabsProps<T extends string = string> {
  items: TabItem<T>[];
  value: T;
  onChange: (id: T) => void;
}

export function SubTabs<T extends string = string>({
  items,
  value,
  onChange,
}: SubTabsProps<T>) {
  return (
    <div role="tablist" className={styles.subTabs}>
      {items.map((it) => {
        const selected = it.id === value;
        return (
          <button
            key={it.id}
            role="tab"
            aria-selected={selected}
            disabled={it.disabled}
            type="button"
            className={cx(styles.subTab, selected && styles.selected)}
            onClick={() => onChange(it.id)}
          >
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
