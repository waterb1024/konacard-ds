> KONACARD 컴포넌트 명세(`konacard-ds-components.md`) 중 한 장. 이름 · 키 · variant 값은 `components.catalog.json` 이 기준이고, 다르면 카탈로그 · Figma 를 따른다.

# 10_Info

> ❖ Info 페이지 (`10950:8835`) — 2026-10-07 정리된 것은 `info` 뿐. Text info · Info-box 는 아직 옛 기준
> 3가지 유형: **info**(입력칸 아래 한 줄 안내·오류 문구) / **Text info**(bullet 안내문구) / **Info-box**(박스형 항목-내용 나열)

## info (`41:1241`, 구 `input/info-text`)

- **용도**: 입력칸·선택칸 아래 Guide Text, 짧은 안내·오류 문구. `input` · `select/select box` 에는 `info` boolean 으로 들어 있음 (§ 04_Forms "Form UI 조합 규칙")
- **속성**: `type` 5종

| type | 글자 색 | 아이콘 | 쓰는 곳 |
|---|---|---|---|
| `info` | #666 | 없음 | 부가 힌트 (예: "숫자만 입력 가능") |
| `error` | 빨강 #FF364B | 없음 | 아이콘 없는 오류 문구 |
| `icon-error` | 빨강 #FF364B | 빨간 ! (`icon_danger`) | 검증 실패 — `input` 오류 상태 기본 |
| `icon-info` | 검정 | 검정 ! (`icon_alert_black`) | 강조 안내 |
| `icon-guide` | #666 | 회색 ! (`icon_alert_gray`) | 가이드성 안내 |

- 글자 `body/3-Regular` 12/18, 한 줄 높이 18. 컴포넌트 폭 230 고정, 길면 줄바꿈 — 아이콘은 첫 줄에 붙음

### info 안티패턴

- ❌ 검증 결과·필수값 안내를 회색 `info` 로 — `icon-error` 사용

## Text info

> ⏳ Figma 정리 전 — 아래는 옛 기준. 값·이름은 Figma 에서 확인

- **원칙**:
  - 안내 문구는 **최대 2Depth까지만** 사용
  - 여러 개 문단 사용 시, 문단 앞에 글머리 기호로 구분 — **`•` 점 · `-` 대시 · `*` 별표 · `※`** 4가지만 (`■` 등 다른 도형 쓰지 않음, 2026-11-09 KeyScreen 기준 결정 — 쓰는 곳은 rule.md § Bullet 스타일)
  - **제목이 없는 안내문구의 상단에는 항상 Dotted line 사용**
  - 안내문구의 아이콘과 텍스트는 **마진 없이 적용**
- **1 Depth**: `•` (Dot) + Text = `body/2-Regular` 14px `color/font/primary` 검정
- **2 Depth**: `*` (Aster) + Text = `body/3-Regular` 12px `color/font/quaternary` #999999
- **사용 예시**:
  - **제목있는 안내문구**: 상단 `⓵ Info title` (Bold + 아이콘) + 아래 bullet 문단
  - **제목없는 안내문구**: 상단 Dotted line + bullet 문단만
  - 문단 조합: "1Depth 한 개 사용" / "1Depth 여러 개 사용" / "1Depth 여러 개와 2Depth 문단 사용" 3형

## Info-box (Item List / Box Case)

> ⏳ Figma 정리 전 — 아래는 옛 기준. 값·이름은 Figma 에서 확인

- **박스 여백 규칙**:
  - 박스형 컨텐츠는 **상/하/좌/우 각각 마진 24씩** 적용
  - **항목 간 구분** = 마진 **16**
  - **항목 그룹 간 구분** = Dotted line, 선을 기준으로 **상/하 마진 20**
- **Item List (항목명 ↔ 항목 내용)**:
  - 좌측 항목명: `body/2-Regular` 14px `color/font/tertiary` #666666, **Align: Right**
  - 좌↔우 gap **16**
  - 우측 항목 내용: `body/2-Regular` 14px 검정, **Align: Left**
  - 항목 내용 2줄 이상일 경우 좌측 항목명은 첫 줄 baseline 정렬
- **배경**: 회색 카드 `color/background/secondary` 또는 흰 배경(구분 필요 시 solid line 위/아래)

## 10_Info 안티패턴

- ❌ 안내문구 3 depth 이상 (반드시 2 depth까지)
- ❌ 문단 구분 도형에 ✓, →, ★ 등 사용 (반드시 • 또는 \*)
- ❌ 제목 없는 안내문구 상단 Dotted line 생략
- ❌ Info-box 안 마진 24 미준수


