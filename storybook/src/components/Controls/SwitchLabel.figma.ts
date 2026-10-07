// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=2143-5491
// source=storybook/src/components/Controls/SwitchLabel.tsx
// component=SwitchLabel
import figma from 'figma'

const instance = figma.selectedInstance

// Figma 속성: size(variant) / guide(boolean)
// 켜짐/꺼짐은 내장 controls/swtich 인스턴스의 state override 라 여기서 매핑하지 않음
const size = instance.getEnum('size', {
  large: 'large',
  small: 'small',
})

const guide = instance.getBoolean('guide')

export default {
  example: figma.code`<SwitchLabel size="${size}" title="타이틀" guide={${guide}} checked onChange={setChecked} />`,
  imports: ['import { SwitchLabel } from "./SwitchLabel"'],
  id: 'switch-label',
  metadata: { nestable: false },
}
