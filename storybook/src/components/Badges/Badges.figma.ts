// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=3426-10001
// source=storybook/src/components/Badges/Badges.tsx
// component=Badge
import figma from 'figma'

const instance = figma.selectedInstance

// Figma variant `type` (4종) → 코드 `type` (3종). num-min / num-max 는 사이즈 예시일 뿐,
// 코드에서는 하나의 `count` 타입으로 통합되어 텍스트 길이에 따라 동적 확장한다.
const type = instance.getEnum('type', {
  dot: 'dot',
  new: 'new',
  'num-min': 'count',
  'num-max': 'count',
})

export default {
  example: figma.code`<Badge type="${type}" />`,
  imports: ['import { Badge } from "./Badges"'],
  id: 'badge',
  metadata: { nestable: true },
}
