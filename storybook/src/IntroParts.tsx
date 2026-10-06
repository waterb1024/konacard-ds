import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import styles from "./Introduction.module.css";

/**
 * Introduction 히어로의 떠 있는 장식 — vibe.monday.com Welcome 인터랙션 참고
 *   - 마우스 패럴랙스: 커서 위치(화면 중심 기준)를 따라 도형마다 다른 깊이(depth)로 이동
 *   - 스크롤 패럴랙스: 스크롤하면 도형마다 다른 속도(speed)로 위로 빠짐
 *   - 움직임은 매 프레임 목표값으로 부드럽게 보간(lerp) — 스프링 느낌
 *   - prefers-reduced-motion 이면 정지
 */

interface FloatItem {
  className: string;
  /** 마우스 이동 최대 거리(px) */
  depth: number;
  /** 스크롤 1px 당 위로 이동 비율 */
  speed: number;
  /** 기본 회전(deg) */
  rotate: number;
  children: ReactNode;
}

const ITEMS: FloatItem[] = [
  {
    className: styles.f1,
    depth: 14,
    speed: 0.55,
    rotate: -12,
    children: (
      <svg width="56" height="56" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill="#805AE9" />
        <path d="M9 16.5 L13.67 21 L23 12" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    className: styles.f2,
    depth: 8,
    speed: 0.37,
    rotate: 8,
    children: (
      <svg width="88" height="48" viewBox="0 0 88 48">
        <rect width="88" height="48" rx="24" fill="#805AE9" />
        <circle cx="64" cy="24" r="18" fill="#fff" />
      </svg>
    ),
  },
  {
    className: styles.f3,
    depth: 20,
    speed: 0.73,
    rotate: 0,
    children: (
      <svg width="48" height="48" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="15.5" fill="#fff" stroke="#DDDDDD" />
        <circle cx="16" cy="16" r="7.47" fill="#805AE9" />
      </svg>
    ),
  },
  {
    className: styles.f4,
    depth: 8,
    speed: 0.57,
    rotate: -6,
    children: (
      <>
        <span className={styles.chipOn}>혜택</span>
        <span className={styles.chipOff}>사용내역</span>
      </>
    ),
  },
  {
    className: styles.f5,
    depth: 10,
    speed: 0.42,
    rotate: 5,
    children: <span className={styles.toast}>저장되었습니다</span>,
  },
  {
    className: styles.f6,
    depth: 12,
    speed: 0.48,
    rotate: 14,
    children: (
      <svg width="44" height="44" viewBox="0 0 32 32">
        <rect x="1" y="1" width="30" height="30" rx="5.333" fill="#fff" stroke="#DDDDDD" strokeWidth="2" />
        <path d="M9.33 15.91 L13.78 20.19 L22.67 11.62" stroke="#DDDDDD" strokeWidth="2.67" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    className: styles.f7,
    depth: 16,
    speed: 0.62,
    rotate: -8,
    children: (
      <svg width="64" height="64" viewBox="0 0 80 80">
        <rect width="80" height="80" rx="16" fill="#805AE9" />
        <path d="M29.8272 39.5967L52.3809 17.8369H63.7863L41.1469 39.5967L65.3835 61.6831H53.635L29.8272 39.5967ZM20.7693 17.8369H29.8272V61.6831H20.7693V17.8369Z" fill="#fff" />
      </svg>
    ),
  },
];

export function FloatingObjects() {
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const apply = (i: number, x: number, y: number) => {
      const el = refs.current[i];
      if (el) el.style.transform = `translate(${x}px, ${y}px) rotate(${ITEMS[i].rotate}deg)`;
    };
    ITEMS.forEach((_, i) => apply(i, 0, 0));
    if (reduce) return;

    const mouse = { x: 0, y: 0 }; /* -1 ~ 1, 화면 중심 기준 */
    const cur = ITEMS.map(() => ({ x: 0, y: 0 }));
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const tick = () => {
      const scroll = window.scrollY;
      ITEMS.forEach((item, i) => {
        const tx = mouse.x * item.depth;
        const ty = mouse.y * item.depth * 1.45 - scroll * item.speed;
        cur[i].x += (tx - cur[i].x) * 0.12;
        cur[i].y += (ty - cur[i].y) * 0.12;
        apply(i, cur[i].x, cur[i].y);
      });
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={styles.floatingWrapper} aria-hidden="true">
      {ITEMS.map((item, i) => (
        <div
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className={`${styles.float} ${item.className}`}
        >
          {item.children}
        </div>
      ))}
    </div>
  );
}

/**
 * 화면에 들어올 때 아래에서 올라오며 나타나는 래퍼 — vibe.monday.com 섹션 등장 효과 참고
 * (opacity 0 · translateY(100px) → 제자리)
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add(styles.revealed);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.revealed);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${className ?? ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
