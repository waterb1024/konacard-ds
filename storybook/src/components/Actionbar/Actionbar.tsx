import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Actionbar.module.css";

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

/* ── action-bar/button (Icon Button 56×56) ───────────── */
export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  emphasized?: boolean;
  ariaLabel: string;
  children: ReactNode; // 24px icon
}

export function IconButton({
  emphasized,
  ariaLabel,
  children,
  className,
  type = "button",
  ...rest
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      className={cx(
        styles.iconButton,
        emphasized && styles["iconButton-brand"],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

/* ── 흔한 24px 아이콘 ─────────────────────────────── */
export function ChevronLeftIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 5L8 12L15 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BellIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 16V11a6 6 0 1112 0v5l1.5 2H4.5L6 16z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10 20a2 2 0 004 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SettingsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── action-bar/header ───────────────────────────── */
export type HeaderVariant = "main" | "sub-aos" | "sub-ios" | "scroll";

export interface HeaderProps {
  variant?: HeaderVariant;
  title?: string;
  /** Main 유형: 로고 표시 텍스트 (기본 K) */
  logoText?: string;
  /** Sub 유형: back 버튼 노출 */
  onBack?: () => void;
  /** 우측 icon action 슬롯 (배열로 여러 개 배치) */
  rightIcons?: ReactNode;
  /** 우측 text action */
  rightText?: string;
  rightTextEmphasized?: boolean;
  onRightText?: () => void;
  /** Scroll 유형: 스크롤됨 여부 */
  scrolled?: boolean;
}

export function Header({
  variant = "main",
  title,
  logoText = "K",
  onBack,
  rightIcons,
  rightText,
  rightTextEmphasized,
  onRightText,
  scrolled,
}: HeaderProps) {
  const hasBack = variant !== "main" && !!onBack;
  const hasRightActions = !!rightIcons || !!rightText;
  const needsIosSpacer =
    variant === "sub-ios" && hasBack && !hasRightActions;

  return (
    <div
      className={cx(
        styles.header,
        styles[`header-${variant}`],
        hasBack && styles.hasBack,
        variant === "scroll" && scrolled && styles.scrolled,
      )}
    >
      {hasBack && (
        <IconButton ariaLabel="뒤로가기" onClick={onBack}>
          <ChevronLeftIcon />
        </IconButton>
      )}
      <div className={styles["header-textArea"]}>
        {variant === "main" && (
          <span className={styles["header-logo"]} aria-hidden>
            {logoText}
          </span>
        )}
        {title && <span className={styles["header-title"]}>{title}</span>}
      </div>
      {needsIosSpacer && <span className={styles["header-rightSpacer"]} />}
      <div className={styles["header-actions"]}>
        {rightIcons}
        {rightText && (
          <button
            type="button"
            onClick={onRightText}
            className={cx(
              styles["header-textAction"],
              rightTextEmphasized && styles["header-textAction-brand"],
            )}
          >
            {rightText}
          </button>
        )}
      </div>
    </div>
  );
}

/* heading/headline(구 action-bar/headline)은 Component/Heading 으로 옮김 — ../Heading/Heading.tsx */
