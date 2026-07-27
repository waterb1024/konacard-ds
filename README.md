# KONACARD Design System

<img width="1200" height="630" alt="image" src="https://github.com/user-attachments/assets/648e12a2-bbde-4f9b-88d6-c4855401edec" />





KONACARD 모바일 앱(AOS) 공통 디자인 시스템의 **AI 참조용 문서 세트**.
Figma DS 원본(`Nv4o6ozSx5W4w10uFnQIs5` — KONACARD COMMON)을 코드-컨텍스트로 번역해, Claude Code + Figma MCP 환경에서 AI 에이전트가 "KONACARD답게" 화면을 자동 재현할 수 있도록 유지합니다.

> ⚠️ **v1 작성 진행 중** — 릴리즈 전까지 세부 정정 및 보강이 있을 수 있습니다.

## 파일 구조

```
konacard-ds/
├── CLAUDE.md                        # 진입 지침 · 3파일 라우팅 (Claude Code 자동 로드)
├── konacard-ds-foundation.md        # 토큰: color / typography / spacing / radius / elevation
├── konacard-ds-components.md        # 12개 대분류 컴포넌트 명세 (00_Basic ~ 12_Banner)
└── konacard-ds-rule.md              # Figma 작업 규칙 · 화면 성격 분류 · 조립 원칙 · 안티패턴
```

## 사용 방법

Claude Code 세션에서 이 폴더 진입 시 `CLAUDE.md`가 자동 로드되어 3파일 라우팅 표에 따라 필요 문서를 참조합니다.

**새 화면을 만들 때 표준 순서:**

0. **Figma 작업 규칙 확인** — `konacard-ds-rule.md § "Figma 작업 규칙"` (프레임 360×800 · auto-layout hug · 아이콘 import 프로토콜)
1. **화면 성격 판별** — `konacard-ds-rule.md § "화면 성격 분류"` (스택형/모달성/브랜드 진입/팝업 등 10종)
2. **표준 패턴 확인** — 성격에 매핑된 액션바·헤드라인·CTA·레이아웃 규칙
3. **컴포넌트 선택** — `konacard-ds-components.md`에서 variant · state · props 확인
4. **토큰 값 조회** — `konacard-ds-foundation.md`에서 hex 색·타이포·spacing 실값 참조
5. **안티패턴 검증** — `konacard-ds-rule.md § "6) 하지 말 것"`과 대조

## 공통 원칙 (5개 핵심)

- **보라 한 색, 필요한 한 곳에만** — `brand/primary` #805AE9는 강조 전용
- **한 화면 = 한 과업** — 헤드라인 강조 한 구절, CTA 원칙적으로 1개
- **모노톤 뼈대** — 배경 흰색, 카드는 `background/secondary` 회색만, 오류에만 빨강
- **Pretendard 통일** — Regular / Bold 두 굵기만
- **20px 좌우 padding** — 모든 화면 공통

## Figma DS 원본

- **파일 키**: `Nv4o6ozSx5W4w10uFnQIs5`
- **파일 URL**: https://www.figma.com/design/Nv4o6ozSx5W4w10uFnQIs5
- **아이콘 페이지**: `04_Image` (page id `2:16890`) — 660개 아이콘/이미지 컴포넌트

## 향후 계획

- **v1 완성** — 12개 대분류 컴포넌트 정리 완료, Foundation 원본 variable 이름 매핑 보강 예정
- **Skill 배포** — `SKILL.md` + description 추가 후 Claude Skill로 등록 예정
- **정기 sync** — Figma DS 파일 변경 시 foundation.md 갱신 프로세스 수립

## 라이선스 / 사용 범위

KONACARD 내부용 참조 문서. 외부 배포·재사용은 팀 확인 필요.
