import type { HTMLAttributes, ReactNode } from "react";
import { Switch } from "./Switch";
import styles from "./SwitchLabel.module.css";

/**
 * KONACARD DS Switch label (설정 항목 행: 타이틀 + 스위치 + 회색 안내 문구)
 * Figma: ${FIGMA_DS_FILE_KEY} (-AX-) / node 2143:5491 (controls/swtich label, 구 control/swtich_setting)
 * spec: konacard-ds-components.md § control/swtich_setting
 *
 * Figma variants:
 *   - size:  large / small
 *   - guide: boolean (아래 회색 안내 문구 표시) → prop `guide`, 문구는 `guideText`
 *   - 켜짐/꺼짐은 내장 controls/swtich 의 state 로 제어
 *
 * Figma 실측 (2026-10-07):
 *   - 폭 360 · 좌우 padding 20 · 하단 1px 구분선(line/solid light = divider/primary)
 *   - large: 타이틀 body/1-regular #000 (상하 16) + 스위치 large(50×28, 56×56 영역)
 *            안내 body/2-Regular #999 (하단 16) → 높이 95 (안내 없으면 57)
 *   - small: 타이틀 body/3-Regular #000 (상하 12) + 스위치 medium(42×24, 높이 44 영역)
 *            안내 body/3-Regular #999 (하단 12) → 높이 75 (안내 없으면 45)
 *   - 타이틀 ↔ 스위치 gap 16
 */

export type SwitchLabelSize = "large" | "small";

export interface SwitchLabelProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "title"> {
  size?: SwitchLabelSize;
  title: ReactNode;
  /** 아래 회색 안내 문구 표시 여부 — Figma boolean 속성 guide (기본 true) */
  guide?: boolean;
  /** 안내 문구 내용 */
  guideText?: ReactNode;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
}

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

export function SwitchLabel({
  size = "large",
  title,
  guide = true,
  guideText = "항목에 따른 안내 가이드를 보여줍니다.",
  checked = false,
  onChange,
  disabled,
  className,
  ...rest
}: SwitchLabelProps) {
  return (
    <div className={cx(styles.root, styles[size], className)} {...rest}>
      <div className={styles.row}>
        <span className={styles.title}>{title}</span>
        <span className={styles.action}>
          <Switch
            size={size === "large" ? "large" : "medium"}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            aria-label={typeof title === "string" ? title : undefined}
          />
        </span>
      </div>
      {guide && guideText && <p className={styles.guide}>{guideText}</p>}
      <hr className={styles.line} />
    </div>
  );
}
