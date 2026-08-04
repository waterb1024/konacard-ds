import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import styles from "./SearchBar.module.css";

export type SearchBarState =
  | "default"
  | "focus"
  | "active"
  | "complete"
  | "inactive"
  | "error";

export interface SearchBarProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  state?: SearchBarState;
  showClear?: boolean;
  onClear?: () => void;
  onSearch?: (value: string) => void;
}

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

/* 20×20 search glyph — 인라인 SVG */
function SearchIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      width="20"
      height="20"
      fill="none"
      aria-hidden
    >
      <circle
        cx="9"
        cy="9"
        r="6"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M14 14L17 17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  function SearchBar(
    {
      state = "default",
      showClear,
      onClear,
      onSearch,
      className,
      disabled,
      onKeyDown,
      placeholder = "검색어를 입력하세요",
      ...rest
    },
    ref,
  ) {
    const effectiveDisabled = disabled ?? state === "inactive";
    const shouldShowClear =
      showClear ?? (state === "active" || state === "error");

    return (
      <div className={cx(styles.wrap, styles[`state-${state}`], className)}>
        <input
          ref={ref}
          className={styles.input}
          disabled={effectiveDisabled}
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (e.key === "Enter" && onSearch) {
              onSearch((e.target as HTMLInputElement).value);
            }
            onKeyDown?.(e);
          }}
          {...rest}
        />
        {shouldShowClear && (
          <button
            type="button"
            aria-label="지우기"
            className={styles.clear}
            onClick={onClear}
          >
            ×
          </button>
        )}
        <span className={styles.icon}>
          <SearchIcon />
        </span>
      </div>
    );
  },
);
