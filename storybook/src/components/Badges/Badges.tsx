import type { CSSProperties } from "react";
import styles from "./Badges.module.css";

export type BadgeType = "dot" | "new" | "count";

export interface BadgeProps {
  type?: BadgeType;
  /** `type="count"` 에서만 사용. 문자열/숫자 모두 허용. 예: 5 · "99+" · "999+". */
  count?: number | string;
  className?: string;
  style?: CSSProperties;
}

const cx = (...names: Array<string | false | undefined>) =>
  names.filter(Boolean).join(" ");

export function Badge({
  type = "dot",
  count,
  className,
  style,
}: BadgeProps) {
  if (type === "dot") {
    return (
      <svg
        className={cx(styles.iconDot, className)}
        style={style}
        width="4"
        height="4"
        viewBox="0 0 4 4"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="2" cy="2" r="2" fill="url(#kc-badge-dot-gradient)" />
        <defs>
          <linearGradient
            id="kc-badge-dot-gradient"
            x1="1.5"
            y1="1.15"
            x2="3.6"
            y2="3.35"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF364B" />
            <stop offset="1" stopColor="#FF1493" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (type === "new") {
    return (
      <svg
        className={cx(styles.iconNew, className)}
        style={style}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M0 10C0 4.47715 4.47715 0 10 0V0C15.5228 0 20 4.47715 20 10V10C20 15.5228 15.5228 20 10 20V20C4.47715 20 0 15.5228 0 10V10Z"
          fill="url(#kc-badge-new-gradient)"
        />
        <path
          d="M7 13V7.24142C7 7.15233 7.10771 7.10771 7.17071 7.17071L12.8293 12.8293C12.8923 12.8923 13 12.8477 13 12.7586V7"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id="kc-badge-new-gradient"
            x1="7.5"
            y1="5.75"
            x2="18"
            y2="16.75"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF364B" />
            <stop offset="1" stopColor="#FF1493" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  const label = count ?? 0;
  return (
    <span className={cx(styles.pill, className)} style={style}>
      <span className={styles.numText}>{label}</span>
    </span>
  );
}
