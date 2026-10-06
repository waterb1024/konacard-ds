import type { HTMLAttributes, ReactNode } from "react";
import { Checkbox } from "./Checkbox";
import styles from "./CheckboxLabel.module.css";

/**
 * KONACARD DS Checkbox label (약관 동의 행)
 * Figma: ${FIGMA_DS_FILE_KEY} (-AX-) / node 2004:5148 (controls/checkbox label, 구 control/agree)
 * spec: konacard-ds-components.md § 조합 컴포넌트 — control/agree
 *
 * Figma variants:
 *   - type:  title / 1depth / 2depth
 *   - state: true(checked) / false(unchecked)
 *
 * Figma 실측 (2026-10-06):
 *   - title:  check box circle·medium(28) + body/1-Bold #000, gap 12, padding 8 0 → h44
 *   - 1depth: check box circle·medium(28) + body/2-Regular #333 + 우측 화살표 (btn pl32 py16) → h44
 *   - 2depth: check box line·small(24)    + body/2-Regular #333 + 우측 화살표 (btn pl32 py12) → h40
 *   - 화살표: ic_arrow/ic_arrow_right_12 (8×12, stroke #333 1px) — Figma 원본 SVG path 그대로
 */

export type CheckboxLabelType = "title" | "1depth" | "2depth";

export interface CheckboxLabelProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  type?: CheckboxLabelType;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  children: ReactNode;
  /** 1depth·2depth 우측 화살표(약관 상세 보기) 클릭. 없으면 화살표는 장식으로만 렌더 */
  onArrowClick?: () => void;
}

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

function ArrowRight12() {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      aria-hidden
      focusable="false"
    >
      <path
        d="M2 11L7 6L2 1"
        stroke="var(--color-icon-secondary)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckboxLabel({
  type = "title",
  checked = false,
  onChange,
  children,
  onArrowClick,
  className,
  ...rest
}: CheckboxLabelProps) {
  const isTitle = type === "title";
  const toggle = () => onChange?.(!checked);

  const control = (
    <Checkbox
      style={type === "2depth" ? "line" : "circle"}
      size={type === "2depth" ? "small" : "medium"}
      checked={checked}
      onChange={onChange}
      aria-label={typeof children === "string" ? children : undefined}
    />
  );

  if (isTitle) {
    return (
      <div className={cx(styles.root, styles.txt, className)} {...rest}>
        {control}
        <span className={cx(styles.text, styles.title)} onClick={toggle}>
          {children}
        </span>
      </div>
    );
  }

  return (
    <div className={cx(styles.root, className)} {...rest}>
      <div className={styles.txt}>
        {control}
        <span className={cx(styles.text, styles.depth)} onClick={toggle}>
          {children}
        </span>
      </div>
      {onArrowClick ? (
        <button
          type="button"
          className={cx(styles.arrow, styles[`arrow-${type}`])}
          onClick={onArrowClick}
          aria-label="상세 보기"
        >
          <ArrowRight12 />
        </button>
      ) : (
        <span className={cx(styles.arrow, styles[`arrow-${type}`])}>
          <ArrowRight12 />
        </span>
      )}
    </div>
  );
}
