// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=607-4415
// source=storybook/src/components/Accordion/Accordion.tsx
// component=AccordionBody
import figma from 'figma'

const instance = figma.selectedInstance

// accordion/body — size · type 는 코드와 1:1. 단독(공지사항 등)으로도 씀
const size = instance.getEnum('size', { large: 'large', medium: 'medium' })
const type = instance.getEnum('type', { 'bg-color': 'bg-color', 'bg-white': 'bg-white' })

export default {
  example: figma.code`<AccordionBody size="${size}" type="${type}" caption="2 depth contents text" boxContent="1depth contents list">1depth contents text</AccordionBody>`,
  imports: ['import { AccordionBody } from "./Accordion"'],
  id: 'accordion-body',
  metadata: { nestable: true },
}
