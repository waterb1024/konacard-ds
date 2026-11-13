> KONACARD 컴포넌트 명세(`konacard-ds-components.md`) 중 한 장. 이름 · 키 · variant 값은 `components.catalog.json` 이 기준이고, 다르면 카탈로그 · Figma 를 따른다.

# 05_Control

> ❖ Controls 페이지 (2026-10-07 정리 완료). 기본 컨트롤 3종 `controls/swtich` · `controls/check box` · `controls/radio button` + 글자를 붙인 조합 3종 `controls/swtich label` · `controls/checkbox label` · `controls/radio label`.
> 이름의 `swtich` 오타와 `check box` 띄어쓰기는 Figma 이름 그대로.

**공통 속성**
- `state` = 켜짐·체크·선택 여부 (`true` = 보라 #805AE9)
- `status` = 활성 여부 (`false` = 비활성). 스위치·체크박스는 전체 opacity 40%, 라디오는 아래 § controls/radio button 참고
- 조합 컴포넌트는 안에 든 기본 컨트롤 인스턴스의 `state` 를 바꿔서 켜고 끔


## controls/swtich (`28:409`)

- **용도**: 바로 반영되는 On/Off 토글 — 설정 항목, 알림 On/Off, 필터 켜고 끄기
- **size**: `large` 50×28 / `medium` 42×24
- **모양**: 얇은 트랙 + 전체 높이 원형 썸. 꺼짐 = 회색 #999 트랙, 썸 왼쪽 / 켜짐 = 보라 #805AE9 트랙, 썸 오른쪽
- `list/list` `type=control` 안에는 `medium` 이 들어 있음

## controls/swtich label (`2143:5491`)

- **용도**: 설정 화면 리스트 항목 — 제목 + 안내 문구 + 오른쪽 스위치
- **속성**: `size` (`large` / `small`) · `guide` (boolean, 기본 켜짐 = 아래 회색 안내 문구) · `type` (`1depth` 하나뿐)

| size | 높이 (guide 끔) | 안의 스위치 | 제목 / 안내 |
|---|---|---|---|
| `large` | 95 (57) | `large` 50×28 | `body/1-regular` #000 / `body/2-Regular` #999 |
| `small` | 75 (45) | `medium` 42×24 | `body/3-Regular` / `body/3-Regular` |

- 폭 360, 좌우 padding 20, 아래 구분선(`divider` solid light) 포함


## controls/check box (`28:431`)

- **용도**: 여러 개를 고를 수 있는 옵션, 약관 개별 동의
- **style** — style 마다 크기 고정 (size 속성 없음)

| style | 크기 | 모양 (체크 / 미체크) | 쓰는 곳 |
|---|---|---|---|
| `circle` | 28 | 보라 원 + 흰 체크 / #DDD 원 + 흰 체크 | 약관 전체동의 · 그룹 헤더 · 1depth 개별 항목, 카드 모양 선택지 선택 표시 |
| `line` | 24 | 보라 체크 / #999 체크 (바탕·테두리 없음) | 원형 행 아래 약관 세부(2depth) 항목 — 일반 화면 · 팝업 모두 (팝업 전용 아님, KeyScreen 일반 170 · 팝업 47) |
| `square-line` | 24 | 흰 바탕 + 보라 테두리·체크 | 폼 안 다중 선택 |
| `square-fill` | 20 | 보라 채움 + 흰 체크 / 흰 바탕 + #DDD 테두리·체크 | 용도 미정의 |

- 원형·라인 선택 기준은 rule.md § "약관 동의 체크박스"

## controls/checkbox label (`2004:5148`)

- **용도**: 약관 동의 리스트 한 줄 — 체크박스 + 글자 (+ 오른쪽 `>` 상세 보기)
- **속성**: `type` × `state` (체크 여부)

| type | 높이 | 체크박스 | 글자 | 오른쪽 `>` |
|---|---|---|---|---|
| `title` | 44 | `circle` 28 | `body/1-Bold` | 없음 |
| `1depth` | 44 | `circle` 28 | `body/2-Regular` | 있음 |
| `2depth` | 40 | `line` 24 | `body/2-Regular` | 있음 |

- `title` = "모두 동의합니다" 같은 전체동의 행. 세부 항목 위에 항상 별도 행으로 두고, 전체동의를 켜면 세부 항목도 모두 체크


## controls/radio button (`30:409`)

- **용도**: 여러 옵션 중 하나만 고름 — 결제수단, 설정값 라디오 그룹
- **size**: `medium` 28 / `small` 24
- **모양**: 흰 원 + #DDD 테두리. 선택되면 가운데 보라 점
- **비활성** (`status=false`) — 선택 여부에 따라 다름
  - 선택 + 비활성: 바깥 원 #F8F9FB + 점 #DDD, 흐림 없음
  - 미선택 + 비활성: 바깥 원 #F8F9FB + 전체 opacity 40%
- 옵션 배치(세로 / 가로 2개)는 rule.md § "라디오 버튼"

## controls/radio label (`2408:5563`)

- **용도**: 라디오 + 오른쪽 글자 한 쌍을 가로로 나란히 놓는 인라인 선택지 (예: PDF / EXCEL)
- **속성**: `size` = `small` 하나. variant 안에 쌍 2개(선택 1 + 미선택 1)가 들어 있고, 선택은 안의 라디오 `state` 로 바꿈
- **구성**: 라디오 `small` 24 + `body/1-regular`, 라디오 ↔ 글자 gap 8, 쌍 사이 gap 16, 높이 40


- 예전 문서의 `control/swtich/large·medium·small·tiny` 개별 컴포넌트는 AX 카탈로그에 없음 (미확인)

## 05_Control 안티패턴

- ❌ **바로 반영되지 않는 값에 스위치** — 저장 버튼이 필요한 폼에는 체크박스
- ❌ **라디오로 다중 선택** — 다중 선택은 체크박스
- ❌ 비활성을 opacity 로 직접 흐리게 — `status=false` variant 사용 (라디오 선택+비활성은 흐리지 않음)
- ❌ 약관 전체동의를 세부 약관 사이에 배치 (반드시 맨 위 별도 행)
- ❌ 컨트롤 크기를 Figma 에 없는 값으로 바꾸기
- ❌ 체크·라디오 아이콘을 새로 그리기 — 컴포넌트 인스턴스 사용


