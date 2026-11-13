> KONACARD 컴포넌트 명세(`konacard-ds-components.md`) 중 한 장. 이름 · 키 · variant 값은 `components.catalog.json` 이 기준이고, 다르면 카탈로그 · Figma 를 따른다.

# 09_Label

> 사용자가 누를 수 없고 **정보 전달만** 하는 pill 형 태그.

## label (`2121:5513`)

- **속성**: `size` × `type` × `color` — type 마다 쓸 수 있는 색·사이즈가 다름

| type | color | size |
|---|---|---|
| `color` (바탕 채움) | `brand-gradient` · `brand` · `brand-light` · `gray-dark` · `warning` · `gray-light` | `large` · `medium` · `small` · `tiny` |
| `line` (테두리, 바탕 없음) | `brand-gradient` · `brand` · `warning` | `large` · `medium` · `small` (tiny 없음) |

| size | 높이 | 글자 |
|---|---|---|
| `large` | 30 | `body/2-bold` 14/22 |
| `medium` | 26 | `body/3-Bold` 12/18 |
| `small` | 24 | `body/4-Bold` 11/16 |
| `tiny` | 20 | Bold 9/12 (텍스트 스타일 없음) |

- 모서리 `radius/components/label` (완전 pill), 폭은 글자에 맞춤
- **color**
  - `brand-gradient` — #804EE2 → #526ED3 가로 그라데이션 + 흰 글자 (line 은 테두리·글자 모두 그라데이션). 가장 많이 씀
  - `brand` — 보라 #805AE9 채움 + 흰 글자 (line: 보라 테두리·글자)
  - `brand-light` — 연보라 #F4F0FD 채움 + 보라 글자
  - `gray-dark` — #999 채움 + 흰 글자
  - `warning` — 빨강 #FF364B 채움 + 흰 글자 (line: 빨강 테두리·글자)
  - `gray-light` — #F8F9FB 채움 + #666 글자. 대기·미처리 상태 (예: 문의 "답변대기")
- **상태 표시에 쓸 때** (rule.md § 상태 pill 5종 · § Pill 배지): 완료 · 강조 = `brand` / 진행 중 · 활성 · 지속 상태 = `brand-light` / 차단 · 불가 = `warning` / 자연 종료 = `gray-dark` / 대기 = `gray-light` — pill 색을 직접 지정하지 않음

## 09_Label 안티패턴

- ❌ **label 을 누를 수 있는 요소로 사용** — 누르는 게 필요하면 `button/button` Small (`style=secondary, size=medium`)
- ❌ label 에 그림자. 그라데이션은 `brand-gradient` 색으로만
- ❌ label 글자 6자 이상 (짧은 태그 원칙)
- ❌ `type=line` 에 `brand-light` · `gray-dark` · `gray-light` 또는 `tiny` (없는 조합)


