// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=2004-5148
// source=storybook/src/components/Controls/CheckboxLabel.tsx
// component=CheckboxLabel
import figma from 'figma'

const instance = figma.selectedInstance

// Figma variant 2종: type / state
// - state=true → checked=true, state=false → checked=false
const type = instance.getEnum('type', {
  title: 'title',
  '1depth': '1depth',
  '2depth': '2depth',
})

const checked = instance.getBoolean('state')

export default {
  example: figma.code`<CheckboxLabel type="${type}" checked={${checked}}>약관 동의</CheckboxLabel>`,
  imports: ['import { CheckboxLabel } from "./CheckboxLabel"'],
  id: 'checkbox-label',
  metadata: { nestable: false },
}
