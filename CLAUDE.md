# KONACARD Design System 작업 지침

이 폴더에서 앱 화면·컴포넌트를 다룰 때 아래 순서로 참조하세요.

## 3파일 라우팅

| 필요할 때 | 참조 문서 |
|---|---|
| **토큰 값**(hex 색·타이포 스케일·spacing·radius·shadow) | `konacard-ds-foundation.md` |
| **컴포넌트 명세**(variant / state / props) | `konacard-ds-components.md` (12개 대분류 전체 완료, v1.0) |
| **화면 조립 원칙·안티패턴** | `konacard-ds-rule.md` |
| **Figma 작업 실무**(프레임 360×800·auto-layout hug·아이콘 import) | `konacard-ds-rule.md` § "Figma 작업 규칙" |

## 새 화면을 만들 때 (표준 순서)

0. **Figma 작업 규칙 사전 확인** — `konacard-ds-rule.md` § "Figma 작업 규칙"에서 wrapper 360×800·auto-layout hug·아이콘 import 프로토콜 재확인 (직접 그리기 금지)
1. **화면 성격 판별** — `konacard-ds-rule.md`의 § "화면 성격 분류" 표에서 만들려는 화면이 어느 유형인지 먼저 확인
   - 스택형 진행 / 스택형 조회·설정 / 모달성 진행 / 모달·오버레이 / 브랜드 진입 / 파괴적 액션 진입 / 팝업·바텀시트 / 결과·완료 / 홍보성·유도 / 특수 상태·예외
2. **표준 패턴 확인** — 해당 성격에 매핑된 규칙(액션바·헤드라인·CTA·레이아웃)을 그대로 따를 것
3. **컴포넌트 선택** — `konacard-ds-rule.md` § 톤앤매너/버튼·팝업·카드 종류·리스트 등의 규칙에서 필요 컴포넌트 확인
4. **토큰 값 조회** — `konacard-ds-foundation.md`에서 컬러·타이포·spacing·radius 실값 참조
5. **안티패턴 검증** — `konacard-ds-rule.md` § "6) 하지 말 것" 목록과 대조 후 확정

## 공통 원칙 (5개 핵심)

- **보라 한 색, 필요한 한 곳에만** — `brand/primary` #805AE9는 강조 전용. 배경 전면·본문 텍스트 금지.
- **한 화면 = 한 과업** — 헤드라인 강조는 한 구절, CTA는 원칙적으로 1개.
- **모노톤 뼈대** — 배경 흰색, 카드는 `background/secondary` 회색만. 오류에만 빨강.
- **Pretendard 통일** — Regular / Bold 두 굵기만.
- **20px 좌우 padding** — 모든 화면 공통.

## Figma DS 원본

- **파일 키**: `dHJa65PGtCQHq2n4qgL9Z9` (-AX- KONACARD - COMMON, 현행)
  - 이전 파일 키: `Nv4o6ozSx5W4w10uFnQIs5` (-NEW- KONACARD - COMMON, 사용 중단)
  - AX 파일은 NEW 파일의 복제본으로 컴포넌트 노드 ID는 그대로 유지됨 (예: `input/input` = `41:505`)
- **컴포넌트 카탈로그 페이지**: `17:827` (02_Components)
- **Foundation 페이지**: `295:3042` (01_Foundations)
- **작업 대상 파일**: 세션마다 사용자가 공유하는 Figma URL에서 추출
- Figma variables 이름 오타 주의: `radius-tost` (실제로는 toast), `sencondary` 등은 원본명 그대로 참조.

## 파일 수정 원칙

- **`konacard-ds-foundation.md`** = Figma DS 원본과 대조 필요. 임의 수정 금지. 값 변경 시 반드시 Figma 원본과 일치하는지 확인.
- **`konacard-ds-rule.md`** = 새 화면 분석하면서 규칙 축적. 기존 규칙과 충돌 시 사용자에게 확인 후 정정.
- **버전 1 작성 진행 중** — changelog 별도 기록 안 함. 완성 후 v1 배포 시 정리 예정.
