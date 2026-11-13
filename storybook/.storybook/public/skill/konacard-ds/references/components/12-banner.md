> KONACARD 컴포넌트 명세(`konacard-ds-components.md`) 중 한 장. 이름 · 키 · variant 값은 `components.catalog.json` 이 기준이고, 다르면 카탈로그 · Figma 를 따른다.

# 12_Banner

> ⏳ **Figma 정리 전** — 아래 이름 · 값은 옛 기준일 수 있음. 화면에 쓸 때는 Figma(AX) · `components.catalog.json` 을 먼저 확인

> Figma 카테고리 노드: `253:1908`
> 카드 위·화면 안에 붙이는 강조 밴드. **Corner radius = 8px** 공통.

## Banner Color (6 파스텔)

- **6가지 옅은 파스텔 배경**: 옅은 회색 / 옅은 보라 / 옅은 하늘 / 옅은 민트 / 옅은 노랑 / 옅은 핑크
- **원칙**: 강조 강도는 옅은 톤으로 유지 — 배너가 CTA를 이기지 않도록 (`konacard-ds-rule.md` § "보라 한 색" 원칙)
- **색조 매핑**:
  - **브랜드 제휴 배너** (특정 브랜드 혜택·프로모션, 예: 올리브영 → 녹색): 브랜드 색조(H)에 맞추고 명도(L) 85~95% 범위 안에서 조정 (`konacard-ds-foundation.md` § color/banner 참조)
  - **그 외 일반 배너**: 옅은 보라 = 브랜드성 혜택 / 옅은 노랑 = 안내·주의 / 옅은 민트 = 성공·긍정 / 옅은 핑크 = 프로모션·이벤트

## Benefit Banner

- **용도**: **1line으로 항목과 혜택을 노출**. 케이스에 따라 상세 혜택을 확인하는 페이지로 이동 가능.
- **레이아웃** (컴팩트, 약 40~48h):
  - 좌 padding **20** → 아이콘 24 → gap **16** → **Benefit Title** (`body/1-Bold` 15px) → Fill(가변) → 우측 값(nn 개·15,500원 등 `body/1-Bold` 브랜드 보라) → gap **8** → chevron `>` → 우 padding **20**
  - 세로 padding: 상하 각 **16** (총 높이 대략 icon 24 + 16+16 = 56 컴팩트)
- **아이콘**: 좌측 카테고리 아이콘 (선물 상자·카드 등 서비스별)
- **터치 영역**: 배너 전체 (진입 있을 시)

## Action Banner

- **용도**: 텍스트 2 depth 필요한 프로모션·CTA 유도 밴드
- **원칙**:
  - **1Depth 텍스트는 최대 1line** 으로 노출
  - **2Depth 설명 문구는 최대 2line까지** 노출
- **레이아웃**:
  - 좌 padding **20** → 아이콘 24 → gap **16** → 텍스트 영역
    - **1depth Title** `body/1-Bold` 15px (1 line)
    - gap 4 → **2depth Guide Text** `body/2-Regular` 14px `color/font/tertiary` 회색 (최대 2 line)
  - → Fill 가변 → 우측 chevron `>` (`color/icon/secondary`) → 우 padding **20**
  - **세로 padding**: 상하 각 **24** (총 높이 콘텐츠에 따라 가변)
- **터치 영역**: 배너 전체 (chevron 유무 무관)

## 12_Banner 안티패턴

- ❌ Banner에 진한 브랜드 보라 채움 (반드시 파스텔 6색 중 선택 — 강조는 chevron·값 텍스트만)
- ❌ Benefit Banner에 2 line 텍스트 (반드시 1 line — 필요 시 Action Banner 사용)
- ❌ Action Banner의 2depth 3 line 이상
- ❌ Corner radius 8 외의 값
- ❌ Banner 안에 CTA 버튼 배치 (진입 시 배너 전체 터치 사용)


