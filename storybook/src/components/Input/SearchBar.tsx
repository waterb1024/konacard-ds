import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import styles from "./SearchBar.module.css";

/**
 * KONACARD DS SearchBar
 * Figma: dHJa65PGtCQHq2n4qgL9Z9 (-AX-) / node 777:4492 (input/search)
 * spec: konacard-ds-components.md § 04_Forms > Search bar
 *
 * TextField 와 동일한 48h 폼 필드에 검색 아이콘이 우측 상시 노출.
 * Active/Complete/Error 상태에서 clear(×) 가 검색 아이콘 좌측에 추가로 노출.
 * Figma AX 는 size 4종 variant 를 유지하지만, 실제 프로덕트는 large(48h) 하나만
 * 사용하므로 코드는 state prop 만 노출 (Input.tsx 와 동일 방침).
 */

export type SearchBarState =
  | "default"
  | "focus"
  | "active"
  | "complete"
  | "inactive"
  | "error";

export interface SearchBarProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  /** Figma "state" 대응 — 코드는 "disabled" → "inactive" 로 이름만 다름 */
  state?: SearchBarState;
  /** clear(×) 버튼 노출. 기본은 state 기반 자동 (Active·Complete·Error) */
  showClear?: boolean;
  onClear?: () => void;
  onSearch?: (value: string) => void;
}

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

/* Figma ic_24/ic_search_24 원본 좌표:
 *   circle cx=11 cy=11 r=8 · stroke 1.5 · currentColor
 *   handle (17,17) → (21,21) · stroke 1.5 round · currentColor
 * (viewBox 24×24) */
function SearchIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      focusable="false"
    >
      <circle
        cx="11"
        cy="11"
        r="8"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M17 17 L21 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Figma input/icon type=icon_delete — Input.tsx 의 DeleteIcon 과 동일 spec
 * 24×24 · inset 12.5% 원(r=9) · 흰 × (stroke 1) */
function DeleteIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      focusable="false"
    >
      <circle cx="12" cy="12" r="9" fill="var(--color-icon-quinary)" />
      <path
        d="M8.5 8.5 L15.5 15.5 M15.5 8.5 L8.5 15.5"
        stroke="var(--color-icon-white)"
        strokeWidth="1"
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
      showClear ??
      (state === "active" || state === "error" || state === "complete");

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
            <DeleteIcon />
          </button>
        )}
        <span className={styles.icon} aria-hidden>
          <SearchIcon />
        </span>
      </div>
    );
  },
);
