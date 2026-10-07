// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=41-1241
// source=storybook/src/components/Info/InfoText.tsx
// component=InfoText
import figma from 'figma'

const instance = figma.selectedInstance

// Figma "type" 5종 — 코드와 1:1
const type = instance.getEnum('type', {
  info: 'info',
  error: 'error',
  'icon-error': 'icon-error',
  'icon-info': 'icon-info',
  'icon-guide': 'icon-guide',
})

export default {
  example: figma.code`<InfoText type="${type}">안내 문구</InfoText>`,
  imports: ['import { InfoText } from "./InfoText"'],
  id: 'info-text',
  metadata: { nestable: true },
}
