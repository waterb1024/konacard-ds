import { addons } from "@storybook/manager-api";
import { konacardTheme } from "./konacardTheme";

addons.setConfig({
  theme: konacardTheme,
  sidebar: {
    /* vibe.monday.com 처럼 FOUNDATION·COMPONENT 대문자 머리말 대신 접히는 그룹으로 */
    showRoots: false,
  },
});
