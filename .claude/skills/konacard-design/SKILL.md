---
name: konacard-design
description: 트랙 A 화면 생산 파이프라인 진입 표지판. 기획서를 받아 KONACARD DS agents team (screen-spec-reader → screen-planner → figma-composer → screen-reviewer) 으로 위임한다.
argument-hint: [MD 내용 붙여넣기 / 파일경로.md / Confluence URL / Figma URL]
---

# KONACARD Design (Track A router)

이 skill 은 트랙 A 화면 생산 파이프라인의 진입 표지판이다. 실제 작업은 `.claude/agents/` 하 4개 subagent 가 수행하고, 이 skill 은 순서 오케스트레이션과 사용자 승인 게이트만 담당한다.

## 파이프라인

```
screen-spec-reader → screen-planner → figma-composer → screen-reviewer
   (스펙 파싱)         (성격 판정·계획)     (use_figma 조립)     (안티패턴 flag)
```

## 실행 규칙 (반드시 순서대로)

1. **입력을 그대로 `screen-spec-reader` 에 위임** (Task tool, `subagent_type=screen-spec-reader`). skill 층에서 사전 파싱 안 함.
2. reader 가 반환한 정형 요약을 사용자에게 노출. 오탐/누락 지적이 있으면 reader 재실행, 없으면 다음.
3. `screen-planner` 위임. reader 요약 전체를 입력으로 전달.
4. **사용자 승인 게이트 (skill 의 유일한 통제 지점)** — planner 조립 계획을 사용자에게 노출. **"조립해줘 / 승인" 같은 명시적 사인오프 없이는 Figma 조립 절대 금지.** 계획 수정 요청 있으면 planner 재실행.
5. 승인 후 `figma-composer` 위임. 대상 Figma 파일 URL 이 스펙에 없으면 사용자에게 요청.
6. composer 완료 후 `screen-reviewer` 위임. flag 반환 시 사용자에게 판단권 (자동 수정 금지).

## 이 skill 이 하지 않는 것

- 화면 성격 10종 분류·5개 공통 원칙·안티패턴 목록·Figma 작업 규칙 세부 등을 재기술하지 않는다. 각 agent 정의(`.claude/agents/screen-*.md`)가 진실의 소스.
- `konacard-ds-*.md` 문서 직접 참조 안 함. agents 가 참조.
- Figma DS 파일키 언급 안 함. agents 가 embed.

## 트랙 B 로 착각한 요청

트리거 예: "Chips 매핑해줘", "foundation 값 검증", "figma connect publish". 이 skill 로 진입하더라도 **처리하지 않고** 트랙 B 에이전트 (`ds-figma-inspector`, `ds-component-implementer`, `ds-publisher`, `ds-doc-curator`) 로 위임하라고 사용자에게 안내한다.

## 트리거 예시

- `/konacard-design [Confluence URL]`
- `/konacard-design ./specs/foo.md`
- "여기 기획서 있어. 이걸로 화면 만들어줘"
- Figma 링크 붙여넣기 + "이 화면 재조립"
