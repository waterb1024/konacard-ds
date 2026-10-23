import type { Meta, StoryObj } from "@storybook/react";
import styles from "./foundation.module.css";

/**
 * Foundation / Typography — Figma ${FIGMA_DS_FILE_KEY} (-AX-) Typography 가이드 (node 296:3051) 그대로
 *   Typeface  : OS 기본 서체 매핑 + Pretendard (웹 · 디자인 컨텐츠)
 *   Font Size : heading 1~3 · body 1~4 (bold / regular) + button large · medium · small = 17종
 *   값·스타일 이름은 Figma 텍스트 스타일, 설명 문구는 가이드 Example 열 그대로 (2026-10-22 대조)
 */

const meta: Meta = {
  title: "Foundation/Typography",
  parameters: {
    docs: {
      description: {
        component:
          "Figma Typography 가이드(296:3051) 기준. 서체는 정보의 목적과 기능에 따라 최적의 서체를 적용하며, " +
          "특수한 경우를 제외하고 시스템(OS) 최적화 폰트를 적용합니다. 가이드 이외의 폰트 사용은 지양합니다.",
      },
    },
    layout: "fullscreen",
  },
};
export default meta;
type Story = StoryObj;

/* ── Typeface — 가이드 배너 문구 그대로 ───────── */
const typefaces: { platform: string; font: string }[] = [
  { platform: "안드로이드 국문", font: "노토산스" },
  { platform: "Android English & Number", font: "Roboto" },
  { platform: "아이오에스 국문", font: "애플네오고딕" },
  { platform: "iOS English & Number", font: "San Francisco" },
  { platform: "웹과 디자인 컨텐츠 전반에 적용", font: "Pretendard" },
];

/* ── Font Size — 가이드 표 17종 (Token · Value · Example) ── */
interface TextStyle {
  /** Figma 텍스트 스타일 이름 (대소문자 원본 그대로) */
  name: string;
  /** 가이드 Value 열 */
  value: string;
  size: number;
  lh: number;
  ls: number;
  weight: 400 | 700;
  /** 가이드 Example 열 */
  usage: string;
  cssVar: string;
}

const groups: { title: string; items: TextStyle[] }[] = [
  {
    title: "Heading",
    items: [
      { name: "heading/1-bold", value: "24", size: 24, lh: 32, ls: -0.48, weight: 700, usage: "타이틀 및 서비스 중요 문구에 사용합니다.", cssVar: "--text-heading-1-bold" },
      { name: "heading/1-regular", value: "24", size: 24, lh: 32, ls: -0.48, weight: 400, usage: "서비스 중요 문구에 사용합니다.", cssVar: "--text-heading-1-regular" },
      { name: "heading/2-bold", value: "20", size: 20, lh: 28, ls: -0.4, weight: 700, usage: "버텀 팝업 타이틀과 서비스 중요 문구에 사용합니다.", cssVar: "--text-heading-2-bold" },
      { name: "heading/2-regular", value: "20", size: 20, lh: 28, ls: -0.4, weight: 400, usage: "컨텐츠 타이틀 및 서비스 중요 문구에 사용합니다.", cssVar: "--text-heading-2-regular" },
      { name: "heading/3-bold", value: "18", size: 18, lh: 26, ls: -0.36, weight: 700, usage: "본문 내 중요 문구와 타이틀 영역에 사용합니다.", cssVar: "--text-heading-3-bold" },
      { name: "heading/3-regular", value: "18", size: 18, lh: 26, ls: -0.36, weight: 400, usage: "본문 내 시각적으로 중요 정보를 전달할 때 사용합니다.", cssVar: "--text-heading-3-regular" },
    ],
  },
  {
    title: "Body",
    items: [
      { name: "body/1-Bold", value: "15 (base size)", size: 15, lh: 24, ls: -0.3, weight: 700, usage: "앱 전반에 사용되며, 본문 내 강조되는 문구에 사용합니다.", cssVar: "--text-body-1-bold" },
      { name: "body/1-regular", value: "15 (base size)", size: 15, lh: 24, ls: -0.3, weight: 400, usage: "시스템 기본 폰트로 앱 전반에 적극적으로 사용합니다.", cssVar: "--text-body-1-regular" },
      { name: "body/2-bold", value: "14 (base size)", size: 14, lh: 22, ls: -0.28, weight: 700, usage: "15 사이즈와 더불어 앱 전반에 기본 시스템 폰트로 사용합니다.", cssVar: "--text-body-2-bold" },
      { name: "body/2-Regular", value: "14 (base size)", size: 14, lh: 22, ls: -0.28, weight: 400, usage: "15 사이즈와 더불어 앱 전반에 기본 시스템 폰트로 사용합니다.", cssVar: "--text-body-2-regular" },
      { name: "body/3-Bold", value: "12", size: 12, lh: 18, ls: -0.24, weight: 700, usage: "서비스 이용 안내 및 가이드 영역에서 적용되는 최소 폰트이지만, 적극적인 사용을 지양합니다.", cssVar: "--text-body-3-bold" },
      { name: "body/3-Regular", value: "12", size: 12, lh: 18, ls: -0.24, weight: 400, usage: "서비스 이용 안내 및 가이드 영역에서 적용되는 최소 폰트이지만, 적극적인 사용을 지양합니다.", cssVar: "--text-body-3-regular" },
      { name: "body/4-Bold", value: "11", size: 11, lh: 16, ls: -0.22, weight: 700, usage: "특수한 경우 뱃지와 태그에 사용할 수는 있으나 사용을 권장하지 않습니다.", cssVar: "--text-body-4-bold" },
      { name: "body/4-Regular", value: "11", size: 11, lh: 16, ls: -0.22, weight: 400, usage: "특수한 경우 뱃지와 태그에 사용할 수는 있으나 사용을 권장하지 않습니다.", cssVar: "--text-body-4-regular" },
    ],
  },
  {
    title: "Button",
    items: [
      { name: "button/large-bold", value: "15", size: 15, lh: 24, ls: -0.3, weight: 700, usage: "페이지를 컨트롤하는 중요 액션 버튼에 적용합니다.", cssVar: "--text-button-large" },
      { name: "button/medium-bold", value: "14", size: 14, lh: 22, ls: -0.28, weight: 700, usage: "본문 내 중요 액션 버튼에 적용합니다.", cssVar: "--text-button-medium" },
      { name: "button/small-bold", value: "12", size: 12, lh: 18, ls: -0.24, weight: 700, usage: "설명 및 가이드에 따른 액션 버튼에 적용합니다.", cssVar: "--text-button-small" },
    ],
  },
];

