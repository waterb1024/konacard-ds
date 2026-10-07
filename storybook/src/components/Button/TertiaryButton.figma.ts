// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=1212-4553
// source=storybook/src/components/Button/TertiaryButton.tsx
// component=TertiaryButton
import figma from 'figma'

const instance = figma.selectedInstance

const type = instance.getEnum('Type', {
  Dark: 'Dark',
  Gray: 'Gray',
  line: 'line',
})

export default {
  example: figma.code`<TertiaryButton type="${type}">추가</TertiaryButton>`,
  imports: ['import { TertiaryButton } from "./TertiaryButton"'],
  id: 'tertiary-button',
  metadata: { nestable: true },
}
