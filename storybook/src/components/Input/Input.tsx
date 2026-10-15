import { Fragment, forwardRef, useId, useState } from "react";
import type { ChangeEvent, FormEvent, InputHTMLAttributes, KeyboardEvent, ReactNode } from "react";
import { Button } from "../Button/Button";
import { InfoText } from "../Info/InfoText";
import styles from "./Input.module.css";

/**
 * KONACARD DS Input
 * Figma: ${FIGMA_DS_FILE_KEY} (-AX-) / node 41:505 (input) · ❖ Input 페이지
 *
 * 2026-10-15 사용자 정리: input/text field · search bar · text-area · button · card-number · id 를
 * 한 세트로 합침 → style/case 6종 × state 6종 = 36 variant + boolean title · info.
 *
 * AX 실측 (공통)
 *   - 틀: 위에서부터 title/title(Input · Medium · Black, 12/18 Bold #333) → 입력칸 → info, 사이 8
 *   - 입력칸: 높이 48 · padding 12 16 · gap 16 · radius 6 · 안쪽 1px 테두리
 *   - 글자 body/1 15/24
 *   - state: default   테두리 #DDD · 안내 글자 #999 Regular
 *            focus     테두리 #805AE9 · 안내 글자 #999 Regular
 *            active    테두리 #805AE9 · 입력값 #805AE9 Bold · 지우기(×)
 *            complete  테두리 #DDD · 입력값 #000 Bold · 지우기(×)
 *            disabled  바탕 #F8F9FB · 테두리 #DDD · 글자 #999 Regular
 *            error     테두리 #FF364B · 입력값 #FF364B Bold · 지우기(×) · info 는 icon-error
 *   - 지우기(×)는 text field · search bar · button 에만 (card-number · 주민번호 · text area 는 없음)
 *   - text area 만 complete · error 글자가 Regular (Figma 그대로)
 *   - 인증 타이머: boolean timer (기본 꺼짐) — text field 에만. "3:00" 14/22 Regular #FF364B + 12 + 새로고침(icon_refresh)
 *     순서는 글자 → 지우기(×) → 타이머 (사이 16)
 */

export type InputVariant =
  | "text-field"
  | "search-bar"
  | "text-area"
  | "button"
  | "card-number"
  | "registration-number";

export type InputState = "default" | "focus" | "active" | "complete" | "disabled" | "error";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, "size"> {
  /** Figma "style/case" */
  variant?: InputVariant;
  /** Figma "state" */
  state?: InputState;
  /** Figma boolean "title" — 글자를 주면 보임 */
  title?: string;
  /** Figma boolean "info" — 글자를 주면 보임. error state 면 icon-error */
  info?: ReactNode;
  /** variant=button 의 버튼 글자 */
  buttonLabel?: string;
  onButtonClick?: () => void;
  onClear?: () => void;
  /** Figma boolean "timer" — variant=text-field 에만. 남은 시간 글자를 주면 보임 (예: "3:00") */
  timer?: string;
  onTimerRefresh?: () => void;
  /** variant=text-area 글자 수 제한 (오른쪽 아래 0/500) */
  maxLength?: number;
  /** variant=text-area 글자 영역 높이(px). 기본 64 → 입력칸 124 (Figma) */
  areaHeight?: number;
  className?: string;
}

const cx = (...n: Array<string | false | undefined>) => n.filter(Boolean).join(" ");

/* Figma input/icon type=icon_delete · size=large 원본 SVG */
function DeleteIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
      <circle cx="12" cy="12" r="9" fill="var(--color-icon-quinary)" />
      <path d="M9 9L15 15" stroke="var(--color-icon-white)" strokeLinecap="round" />
      <path d="M15 9L9 15" stroke="var(--color-icon-white)" strokeLinecap="round" />
    </svg>
  );
}

/* Figma ic_24/ic_search_24 원본 SVG */
function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
      <circle cx="11" cy="11" r="8" stroke="var(--color-icon-secondary)" strokeWidth="1.5" />
      <path d="M17 17L21 21" stroke="var(--color-icon-secondary)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* Figma input/icon type=icon_refresh · size=large 원본 SVG */
function RefreshIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
      <circle cx="12" cy="12" r="12" fill="var(--color-icon-quinary)" />
      <path
        d="M14.6046 16.1708C14.0199 16.5371 13.3483 16.7854 12.6189 16.8784C9.92613 17.2217 7.46489 15.3171 7.1216 12.6243C6.7783 9.93151 8.68294 7.47027 11.3757 7.12697C14.0685 6.78367 16.5298 8.68831 16.8731 11.3811L17.0663 12.5628"
        stroke="var(--color-icon-white)"
        strokeLinecap="round"
      />
      <path
        d="M18.9884 10.6196L17.502 13.243C17.3833 13.4525 17.1056 13.5065 16.9171 13.3569L14.4028 11.3617"
        stroke="var(--color-icon-white)"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Figma ic_24/ic_input_dash 원본 SVG */
function Dash() {
  return (
    <svg className={styles.dash} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
      <rect x="8" y="11" width="8" height="1" fill="var(--color-icon-secondary)" />
    </svg>
  );
}

