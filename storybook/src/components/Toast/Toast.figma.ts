// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=11099-3580
// source=storybook/src/components/Toast/Toast.tsx
// component=Toast
import figma from 'figma'

// Figma toast 는 속성이 없는 단일 컴포넌트. 글자는 화면마다 바뀌는 자유 문자열이라
// 매핑에서는 예시 문구만 넣어둠.
export default {
  example: figma.code`<Toast>신청이 완료되었습니다.</Toast>`,
  imports: ['import { Toast } from "./Toast"'],
  id: 'toast',
  metadata: { nestable: false },
}
