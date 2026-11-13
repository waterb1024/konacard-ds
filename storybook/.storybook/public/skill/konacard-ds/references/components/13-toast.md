> KONACARD 컴포넌트 명세(`konacard-ds-components.md`) 중 한 장. 이름 · 키 · variant 값은 `components.catalog.json` 이 기준이고, 다르면 카탈로그 · Figma 를 따른다.

# 13_Toast

## Toast (`toast`)

화면 이동 없이 액션 결과를 바로 알려주는 짧은 알림. 용도·문구 예·다른 UI와의 구분은 `konacard-ds-rule.md` § "Toast 컴포넌트".

| 속성 | 값 (AX 실측) |
|---|---|
| 구조 | 속성(variant) 없는 단일 컴포넌트 |
| 크기 | 320 × 42 (높이 고정, 글자는 세로·가로 가운데) |
| radius | 12 (`radius/components/toast`) |
| 배경 | `color/background/dimmed` (검정 64%) |
| 글자 | `body/2-Regular` 14/22 · `font/white` |
| 배치 | 화면 아래에서 **40**, 좌우 **20** (`layout/margin`) — 360 화면에서 폭 320 |

- 성공·실패 색 구분 없음. 문구로만 성격을 전달
- 1줄 짧은 문구

### Toast 안티패턴
- ❌ 성공은 초록, 실패는 빨강처럼 바탕색을 바꾸기
- ❌ 화면 중앙·상단 배치 (항상 아래 40 · 좌우 20)
- ❌ Toast 안에 버튼·아이콘 넣기 (판단이 필요하면 중앙 얼럿 사용)


