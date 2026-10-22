// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=11109-3834
// source=storybook/src/components/Accordion/Accordion.tsx
// component=Accordion
import figma from 'figma'

const instance = figma.selectedInstance

// accordion(묶음 = header + body) — size · type · state 는 코드와 1:1.
// 본문 크기·바탕은 코드에서 size · type 을 따라가므로 따로 넘기지 않음
const size = instance.getEnum('size', { large: 'large', medium: 'medium' })
const type = instance.getEnum('type', { list: 'list', inquiry: 'inquiry' })
const open = instance.getEnum('state', { closed: false, open: true })

export default {
  example: figma.code`<Accordion size="${size}" type="${type}" defaultOpen={${open}} title="Main text" caption="2 depth contents text">1depth contents text</Accordion>`,
  imports: ['import { Accordion } from "./Accordion"'],
  id: 'accordion',
  metadata: { nestable: false },
}
