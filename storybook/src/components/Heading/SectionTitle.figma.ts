// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=576-6131
// source=storybook/src/components/Heading/Heading.tsx
// component=SectionTitle
import figma from 'figma'

const instance = figma.selectedInstance

// heading/section — size 는 코드와 1:1, title 은 글자 속성
const size = instance.getEnum('size', { large: 'large', medium: 'medium', small: 'small' })
const title = instance.getString('title')

export default {
  example: figma.code`<SectionTitle size="${size}">${title}</SectionTitle>`,
  imports: ['import { SectionTitle } from "./Heading"'],
  id: 'heading-section',
  metadata: { nestable: true },
}
