import type { Meta, StoryObj } from "@storybook/react";
import styles from "./foundation.module.css";

const meta: Meta = {
  title: "Foundation/Typography",
  parameters: {
    docs: {
      description: {
        component:
          "konacard-ds-foundation.md § Typography. Pretendard 단일 · Regular(400)/Bold(700) 2종만. " +
          "letterSpacing = size × -0.02.",
      },
    },
    layout: "fullscreen",
  },
};
export default meta;
type Story = StoryObj;

interface TextStyle {
  name: string;
  size: number;
  lh: number;
  ls: number;
  weight: "regular" | "bold";
  usage: string;
  cssVar?: string;
}

const styles_scale: { token: string; size: number; lh: number; ls: number }[] = [
  { token: "font/size/display/medium", size: 32, lh: 40, ls: -0.64 },
  { token: "font/size/2xlarge", size: 24, lh: 32, ls: -0.48 },
  { token: "font/size/xlarge", size: 20, lh: 28, ls: -0.4 },
  { token: "font/size/large", size: 18, lh: 26, ls: -0.36 },
  { token: "font/size/medium", size: 15, lh: 24, ls: -0.3 },
  { token: "font/size/small", size: 14, lh: 22, ls: -0.28 },
  { token: "font/size/xsmall", size: 12, lh: 18, ls: -0.24 },
  { token: "font/size/2xsmall", size: 11, lh: 16, ls: -0.22 },
];

const textStyles: TextStyle[] = [
  { name: "display/3-bold", size: 32, lh: 40, ls: -0.64, weight: "bold", usage: "대형 숫자·금액 표시" },
  { name: "heading/1-bold", size: 24, lh: 32, ls: -0.48, weight: "bold", usage: "타이틀, 서비스 중심 문구", cssVar: "--text-heading-1-bold" },
  { name: "heading/2-bold", size: 20, lh: 28, ls: -0.4, weight: "bold", usage: "메뉴 항목, 서브 헤드, 카드명", cssVar: "--text-heading-2-bold" },
  { name: "heading/3-bold", size: 18, lh: 26, ls: -0.36, weight: "bold", usage: "본문 내 중간 타이틀", cssVar: "--text-heading-3-bold" },
  { name: "body/1-Bold", size: 15, lh: 24, ls: -0.3, weight: "bold", usage: "리스트 항목 강조, 버튼 레이블", cssVar: "--text-body-1-bold" },
  { name: "body/1-regular", size: 15, lh: 24, ls: -0.3, weight: "regular", usage: "기본 본문, 리스트 항목", cssVar: "--text-body-1-regular" },
  { name: "body/2-bold", size: 14, lh: 22, ls: -0.28, weight: "bold", usage: "정보 레이블, 소제목", cssVar: "--text-body-2-bold" },
  { name: "body/2-Regular", size: 14, lh: 22, ls: -0.28, weight: "regular", usage: "보조 정보", cssVar: "--text-body-2-regular" },
  { name: "body/3-Bold", size: 12, lh: 18, ls: -0.24, weight: "bold", usage: "배지, 캡션 강조", cssVar: "--text-body-3-bold" },
  { name: "body/3-Regular", size: 12, lh: 18, ls: -0.24, weight: "regular", usage: "캡션, 날짜", cssVar: "--text-body-3-regular" },
  { name: "body/4-bold", size: 11, lh: 16, ls: -0.22, weight: "bold", usage: "최소 크기 강조" },
  { name: "body/4-regular", size: 11, lh: 16, ls: -0.22, weight: "regular", usage: "법적 고지 등" },
  { name: "button/large-bold", size: 15, lh: 24, ls: -0.3, weight: "bold", usage: "대형 버튼 (h56)" },
  { name: "button/medium-bold", size: 14, lh: 22, ls: -0.28, weight: "bold", usage: "중형 버튼 (h44)" },
  { name: "button/small-bold", size: 12, lh: 18, ls: -0.24, weight: "bold", usage: "소형 버튼 (h32)" },
];

export const Overview: Story = {
  render: () => (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>Typography</h1>
      <p className={styles.intro}>
        Pretendard 단일 · Regular(400) / Bold(700) 2 weight만 사용. letterSpacing = size × -0.02.
        모든 텍스트 노드는 DS 텍스트 스타일 키로 설정 — 직접 fontSize/lineHeight 지정 금지.
      </p>

      <div className={styles.note}>
        <strong>OS 매핑</strong> — Web/Figma: Pretendard · Android: Noto Sans KR + Roboto ·
        iOS: Apple SD Gothic Neo + San Francisco
      </div>

      <h2 className={styles.h2}>Size Scale (8단계)</h2>
      <div className={styles.gridSingleCol}>
        {styles_scale.map((s) => (
          <div key={s.token} className={styles.row}>
            <span className={styles.rowLabel}>{s.token}</span>
            <span className={styles.rowValue}>
              {s.size} / {s.lh} / {s.ls}
            </span>
            <span
              className={styles.rowSample}
              style={{
                fontFamily: "var(--font-family-body)",
                fontSize: s.size,
                lineHeight: `${s.lh}px`,
                letterSpacing: `${s.ls}px`,
              }}
            >
              가나다라 · The quick brown fox · 123,450원
            </span>
          </div>
        ))}
      </div>

      <h2 className={styles.h2}>Text Styles</h2>
      <div className={styles.gridSingleCol}>
        {textStyles.map((t) => (
          <div key={t.name} className={styles.row}>
            <span className={styles.rowLabel}>{t.name}</span>
            <span className={styles.rowValue}>
              {t.size}/{t.lh}/{t.ls} · {t.weight}
            </span>
            <span
              className={styles.rowSample}
              style={{
                fontFamily: "var(--font-family-body)",
                fontSize: t.size,
                lineHeight: `${t.lh}px`,
                letterSpacing: `${t.ls}px`,
                fontWeight: t.weight === "bold" ? 700 : 400,
              }}
              title={t.cssVar}
            >
              {t.usage}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.note}>
        <strong>사용 규칙</strong>
        <br />
        • 모든 텍스트 노드는 DS 텍스트 스타일 키로 설정 (Figma: importStyleByKeyAsync)
        <br />
        • Roboto·Apple SD Gothic Neo 잔재는 반드시 DS 스타일로 교체
        <br />
        • weight는 Regular(400) / Bold(700) 2종만 — Medium·SemiBold 금지
        <br />
        • 기본 본문 = body/1-regular (15px), 캡션·보조는 body/2-regular (14px) 이하로
      </div>
    </div>
  ),
};
