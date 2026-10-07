// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=17-1049
// source=storybook/src/components/Button/FixedBottom.tsx
// component=FixedBottom
import figma from 'figma'

// Device(AOS/iOS) 는 화면 폭 차이뿐이라 코드 prop 없음
export default {
  example: figma.code`<FixedBottom secondary="취소" primary="확인" />`,
  imports: ['import { FixedBottom } from "./FixedBottom"'],
  id: 'fixed-bottom',
  metadata: { nestable: false },
}
