> KONACARD 컴포넌트 명세(`konacard-ds-components.md`) 중 한 장. 이름 · 키 · variant 값은 `components.catalog.json` 이 기준이고, 다르면 카탈로그 · Figma 를 따른다.

# 02_Button

> 버튼 4종 — 채움·테두리 버튼 `button/button`, 글자 링크 `button/text button`, 글자 + 화살표 `button/icon button`, 하단 고정 CTA 묶음 `button/fixed-bottom`.
> 값 전체는 `components.catalog.json`. 여기는 고르는 기준과 규칙만.

**공통 원칙**
- **비활성 = 같은 모양 + opacity 40%** (Figma `state=false`, 2026-11-09 확인). **예외 하나** — `style=primary, type=brand` 만 바탕이 #DDD(`button/tertiary`) + 흰 글자로 바뀜: `large` 는 흐리지 않고(op 1), `medium` · `small` 은 그 위에 40%. `secondary` 의 `brand` 는 다른 type 처럼 보라 그대로 40%
- `button/text button` · `button/icon button` 에는 비활성 variant 가 없음 — 필요하면 버튼 전체에 opacity 40%
- **Corner radius**: `radius/button/*` 토큰 사용 (`konacard-ds-foundation.md`)
- **터치 영역**: 최소 32px 세로 확보 (Text·Icon 버튼도 동일)

## button/button (`10973:356`)

- **용도**: 화면 CTA · 본문 액션 · 정보 행 오른쪽 액션 등 바탕이나 테두리가 있는 버튼
- **속성**: `style` (`primary` / `secondary`) × `size` × `type` × `state` (`true` 활성 / `false` 비활성)
- **size** — style 마다 다름. `primary` 에는 `tiny` 없음

| style | size | 높이 | 부르는 이름 · 쓰는 곳 |
|---|---|---|---|
| `primary` | `large` | 56 | **Large 버튼** — 하단 고정 CTA · 화면 주 CTA. radius 8, `button/large-bold` 15/24 |
| `primary` | `medium` | 48 | **Medium 버튼** — 본문 안 중요한 액션. radius 6, `button/medium-bold` 14/22 |
| `primary` | `small` | 40 | 용도 미정의 |
| `secondary` | `large` | 40 | 용도 미정의 |
| `secondary` | `medium` | 32 | **Small 버튼** — 정보 행 오른쪽 "변경" · "연결", 카드 안 액션, 설명에 붙는 액션 (입력칸 옆에는 쓰지 않음). radius 4, `button/small-regular` 12/18 |
| `secondary` | `small` | 24 | 용도 미정의 |
| `secondary` | `tiny` | 24 | 용도 미정의 (글자 11/16) |

- **type** (7종, 두 style 공통)