const CLEARABLE: InputVariant[] = ["text-field", "search-bar", "button"];

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    variant = "text-field",
    state = "default",
    title,
    info,
    buttonLabel = "Button",
    onButtonClick,
    onClear,
    timer,
    onTimerRefresh,
    maxLength = 500,
    areaHeight = 64,
    className,
    id,
    disabled,
    onChange,
    value,
    defaultValue,
    placeholder,
    ...rest
  },
  ref,
) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const isDisabled = disabled ?? state === "disabled";
  const showClear = CLEARABLE.includes(variant) && ["active", "complete", "error"].includes(state);

  // text area 글자 수 표시용
  const [count, setCount] = useState(String(value ?? defaultValue ?? "").length);
  const handleChange = (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    setCount(e.target.value.length);
    onChange?.(e);
  };

  // card-number: 4칸이지만 한 칸처럼 — 4자리가 차면 다음 칸, 빈 칸에서 백스페이스면 이전 칸
  const cells = (el: HTMLInputElement) => [...(el.closest(`.${styles.cardNumber}`)?.querySelectorAll("input") ?? [])];
  const moveCard = (e: FormEvent<HTMLInputElement>) => {
    const el = e.currentTarget;
    if (el.value.length >= 4) cells(el)[cells(el).indexOf(el) + 1]?.focus();
  };
  const backCard = (e: KeyboardEvent<HTMLInputElement>) => {
    const el = e.currentTarget;
    if (e.key === "Backspace" && el.value === "") cells(el)[cells(el).indexOf(el) - 1]?.focus();
  };

  const box = (children: ReactNode, extra?: string) => (
    <div className={cx(styles.box, extra)}>{children}</div>
  );
  const field = (props: InputHTMLAttributes<HTMLInputElement>, center?: boolean) => (
    <input
      className={cx(styles.control, center && styles.center)}
      disabled={isDisabled}
      onChange={handleChange}
      {...props}
    />
  );

  let body: ReactNode;
  switch (variant) {
    case "text-area":
      body = box(
        <>
          <textarea
            id={inputId}
            className={cx(styles.control, styles.textarea)}
            style={{ height: areaHeight }}
            maxLength={maxLength}
            disabled={isDisabled}
            placeholder={placeholder}
            value={value as string | undefined}
            defaultValue={defaultValue as string | undefined}
            onChange={handleChange}
            {...(rest as InputHTMLAttributes<HTMLTextAreaElement>)}
          />
          <span className={styles.counter}>
            {count}/{maxLength}
          </span>
        </>,
        styles.areaBox,
      );
      break;
    case "card-number":
      body = box(
        <div className={styles.cardNumber}>
          {[0, 1, 2, 3].map((i) => (
            <Fragment key={i}>
              {i > 0 && <Dash />}
              {field({ id: i === 0 ? inputId : undefined, inputMode: "numeric", maxLength: 4, placeholder: "0000", onInput: moveCard, onKeyDown: backCard, defaultValue: String(defaultValue ?? "").replace(/\D/g, "").slice(i * 4, i * 4 + 4) || undefined, "aria-label": `카드번호 ${i + 1}번째 4자리` }, true)}
            </Fragment>
          ))}
        </div>,
      );
      break;
    case "registration-number":
      body = (
        <div className={styles.row}>
          {box(field({ id: inputId, ref, inputMode: "numeric", maxLength: 6, placeholder, value, defaultValue, "aria-label": "주민등록번호 앞 6자리", ...rest } as InputHTMLAttributes<HTMLInputElement>))}
          <Dash />
          <div className={styles.back}>
            <div className={styles.backBox}>
              <input className={cx(styles.control, styles.center)} inputMode="numeric" maxLength={1} disabled={isDisabled} aria-label="주민등록번호 뒤 첫자리" />
            </div>
            <span className={styles.dots} aria-hidden>
              {Array.from({ length: 6 }, (_, i) => <i key={i} />)}
            </span>
          </div>
        </div>
      );
      break;
    default: {
      const control = field({ id: inputId, ref, placeholder, value, defaultValue, ...rest } as InputHTMLAttributes<HTMLInputElement>);
      const inner = box(
        <>
          {control}
          {showClear && (
            <button type="button" aria-label="지우기" className={cx(styles.icon, styles.clear)} onClick={onClear}>
              <DeleteIcon />
            </button>
          )}
          {variant === "text-field" && timer && (
            <span className={styles.timer}>
              <span className={styles.timerText}>{timer}</span>
              <button type="button" aria-label="인증 시간 다시 받기" className={styles.icon} onClick={onTimerRefresh}>
                <RefreshIcon />
              </button>
            </span>
          )}
          {variant === "search-bar" && (
            <span className={styles.icon}>
              <SearchIcon />
            </span>
          )}
        </>,
      );
      body =
        variant === "button" ? (
          <div className={styles.withButton}>
            {inner}
            <Button size="medium" color="Brand" onClick={onButtonClick}>
              {buttonLabel}
            </Button>
          </div>
        ) : (
          inner
        );
    }
  }

  return (
    <div className={cx(styles.input, styles[`state-${state}`], styles[`variant-${variant}`], className)}>
      {title && (
        <label htmlFor={inputId} className={styles.title}>
          {title}
        </label>
      )}
      {body}
      {info && <InfoText type={state === "error" ? "icon-error" : "info"}>{info}</InfoText>}
    </div>
  );
});
