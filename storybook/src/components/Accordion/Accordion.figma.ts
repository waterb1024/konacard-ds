// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=202-2089
// source=storybook/src/components/Accordion/Accordion.tsx
// component=AccordionHeader
import figma from 'figma'

const instance = figma.selectedInstance

// accordion/header — size · type · state 는 코드와 1:1 (state open → open prop)
const size = instance.getEnum('size', { large: 'large', medium: 'medium' })
const type = instance.getEnum('type', { list: 'list', inquiry: 'inquiry' })
const open = instance.getEnum('state', { closed: false, open: true })

// 제목·설명은 화면마다 바뀌는 자유 문자열이라 예시 문구만 넣어둠
export default {
  example: figma.code`<AccordionHeader size="${size}" type="${type}" open={${open}} title="Main text" />`,
  imports: ['import { AccordionHeader } from "./Accordion"'],
  id: 'accordion-header',
  metadata: { nestable: true },
}