export const Overview: Story = {
  render: () => (
    <div className={styles.wrap}>
      <h1 className={styles.h1}>Typography</h1>
      <p className={styles.intro}>
        서체 또한 사용자와 커뮤니케이션하는 매우 중요 요소이므로, 정보의 목적과 기능에 따라 최적의 서체를 적용합니다.
        <br />
        이를 위해 특수한 경우를 제외하고 시스템(OS) 최적화 폰트를 적용하도록 합니다.
      </p>

      <h2 className={styles.h2}>Typeface</h2>
      <p className={styles.intro}>
        개발환경에 최적화 되도록 OS 기본 서체를 사용합니다. (단, 디자인 파일 및 가이드는 코나아이 지정 서체인 프리텐다드 폰트로
        제작/공유합니다.)
      </p>
      <div className={styles.gridSingleCol}>
        {typefaces.map((t) => (
          <div key={t.platform} className={styles.row}>
            <span className={styles.rowLabel}>{t.platform}</span>
            <span className={styles.rowSample} style={{ font: "var(--text-heading-2-bold)" }}>
              {t.font}
            </span>
          </div>
        ))}
      </div>

      <h2 className={styles.h2}>Font Size</h2>
      <p className={styles.intro}>
        일관된 브랜드 경험과 사용성을 유지하기 위해 아래 제시된 가이드 이외의 폰트 사용을 지양합니다.
      </p>
      {groups.map((g) => (
        <div key={g.title}>
          <h3 className={styles.h2}>{g.title}</h3>
          <div className={styles.gridSingleCol}>
            {g.items.map((t) => (
              <div key={t.name} className={styles.row}>
                <span className={styles.rowLabel} style={{ font: `var(${t.cssVar})`, letterSpacing: `${t.ls}px` }}>
                  {t.name}
                </span>
                <span className={styles.rowValue}>
                  {t.value}
                  <br />
                  {t.size}/{t.lh} · {t.ls} · {t.weight === 700 ? "Bold" : "Regular"}
                </span>
                <span
                  className={styles.rowSample}
                  style={{ font: `var(${t.cssVar})`, letterSpacing: `${t.ls}px` }}
                  title={t.cssVar}
                >
                  {t.usage}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
