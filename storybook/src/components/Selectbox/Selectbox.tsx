import { forwardRef, useId } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { InfoText } from "../Info/InfoText";
import styles from "./Selectbox.module.css";

/**
 * KONACARD DS Select (필드형 드롭다운)
 * Figma: ${FIGMA_DS_FILE_KEY} (-AX-) / node 41:550 (select/select box) · ❖ Select 페이지
 *
 * 2026-10-15 정리 (AX 실측):
 *   - 세트 이름 select → select/select box, style/case 삭제, State → state, boolean title · info 추가
 *   - 틀은 input 과 같음: title/title(12/18 Bold #333) → 칸 → info, 세로 8
 *   - 칸 48 · padding 12 16 · gap 16 · radius 6 · 안쪽 1px · 글자 body/1 15/24
 *   - state: default   #DDD · 안내 글자 #999 Regular · 아래 화살표
 *            active    #805AE9 · #805AE9 Bold · 위 화살표 (목록 열림)
 *            select    #DDD · #000 Bold (선택 완료)
 *            disabled  바탕 #F8F9FB · #999 Regular · 화살표 투명도 24%
 *            error     #FF364B · #FF364B Bold · info 는 icon-error
 *   - 화살표 ic_arrow_down_12 / ic_arrow_up_12 (12×8, #333) Figma 원본 SVG
 */

export type SelectboxState = "default" | "active" | "select" | "disabled" | "error";

export interface SelectboxProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "value" | "title"> {
  state?: SelectboxState;
  /** 선택된 값 (없으면 placeholder) */
  value?: string;
  placeholder?: string;
  /** Figma boolean "title" — 글자를 주면 보임 */
  title?: string;
  /** Figma boolean "info" — 글자를 주면 보임. error state 면 icon-error */
  info?: ReactNode;
}

const cx = (...names: Array<string | false | undefined>) => names.filter(Boolean).join(" ");

/* Figma ic_arrow/ic_arrow_down_12 원본 SVG */
function ChevronDown() {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden focusable="false">
      <path d="M0.999999 2L6 7L11 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Figma ic_arrow/ic_arrow_up_12 원본 SVG */
function ChevronUp() {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden focusable="false">
      <path d="M1 6L6 1L11 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const Selectbox = forwardRef<HTMLButtonElement, SelectboxProps>(function Selectbox(
  { state = "default", value, placeholder = "선택", title, info, className, disabled, type = "button", id, ...rest },
  ref,
) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const isDisabled = disabled ?? state === "disabled";
  const isOpen = state === "active";
  const text = value && value.length > 0 ? value : placeholder;
  return (
    <div className={cx(styles.field, className)}>
      {title && (
        <label htmlFor={fieldId} className={styles.title}>
          {title}
        </label>
      )}
      <button
        ref={ref}
        id={fieldId}
        type={type}
        className={cx(styles.wrap, styles[`state-${state}`])}
        disabled={isDisabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        {...rest}
      >
        <span className={styles.label}>{text}</span>
        <span className={styles.chevron} aria-hidden>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>
      {info && <InfoText type={state === "error" ? "icon-error" : "info"}>{info}</InfoText>}
    </div>
  );
});
