/**
 * 아직 정리가 끝나지 않은 메뉴 — 위키 "남은 컴포넌트"(pageId 440626074) 미완료 행과 같게 유지.
 *
 * 배포 빌드(storybook build)에서는 이 파일들을 빼고, 같은 메뉴 자리에 "준비 중" 안내만 넣는다.
 * 사이드바에서는 흐리게 보이고 눌리지 않는다. 실제 내용은 로컬(npm run storybook)에서만 보인다.
 * 배포 빌드에서도 전부 보고 싶으면 SHOW_WIP=1 npx storybook build.
 *
 * 메뉴 정리가 끝나면 여기서 그 줄을 지운다.
 */
export const WIP_STORIES = [
  // Component
  "src/components/List/Actionsheet.stories.tsx", // Action sheet
  "src/components/Badges/Badges.stories.tsx",
  "src/components/Banner/Banner.stories.tsx",
  "src/components/Box/Box.stories.tsx",
  "src/components/Chips/Chips.stories.tsx",
  "src/components/Actionbar/Actionbar.stories.tsx", // Header
  "src/components/Icon/Icon.stories.tsx",
  "src/components/Indicator/Indicator.stories.tsx",
  "src/components/Info/Info.stories.tsx", // Info / Text info
  "src/components/List/List.stories.tsx",
  "src/components/Popup/Popup.stories.tsx",
  "src/components/List/CardSelect.stories.tsx", // Select / Card select
  "src/components/Tab/Tab.stories.tsx", // Tabs
  // Foundation
  "src/foundation/Iconography.stories.tsx",
];
