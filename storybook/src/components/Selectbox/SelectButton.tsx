import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./SelectButton.module.css";

/**
 * KONACARD DS Select button (버튼형 선택지)
 * Figma: ${FIGMA_DS_FILE_KEY} (-AX-) / select/select button (11061:3729) · select/select button group (11061:3760)
 *
 * 2026-10-15 확정 — KeyScreen 에서 button/primary medium 을 나란히 놓아 쓰던 "하나 고르기" 패턴(70곳 남짓)을 컴포넌트로.
 *   - 높이 48 · padding 12 16 · radius 6 · 안쪽 1px · 글자 14/22 Bold
 *   - state=default  : #DDD 테두리 · #333 글자 (button gray-line-light)
 *     state=selected : #805AE9 테두리 · #805AE9 글자 (button brand-line)
 *   - status=false   : 비활성, 투명도 40% (체크박스·라디오·탭과 같은 규칙: true = 활성)
 *   - group: columns 2 · 3 · 4 — 폭을 같은 크기로 나누고 사이 8
 */

export interface SelectButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  /** Figma "state" — true 면 selected */
  selected?: boolean;
  /** Figma "status" — false 면 비활성 (기본 true) */
  status?: boolean;
  children: ReactNode;
}

const cx = (...n: Array<string | false | undefined>) => n.filter(Boolean).join(" ");

export function SelectButton({ selected = false, status = true, className, children, ...rest }: SelectButtonProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      disabled={!status}
      className={cx(styles.button, selected && styles.selected, className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export interface SelectButtonGroupProps {
  /** 선택지 글자 (2 · 3 · 4개 — Figma columns) */
  options: string[];
  /** 선택된 index */
  value?: number;
  onChange?: (index: number) => void;
  /** 비활성 선택지 index */
  disabledIndexes?: number[];
  "aria-label"?: string;
  className?: string;
}

export function SelectButtonGroup({ options, value, onChange, disabledIndexes = [], className, ...rest }: SelectButtonGroupProps) {
  return (
    <div role="radiogroup" className={cx(styles.group, className)} aria-label={rest["aria-label"]}>
      {options.map((o, i) => (
        <SelectButton key={o + i} selected={value === i} status={!disabledIndexes.includes(i)} onClick={() => onChange?.(i)}>
          {o}
        </SelectButton>
      ))}
    </div>
  );
}
