// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=10997-164
// source=storybook/src/components/Divider/Divider.tsx
// component=Divider
import figma from 'figma'

const instance = figma.selectedInstance

// Figma divider: type 5종 × color 2종 — 코드와 1:1
const type = instance.getEnum('type', {
  solid: 'solid',
  dotted: 'dotted',
  section: 'section',
  'vertical-12': 'vertical-12',
  'vertical-8': 'vertical-8',
})

const color = instance.getEnum('color', {
  light: 'light',
  dark: 'dark',
})

export default {
  example: figma.code`<Divider type="${type}" color="${color}" />`,
  imports: ['import { Divider } from "./Divider"'],
  id: 'divider',
  metadata: { nestable: true },
}
