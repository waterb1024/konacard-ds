// url=https://www.figma.com/design/${FIGMA_DS_FILE_KEY}/-AX--KONACARD?node-id=1098-4409
// source=storybook/src/components/Heading/Heading.tsx
// component=Headline
import figma from 'figma'

const instance = figma.selectedInstance

// heading/headline — 단일 컴포넌트. sub text(boolean, 기본 꺼짐)를 켜면 sub 글자를 보조 문구로 넘김.
// 주 문구는 강조 구절을 직접 칠하는 자유 글이라 예시 문구만 넣어둠
const sub = instance.getBoolean('sub text', { true: instance.getString('sub'), false: undefined })

export default {
  example: figma.code`<Headline sub="${sub}">Main text <HeadlineEmphasis>강조</HeadlineEmphasis></Headline>`,
  imports: ['import { Headline, HeadlineEmphasis } from "./Heading"'],
  id: 'heading-headline',
  metadata: { nestable: false },
}
