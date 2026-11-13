> KONACARD 컴포넌트 명세(`konacard-ds-components.md`) 중 한 장. 이름 · 키 · variant 값은 `components.catalog.json` 이 기준이고, 다르면 카탈로그 · Figma 를 따른다.

# 11_Tooltip

> ❖ Tooltip 페이지 (2026-10-07 대조). 글자 옆 회색 원형 아이콘을 누르면 그 자리에 뜨는 말풍선 `tooltip/tooltip`.
> **터치 영역은 글자 + 아이콘 전체** — 정보에 쉽게 닿도록.

## tooltip/tooltip (`200:1909`)

- **용도**: 용어 정의·단순 정보를 화면 이동 없이 바로 확인 (인라인, 모달 아님)
- **속성**: `style` × `placement`
  - `style`: `line` (흰 바탕 + 보라 #805AE9 1px 테두리 + 검정 글자) / `brand` (보라 #805AE9 바탕 + 흰 글자)
  - `placement`: `top-left` · `top` · `top-right` · `bottom-left` · `bottom` · `bottom-right` · `left` · `right`
    - `top-*` · `bottom-*` = 말풍선 위치 (핀은 반대쪽). `-left` / `-right` 는 핀 중심이 말풍선 끝에서 20
    - `left` · `right` = 핀이 붙는 쪽
- **말풍선**: padding 상하 12 · 좌우 16, radius 8, 글자 `body/2-Regular` 14/22, 폭은 글자에 맞춤
- 핀은 말풍선과 1px 겹침. 높이 53 (`top-*` · `bottom-*`) / 46 (`left` · `right`)

**여는 아이콘 · 배치** (❖ Tooltip 예시 화면 기준)
- 입력칸 제목 옆: 16 `?` (`ic_info/ic_noti_16_g`)
- 정보 값 옆: 20 `?` (`ic_20/ic_question_20_g`) = 설명 / 20 `!` (`ic_20/ic_guide_20_g`) = 주의·조건
- 말풍선은 아이콘 바로 아래·위 (간격 0). 왼쪽 아이콘이면 `-left`, 오른쪽 아이콘이면 `-right`
- 화면 좌우 여백 20 안에 두고, 긴 문구는 의미 단위로 줄바꿈
- **아이콘 모양 = 내용의 성격, 열리는 형태 = 내용의 길이** (2026-11-10 결정, KeyScreen AOS 기준)
  - `?` = 설명 (용어 뜻 · 계산 방식) / `!` = 주의 · 조건 — 둘 다 말풍선을 열 수 있음 (옛 규칙 "? = 팝업, ! = 말풍선" 은 쓰지 않음)
  - 1~2문장 짧은 설명 → 말풍선 `tooltip/tooltip`
  - 길거나 여러 항목 · 이미지 · 행동 안내가 있는 설명 → 사용법 안내 팝업 (`rules/patterns/popups.md` § "사용법 안내 팝업")
  - KeyScreen: `?` 아이콘 418곳 · `!` 35곳. 말풍선은 `?` 화면 6곳 · `!` 화면 4곳 모두 있음. 안내 팝업(비밀번호 규칙 · 인증 안내 · 카드 안내 등)은 약 30개 화면

## 11_Tooltip 안티패턴

- ❌ 말풍선을 모달로 (반드시 인라인)
- ❌ 터치 영역을 아이콘만으로 한정 (글자 + 아이콘 전체)
- ❌ 안쪽 부품 `tooltip/body` · `tooltip/pin` 을 떼어 조립 — `tooltip/tooltip` 인스턴스 사용
- ❌ 말풍선 글자 크기·여백·모서리를 바꿔 쓰기 (14 · 12/16 · 8)
- ❌ 말풍선이 화면 좌우 여백 20 밖으로 나감


