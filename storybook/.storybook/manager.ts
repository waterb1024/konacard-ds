import { createElement } from "react";
import { addons } from "@storybook/manager-api";
import { konacardTheme } from "./konacardTheme";

addons.setConfig({
  theme: konacardTheme,
  sidebar: {
    /* vibe.monday.com 처럼 FOUNDATION·COMPONENT 대문자 머리말 대신 접히는 그룹으로 */
    showRoots: false,
    /* 배포 빌드의 미정리 메뉴(.storybook/wip.ts) — 흐리게 + "준비 중", 클릭은 manager-head.html 에서 막음 */
    renderLabel: (item) => {
      const wip = "tags" in item && item.tags?.includes("wip");
      if (!wip) return item.name;
      const title = "title" in item ? String(item.title).split("/").pop() : item.name;
      return createElement(
        "span",
        { "data-wip": "", className: "kona-wip" },
        title,
        createElement("span", { className: "kona-wip-badge" }, "준비 중"),
      );
    },
  },
});
