> KONACARD 컴포넌트 명세(`konacard-ds-components.md`) 중 한 장. 이름 · 키 · variant 값은 `components.catalog.json` 이 기준이고, 다르면 카탈로그 · Figma 를 따른다.

# 07_Line

> 구분선은 세트 하나 `divider` (`10997:164`) — 구 `line/solid` · `line/dotted` · `line/divider` · `line/divider-line` 을 합친 것.
> 내용과 영역을 나눌 때 씀. 선을 사각형으로 직접 그리지 말고 인스턴스 사용.

## divider

- **속성**: `type` × `color` (`light` / `dark`)

| type | 크기 | 쓰는 곳 |
|---|---|---|
| `solid` | 가로 1px (폭은 늘려 씀) | 리스트 항목 사이 — 기본 구분선 |
| `dotted` | 가로 1px 점선 (2/2) | 제목 없는 안내 문구(§ 10_Info) 위, 정보 묶음 · Info-box 항목 사이, 팝업 · 안내 카드 안 계층 분리 (예: 완료 통지 ↔ 후속 안내, 진행바 사이) |
| `section` | 높이 10 회색 띠 (`light` 만) | 한 화면 안 큰 영역 사이 (예: "결제 정보" ↔ "혜택 정보") |
| `vertical-12` / `vertical-8` | 세로 1×12 / 1×8 (필요하면 높이를 늘림) | 카드 안 세로 구분 |

- **color** — type 마다 실제 색이 다름
  - `solid` · `dotted` · `section`: `light` = `divider/primary` (검정 6%) · `dark` = `divider/secondary` (8%)
  - `vertical`: `light` = `divider/secondary` (8%) · `dark` = `divider/tertiary` (12%) — 짧은 세로선이라 한 단계 진함
- `solid` · `dotted` · `vertical` 은 선 밑에 흰 바탕이 깔려 있음 — 회색 바탕 위에 놓으면 흰 줄 + 선으로 보임
- 옛 문서 기준 `dark` 는 회색 바탕(`background/secondary`) 위에 씀

## 07_Line 안티패턴

- ❌ 리스트 구분선에 `dotted` (반드시 `solid`)
- ❌ 큰 영역 구분을 `section` 대신 그림자·그라데이션으로
- ❌ 가로선을 2px 이상으로 두껍게 — 굵은 구분이 필요하면 `section`
- ❌ 사각형·선을 직접 그려서 구분선 만들기


