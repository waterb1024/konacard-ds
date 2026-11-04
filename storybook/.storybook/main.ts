import fs from "node:fs";
import path from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";
import { WIP_STORIES } from "./wip";

const ROOT = path.resolve(__dirname, "..");
const PLACEHOLDER_DIR = path.join(__dirname, "wip-placeholders");

// 배포 빌드에서만 미정리 메뉴를 잠근다 (로컬 dev 는 전부 보임)
const hideWip = process.argv.includes("build") && process.env.SHOW_WIP !== "1";

/** 미정리 메뉴 자리에 "준비 중" 스토리 파일을 만들어 그 경로들을 돌려준다 */
function writePlaceholders(): string[] {
  fs.rmSync(PLACEHOLDER_DIR, { recursive: true, force: true });
  fs.mkdirSync(PLACEHOLDER_DIR, { recursive: true });
  return WIP_STORIES.map((file) => {
    const src = fs.readFileSync(path.join(ROOT, file), "utf8");
    const title = src.match(/title:\s*"([^"]+)"/)?.[1];
    if (!title) throw new Error(`wip: ${file} 에서 title 을 찾지 못했습니다`);
    const out = path.join(PLACEHOLDER_DIR, path.basename(file).replace(".stories.tsx", ".wip.stories.tsx"));
    fs.writeFileSync(
      out,
      `// .storybook/main.ts 가 배포 빌드 때 만드는 파일 — 직접 고치지 말 것
export default { title: ${JSON.stringify(title)}, tags: ["wip", "!autodocs"] };

export const Wip = {
  name: "준비 중", // 메뉴 이름과 달라야 다른 메뉴처럼 펼침 화살표가 남음 (펼치기는 막혀 있음)
  render: () => (
    <div style={{ padding: 40, font: "var(--text-body-2-regular)", color: "var(--color-font-tertiary)" }}>
      Figma 정리가 끝나면 열리는 메뉴입니다.
    </div>
  ),
};
`,
    );
    return out;
  });
}

function storyFiles(): string[] {
  const wip = new Set(WIP_STORIES.map((f) => path.join(ROOT, f)));
  const found = fs
    .readdirSync(path.join(ROOT, "src"), { recursive: true, encoding: "utf8" })
    .map((f) => path.join(ROOT, "src", f))
    .filter((f) => /\.(mdx|stories\.(js|jsx|ts|tsx))$/.test(f) && !wip.has(f));
  return [...found, ...writePlaceholders()];
}

const config: StorybookConfig = {
  stories: hideWip ? storyFiles() : ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["./public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;
