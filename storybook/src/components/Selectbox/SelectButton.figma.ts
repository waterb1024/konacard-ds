// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=11061-3729
// source=storybook/src/components/Selectbox/SelectButton.tsx
// component=SelectButton
import figma from 'figma'

const instance = figma.selectedInstance

const selected = instance.getEnum('state', { default: false, selected: true })
// status: true = 활성 (체크박스·라디오·탭과 같은 규칙)
const status = instance.getEnum('status', { true: true, false: false })

export default {
  example: figma.code`<SelectButton selected={${selected}} status={${status}}>선택지</SelectButton>`,
  imports: ['import { SelectButton } from "./SelectButton"'],
  id: 'select-button',
  metadata: { nestable: true },
}