| type | 모양 | 코드 `color` |
|---|---|---|
| `brand` | 보라 채움 #805AE9 + 흰 글자 — **기본 Primary CTA** | `Brand` |
| `brand-light` | 연보라 채움 #F4F0FD + 보라 글자 | `Brand_Light` |
| `brand-line` | 흰 바탕 + 보라 테두리 + 보라 글자 — Secondary | `Brand_Line` |
| `gray` | 회색 채움 #999 + 흰 글자 | `Gray` |
| `gray-light` | 연회색 채움 + 검정 글자 (secondary 는 #333) — 병렬 CTA 좌측 보조 | `Gray_Light` |
| `gray-line` | 흰 바탕 + 진한 회색 테두리 1px (`button/quaternary` #999) — 반복 편집 진입점 | `Gray_Line` |
| `gray-line-light` | 흰 바탕 + 연한 회색 테두리 1px (`button/tertiary` #DDD), 글자 #333 (secondary 는 #666) — `gray-line` 과 테두리 진하기만 다름 (Figma 확인 2026-11-09). 용도 미정의 | `Gray_Line_Light` |

- Figma 작업은 `type` 값(소문자·하이픈), PascalCase 는 코드 `color` prop 값
- 관련 rule.md: § "버튼", § "5) 말투 / CTA 라벨", § "5) 말투 / CTA 개수 규칙"

## button/text button (`10973:796`)

- **용도**: 바탕 없는 글자 링크 버튼 — 하단 유틸리티 링크, CTA 위 반대 액션, 필드·카드 우측 "복사" 같은 가벼운 어드먼트
- **속성**: `size` × `color`. 글자 아래 **밑줄 내장**. 폭은 글자에 맞춤

| size | 높이 | 글자 |
|---|---|---|
| `large` | 36 | `button/medium-regular` 14/22 |
| `medium` | 32 | `button/small-regular` 12/18 |
| `small` | 24 | `button/tiny-regular` 11/16 |

- **color**: `gray` (기본 유틸리티 링크) / `gray-light` (부가 정보) / `black` / `brand` (강조 링크)

## button/icon button (`10973:651`)

- **용도**: 글자 + 오른쪽 화살표(`ic_arrow_right`, gap 4) — 진입형 리스트 아이템 우측, 설정 값 표시 + 진입
- **속성**: `size` × `weight` (`regular` / `bold`) × `type` (`gray` / `black` / `brand` = 글자 색)

| size | 높이 | 글자 |
|---|---|---|
| `large` | 40 | `body/1` 15/24 |
| `medium` | 32 | `body/2` 14/22 |
| `small` | 24 | `body/3` 12/18 |

- 가장 많이 쓰는 조합: `medium` · `regular` · `gray`
- 화살표 색은 Figma variant 그대로 (gray #666 · black #333 · brand, `small`·`gray` 만 #333 투명도 60%) — 따로 칠하지 않음

## button/fixed-bottom (`17:1049`)

- **용도**: 화면 하단에 고정되는 CTA 묶음 (Large 버튼을 감싸는 틀)
- **속성**: `Device` = `AOS` (360×72) / `iOS` (375×72) — 폭만 다름
- **구성**: padding 상 0 · 좌우 20 · 하 16, 버튼 사이 gap 8, 흰 바탕
  - 좌: `style=primary, size=large, type=gray-light` **폭 115 고정** (보조)
  - 우: `style=primary, size=large, type=brand` **남은 폭 채움** (주)
- **파괴적 액션·미루기 = 좌측** (rule.md § "CTA 병렬 위계")
- 성격이 다른 버튼을 나란히 둘 때는 가로·세로 모두 **8px** 간격

## Button 사용 매핑

| 위치 | 컴포넌트 · 사이즈 | type / color |
|---|---|---|
| 하단 고정 CTA (주) | `button/button` Large | `brand` |
| 하단 고정 CTA (병렬 보조) | `button/button` Large | `gray-light` |
| 하단 고정 CTA (병렬 반대 액션·아웃라인) | `button/button` Large | `brand-line` or `gray-line` |
| 본문 안 강조 액션 | `button/button` Medium | `brand` or `brand-line` |
| 입력칸 오른쪽 — 입력 돕기 (주소입력 · 은행선택) | `input` style/case=button 내장 | — |
| 입력칸 오른쪽 — 인증번호 재요청 | `button/button` Medium (입력칸 밖) | `brand-line` |
| 정보 행 오른쪽 — 값 변경 진입 ("변경") | `button/button` Small | `gray-light` |
| 정보 행 오른쪽 — 연결 · 등록 강조 | `button/button` Small | `brand-line` |
| 하단 유틸리티 링크 | `button/text button` | `gray` |
| CTA 위 반대 액션 링크 | `button/text button` | `gray` |
| 진입형 리스트 아이템 우측 액션 | `button/icon button` medium | `gray` (설정값이면 `brand`) |

## Button 안티패턴

- ❌ 하단 고정 CTA 2개를 **같은 무게**로 (반드시 좌 115 고정 + 우 채움)
- ❌ **파괴 확정 액션을 우측 주 위치에** (반드시 좌측 회색 보조 위치)
- ❌ 버튼에 로딩 스피너 (비활성 variant 만으로 처리)
- ❌ `button/text button` 에 바탕색 채우기 (그럴 거면 `button/button` Small `brand`)
- ❌ Small 버튼에 Large 의 padding·radius 적용
- ❌ `style=primary` 에 `size=tiny` (없는 조합)


