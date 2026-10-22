import { useState } from "react";
import type { ReactNode } from "react";
import { Label } from "../Label/Label";
import styles from "./Accordion.module.css";

/**
 * KONACARD DS Accordion
 * Figma: ${FIGMA_DS_FILE_KEY} (-AX-) / ❖ Accordion 페이지
 *   accordion        (묶음: header + body)  — size × type × state = 8
 *   accordion/header (202:2089, 구 list/expand)       — size × type × state = 8
 *   accordion/body   (607:4415, 구 list/expand-open)  — size × type = 4, 단독으로도 씀 (공지사항 등)
 *
 * AX 실측 (2026-10-22 사용자 정리 완료)
 *   header list    : 좌우 20 · 위아래 16 · 글자–화살표 16 · 제목–설명 large 8 / medium 4
 *                    제목 large 15/24 · medium 14/22 (closed Regular → open Bold) · 설명 12/18 #999
 *                    아래 선은 좌우 20 들여 그림, 펼치면 숨김 (본문이 바로 붙음)
 *   header inquiry : 안쪽 16 20 · 왼쪽–화살표 24 · 라벨–제목 12 · 라벨 = label small
 *                    (답변대기 gray-light / 답변완료 brand) · 아래 선은 전체 폭, 항상 보임
 *   화살표         : ic_arrow_down_14 / ic_arrow_up_14 (14×8, #333)
 *   body           : large 위 24 · 아래 32 / medium 20 · 24, 좌우 20 · 글 블록–상자 20
 *                    1depth large 15/24 · medium 14/22 #333 · 2depth 12/18 #999
 *                    글 블록·상자 안 간격 large 12 / medium 8
 *                    상자: 안쪽 16 · radius 8 · bg-color 본문엔 흰 상자 / bg-white 본문엔 회색 상자
 *                    아래 선 전체 폭
 *   묶음 규칙      : 본문 크기 = 제목 크기, 본문 바탕 = 제목 type (list → bg-color · inquiry → bg-white)
 *   본문의 숨겨진 버튼 자리는 KeyScreen 사용 미확인이라 구현하지 않음
 */

export type AccordionSize = "large" | "medium";
export type AccordionType = "list" | "inquiry";
export type AccordionBodyType = "bg-color" | "bg-white";

const cx = (...n: Array<string | false | undefined>) => n.filter(Boolean).join(" ");

/* Figma ic_arrow/ic_arrow_down_14 · ic_arrow_up_14 원본 SVG */
function Arrow({ up }: { up: boolean }) {
  return (
    <svg className={styles.arrow} width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden focusable="false">
      <path
        d={up ? "M2 6L7 1L12 6" : "M2 1L7 6L12 1"}
        stroke="var(--color-icon-secondary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Header ─────────────────────────────────────── */
export interface AccordionHeaderProps {
  size?: AccordionSize;
  type?: AccordionType;
  /** Figma "state" — true = open */
  open?: boolean;
  title: ReactNode;
  /** type=list 의 설명 (12/18 #999) */
  description?: ReactNode;
  /** type=inquiry 라벨 — true = 답변완료(brand) · false = 답변대기(gray-light) */
  answered?: boolean;
  onClick?: () => void;
  className?: string;
}

export function AccordionHeader({
  size = "large",
  type = "list",
  open = false,
  title,
  description,
  answered = false,
  onClick,
  className,
}: AccordionHeaderProps) {
  return (
    <button
      type="button"
      aria-expanded={open}
      onClick={onClick}
      className={cx(styles.header, styles[`h-${type}`], styles[`s-${size}`], open && styles.open, className)}
    >
      <span className={styles.headerContents}>
        {type === "inquiry" ? (
          <span className={styles.left}>
            <Label type="color" size="small" color={answered ? "brand" : "gray-light"}>
              {answered ? "답변완료" : "답변대기"}
            </Label>
            <span className={styles.title}>{title}</span>
          </span>
        ) : (
          <span className={styles.text}>
            <span className={styles.title}>{title}</span>
            {description && <span className={styles.description}>{description}</span>}
          </span>
        )}
        <Arrow up={open} />
      </span>
    </button>
  );
}

/* ── Body ───────────────────────────────────────── */
export interface AccordionBodyProps {
  size?: AccordionSize;
  /** Figma "type" — bg-color(회색 본문 · 흰 상자) / bg-white(흰 본문 · 회색 상자) */
  type?: AccordionBodyType;
  /** 1depth 본문 */
  children: ReactNode;
  /** 2depth 보조 문구 (12/18 #999) */
  caption?: ReactNode;
  /** 상자 안 1depth */
  boxContent?: ReactNode;
  /** 상자 안 2depth */
  boxCaption?: ReactNode;
  className?: string;
}

export function AccordionBody({
  size = "large",
  type = "bg-color",
  children,
  caption,
  boxContent,
  boxCaption,
  className,
}: AccordionBodyProps) {
  return (
    <div className={cx(styles.body, styles[`b-${type}`], styles[`s-${size}`], className)}>
      <div className={styles.block}>
        <div className={styles.depth1}>{children}</div>
        {caption && <div className={styles.depth2}>{caption}</div>}
      </div>
      {boxContent && (
        <div className={cx(styles.block, styles.box)}>
          <div className={styles.depth1}>{boxContent}</div>
          {boxCaption && <div className={styles.depth2}>{boxCaption}</div>}
        </div>
      )}
    </div>
  );
}

/* ── Accordion (header + body 묶음) ─────────────── */
export interface AccordionProps
  extends Omit<AccordionHeaderProps, "open" | "onClick" | "className">,
    Omit<AccordionBodyProps, "size" | "type" | "className"> {
  /** 제어형 열림 */
  open?: boolean;
  defaultOpen?: boolean;
  onToggle?: (next: boolean) => void;
  className?: string;
}

export function Accordion({
  size = "large",
  type = "list",
  open: controlled,
  defaultOpen = false,
  onToggle,
  title,
  description,
  answered,
  children,
  caption,
  boxContent,
  boxCaption,
  className,
}: AccordionProps) {
  const [internal, setInternal] = useState(defaultOpen);
  const isOpen = controlled ?? internal;
  return (
    <div className={cx(styles.accordion, className)}>
      <AccordionHeader
        size={size}
        type={type}
        open={isOpen}
        title={title}
        description={description}
        answered={answered}
        onClick={() => {
          setInternal(!isOpen);
          onToggle?.(!isOpen);
        }}
      />
      {isOpen && (
        <AccordionBody
          size={size}
          type={type === "inquiry" ? "bg-white" : "bg-color"}
          caption={caption}
          boxContent={boxContent}
          boxCaption={boxCaption}
        >
          {children}
        </AccordionBody>
      )}
    </div>
  );
}
