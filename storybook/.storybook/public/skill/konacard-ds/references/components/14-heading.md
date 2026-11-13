> KONACARD 컴포넌트 명세(`konacard-ds-components.md`) 중 한 장. 이름 · 키 · variant 값은 `components.catalog.json` 이 기준이고, 다르면 카탈로그 · Figma 를 따른다.

# 14_Heading

> ❖ Heading 페이지 (2026-11-06 사용자 정리 완료). 화면의 제목 두 가지 — 화면 맨 위 큰 제목 `heading/headline`, 화면 안 묶음 제목 `heading/section`.
> 입력칸 위 라벨은 Heading 이 아니라 § 04_Forms 의 `input/label`.


## heading/headline (`1098:4409`)

- **Figma 노드**: 단일 컴포넌트 `1098:4409` (구 `action-bar/headline` 세트 `896:4387` 의 `type=1line` 노드를 그대로 써서 키 유지. 2line · 3line variant 와 세트는 삭제)
- **용도**: 화면 맨 위(header 아래)에 **한 번만** 쓰는 큰 제목. Scroll Title 유형 헤더와 짝으로도 씀
- **속성**:
  - `sub text` (boolean, **기본 꺼짐**) — 보조 문구 보이기
  - `sub` (text) — 보조 문구 내용
  - 주 문구에는 글자 속성 없음 — 강조 구절을 직접 칠해야 해서 레이어 글자를 바로 고침
- **사이즈·기하** (AX 실측):
  - 폭 **360** (화면 폭, 인스턴스는 FILL) / 높이 HUG — 주 문구 3줄 기준 144, 보조 문구 2줄 켜면 196
  - padding 상·하 **24** (`spacing/xlarge`) · 좌우 **20** (`layout/margin`), 주 문구 ↔ 보조 문구 gap **8** (`spacing/xsmall`)
- **글자**:
  - **주 문구** (`headline`): `heading/1-bold` = Pretendard **Bold 24px** / lineHeight 32 / letterSpacing -0.48 / `color/font/primary` #000000
    - 강조 구절은 **fill 만** `color/font/brand` #805AE9 (굵기·크기 그대로, 한 구절만)
  - **보조 문구** (`sub text`): `body/2-Regular` 14px / lineHeight 22 / letterSpacing -0.28 / `color/font/tertiary` #666666 — 주 문구 **아래**
- **KeyScreen AOS 근거** (2026-11-06, 보이는 인스턴스 576곳): 주 문구만 443 · 주 문구 + 보조 문구 133 · 세 번째 줄(설명) 0 → 설명 줄 삭제. 강조 287곳
- **여러 줄 처리**: 주 문구 2~3줄 권장, 보조 문구 2줄 이하

## heading/headline 안티패턴

- ❌ 강조 보라를 **여러 구절에 반복 사용** (한 구절 원칙 위배)
- ❌ 강조할 때 폰트·굵기까지 바꾸기 — fill 만 바꿈
- ❌ 한 화면에 headline 2개 이상 (화면 안 묶음 제목은 `heading/section`)
- ❌ Headline 없이 Scroll Title 헤더만 사용 (헤더에 처음부터 Page title 노출) — 이 경우 그냥 Sub 유형 사용
- ❌ Headline과 첫 콘텐츠 카드 사이 여백을 24px 미만으로 축소


## heading/section (`576:6131`)

- **Figma 노드**: 컴포넌트 세트 `576:6131` (구 `title/title`. 쓰이던 세 variant 는 이름만 바꿔 키 유지, 0곳인 4개 삭제, Type=Input 은 `input/label` 로 분리)
- **용도**: 화면 안에서 묶음(섹션)을 나누는 제목 — 예: 수취인 정보 · 마케팅 알림 설정 · 보내는 금액
- **속성**: `size` = `large` / `medium` / `small` + `title` (text)
- **사이즈·기하**: 폭 **320** (인스턴스는 FILL) / 글자 위아래 padding **8** (`spacing/xsmall`)

| size | 글자 | 색 | 높이 | 구 이름 | KeyScreen |
|---|---|---|---|---|---|
| `large` | `body/2-bold` 14/22 · -0.28 | `color/font/primary` #000000 | 38 | Type=Black · Large · Black | 29 |
| `medium` | `body/3-Bold` 12/18 · -0.24 | `color/font/quaternary` #999999 | 34 | Type=Con_list · Medium · Gray | 85 |
| `small` | `body/4-Bold` 11/16 · -0.22 | `color/font/quaternary` #999999 | 32 | Type=Con_list · Small · Gray | 14 |

- 크기마다 색이 하나씩만 쓰여서 옛 Color 속성은 size 에 묶음

## heading/section 안티패턴

- ❌ 섹션 제목을 텍스트로 직접 입력 (h2 직접 입력 금지 — 인스턴스 사용)
- ❌ 입력칸 라벨로 `heading/section` 사용 — 라벨은 `input/label`
- ❌ 한 묶음 안에서 size 섞어 쓰기


