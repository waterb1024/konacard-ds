---
version: "1.0"
name: KONACARD Design Foundation
description: >
  KONACARD 모바일 앱(AOS) 공통 디자인 시스템 — Foundation (토큰) 문서.
  Figma DS 파일(${FIGMA_DS_FILE_KEY})을 원본 소스로 하며,
  Claude AI 코딩 에이전트가 Figma Plugin API로 화면을 제작할 때 참조합니다.
  토큰 키는 Figma variable 원본 이름을 그대로 사용합니다 (get_variable_defs 반환값과 1:1 매칭).
verified_against_figma: "2026-07-27 - 여러 컴포넌트 인스턴스에서 get_variable_defs API로 실증 (button/input/tab/checkbox/actionbar/list/info/tooltip/banner/label)"
verification_status: |
  ✅ API 확인됨 (get_variable_defs 결과와 일치)
  ⚠️ 미확인 - Foundation 문서 페이지 기재값만 확인. 실 컴포넌트 노출 미관측
  🎨 Palette - Figma variable로 등록되지 않은 원자 팔레트 (문서용)
figma_naming_notes: |
  Figma variable 명명 규칙이 시대별로 혼재. 원본 그대로 유지 (수정 시 매칭 실패):
  1. slash 계층:    color/font/primary, radius/button/large
  2. kebab flat:     spacing-medium, radius-small, radius-button-large
  3. legacy 별칭:    base/gray-300, color/gray-tertiary, color/brand-secondary
  4. raw:            333, 000, Primary/BG_01, BG_02, UI_Error
  5. 오타 (원본):    color/button/quarternary (quaternary), color/border/primay (primary),
                    opecity/--제거/--black-65 (opacity + "제거" 접두어),
                    Subcolor/redFF364D (실 값은 FF364B)

colors:
  # ═══════════════════════════════════════════════════════════════
  # Figma variable 원본 이름을 key로 사용. semantic 카테고리로 그루핑.
  # 값 좌측 상태: ✅ API 확인 · ⚠️ 문서 기재만 · 🎨 팔레트(원자)
  # ═══════════════════════════════════════════════════════════════

  # ─── color/brand/* — 브랜드 ────────────────────────────────
  brand:
    "color/brand/primary":   "#805AE9"   # ✅ CTA · 강조 전용 (= purple-500)
    "color/brand/secondary": "#F4F0FD"   # ⚠️ 브랜드 배지 배경 (= purple-100)
    "color/brand/tertiary":  "#F8F6FE"   # ⚠️ 브랜드 약 배경 (= purple-50)

  # ─── color/base/* — 기본 흑백 및 관찰된 base 계열 ─────────
  base:
    "color/black":     "#000000"   # ⚠️
    "color/white":     "#FFFFFF"   # ⚠️
    "black":           "#000000"   # ✅ (raw alias)
    "white":           "#FFFFFF"   # ✅ (raw alias)
    "brand":           "#805AE9"   # ✅ (raw alias)
    "color/base/brand-primary": "#805AE9"   # ✅ (관측)
    "color/brand-secondary":    "#F4F0FD"   # ✅ (dash 명명 - slash "color/brand/secondary"와 병행)
    "base/green":      "#1CCEA5"   # ✅ 로고 accent 등
    "base/bg_brand":   "#F4F0FD"   # ✅ Banner에서 관측 - 브랜드 옅은 배경
    "base/bg_02":      "#F8F9FB"   # ✅ background/secondary alias
    "base/gray-300":   "#DDDDDD"   # ✅
    "base/gray-700":   "#666666"   # ✅
    "base/gray-800":   "#333333"   # ✅
    "color/gray-tertiary":   "#999999"   # ✅ (관측 - legacy 명명)
    "color/gray-quaternary": "#DDDDDD"   # ✅ (관측 - legacy 명명)
    # ⚠️ 아래는 정리(제거) 예정일 가능성 - Figma에 "제거" 접두어 관측
    # "opecity/--제거/--black-65": "#000000A6"   # ⚠️ opecity 오타 + 제거 대상

  # ─── color/font/* — 텍스트 색 ─────────────────────────────
  font:
    "color/font/primary":     "#000000"   # ✅ 본문 최상위
    "color/font/secondary":   "#333333"   # ✅ 서브 텍스트
    "color/font/tertiary":    "#666666"   # ✅ 부가·설명
    "color/font/quaternary":  "#999999"   # ✅ 힌트·비활성 라벨
    "color/font/placeholder": "#999999"   # ✅ Input placeholder (quaternary와 값 동일)
    "color/font/error":       "#FF364B"   # ✅ 오류 문구
    "color/font/brand":       "#805AE9"   # ✅ 브랜드 강조 텍스트
    "color/font/white":       "#FFFFFF"   # ✅ 채움 CTA 위 흰 텍스트

  # ─── color/neutral/* — 그레이스케일 위계 ──────────────────
  neutral:
    "color/neutral/primary":    "#333333"   # ⚠️ = gray-800
    "color/neutral/secondary":  "#666666"   # ⚠️ = gray-700
    "color/neutral/tertiary":   "#999999"   # ⚠️ = gray-500
    "color/neutral/quaternary": "#DDDDDD"   # ⚠️ = gray-300

  # ─── color/background/* — 배경 ────────────────────────────
  background:
    "color/background/primary":      "#FFFFFF"   # ✅ 기본 화면
    "color/background/secondary":    "#F8F9FB"   # ✅ 회색 카드 배경 (= coolgray-50)
    "color/background/tertiary":     "#F8F6FE"   # ⚠️ 브랜드 약 배경 (= purple-50)
    "color/background/button-brand": "#805AE9"   # ✅ 채움 CTA 배경
    "color/background/brand":        "#805AE9"   # ✅ Bubble tooltip Brand type
    "color/background/dimed":        "#000000A3"   # ✅ Popup dim overlay (~64%)

  # ─── color/surface/* — 신규 명명 규칙 (관측됨) ────────────
  surface:
    "color-surface-background-banner-brand": "#F8F6FE"   # ✅ (신규 명명 - 병행 존재 확인)

  # ─── 관측된 legacy raw 이름 (숫자·화면상 그대로) ──────────
  legacyRaw:
    "000":         "#000000"   # ✅ (관측 - deprecated 사용 지양)
    "333":         "#333333"   # ✅
    "666":         "#666666"   # ✅
    "Primary/000": "#000000"   # ✅
    "Primary/BG_01": "#FFFFFF" # ✅
    "BG_02":       "#F6F6FA"   # ✅ (⚠️ color/background/secondary #F8F9FB와 다른 값 — legacy alt)
    "Line_02":     "#EEEEEE"   # ✅
    "UI_Error":    "#FF364B"   # ✅
    "Subcolor/redFF364D": "#FF364B"   # ✅ (⚠️ 이름에 hex FF364D 오기재 - 실 값은 FF364B)

  # ─── color/button/* — 버튼 색조 별칭 ─────────────────────
  button:
    "color/button/secondary":   "#F4F0FD"   # ✅ Brand_Light 채움
    "color/button/tertiary":    "#DDDDDD"   # ✅ Gray_Line 아웃라인
    "color/button/quarternary": "#999999"   # ✅ ⚠️ Figma 원본 오타 "quarternary" 그대로 유지
    "color/button/white":       "#FFFFFF"   # ✅

  # ─── color/border/* — 테두리 ──────────────────────────────
  border:
    "color/border/default": "#DDDDDD"   # ✅ Input·Select 기본 테두리
    "color/border/focus":   "#805AE9"   # ✅ Focus·Active·Selected 테두리
    "color/border/brand":   "#805AE9"   # ✅ Bubble tooltip Brand type border
    "color/border/primay":  "#0000000F" # ✅ ⚠️ Figma 오타 "primay" (primary 아님) — 값은 divider/primary와 동일
    "color/border/error":   "#FF364B"   # ✅ Error 상태 테두리

  # ─── color/icon/* — 아이콘 색조 ──────────────────────────
  icon:
    "color/icon/secondary":    "#333333"   # ✅ 기본 아이콘
    "color/icon/tertiary":     "#666666"   # ✅ 서브 아이콘
    "color/icon/quaternary":   "#999999"   # ✅ 비활성·힌트
    "color/icon/quinary":      "#DDDDDD"   # ✅ 매우 옅은 아이콘 (clear 원형 배경 등)
    "color/icon/brand":        "#805AE9"   # ✅ 브랜드 아이콘
    "color/icon/white":        "#FFFFFF"   # ✅ 채움 배경 위 흰 아이콘
    "color/icon/accent-red":   "#FF364B"   # ✅ 오류 아이콘
    "color/icon/accent-green": "#1CCEA5"   # ✅ 성공 아이콘
    "color/icon/accent-blue":  "#589CF6"   # ✅ 정보 아이콘
    "color/icon/primary":      "#000000"   # ✅ 기본 아이콘 검정

  # ─── color/divider/* — 구분선 ─────────────────────────────
  divider:
    "color/divider/primary":   "#0000000F"   # ✅ black 6%
    "color/divider/secondary": "#00000014"   # ✅ black 8%
    "color/divider/tertiary":  "#0000001F"   # ⚠️ black 12%
    "color/divider/white":     "#FFFFFF"     # ⚠️

  # ─── color/accent/* — 상태 색상 ───────────────────────────
  # ⚠️ 주의: accent 계열은 실 컴포넌트에서 color/icon/accent-red|green|blue로 관측됨.
  # color/accent/* 이름 자체는 Figma 변수로 등록되어 있지 않음 (Foundation 페이지 기재용 이름).
  accent:
    "color/accent/primary":   "#FF364B"   # ⚠️ 오류·취소 (= red-500) — 실사용은 color/icon/accent-red
    "color/accent/secondary": "#589CF6"   # ⚠️ 정보 (= blue-500) — 실사용은 color/icon/accent-blue
    "color/accent/tertiary":  "#1CCEA5"   # ⚠️ 성공 (= green-500) — 실사용은 color/icon/accent-green

  # ─── color/label/* — 라벨 색상 (관측됨) ─────────────────
  label:
    "color/label/white":            "#FFFFFF"   # ✅
    "color/label/neutral-tertiary": "#999999"   # ✅
    "color/label/neutral-secondary": "#666666"  # ✅

  # ─── color/gradient/* — 그라디언트 ────────────────────
  gradient:
    "color/gradient/primary":   ["#804EE2", "#526ED3"]   # ⚠️ 보라 → 청보라
    "color/gradient/secondary": ["#00BB5A", "#5978EA"]   # ⚠️ 초록 → 파랑
    "color/gradient/tertiary":  ["#FF364B", "#FF1493"]   # ⚠️ 레드 → 핑크
    # "gradient/primary":       ""   # ✅ (Button에서 관측 - 값 empty로 노출)

  # ─── color/banner/* — 배너 파스텔 배경 ──────────────────
  # 아래 hex는 Figma 변수 기본값. 실제 배너는 브랜드 색조(H)에 맞춰 명도(L) 85~95% 범위 안에서 조정해 사용 (채도 S는 고정값 없음).
  banner:
    "color/banner/brand":  "#F8F6FE"   # ⚠️ (= purple-50)
    "color/banner/gray":   "#F8F9FB"   # ⚠️ (= coolgray-50)
    "color/banner/blue":   "#F0F6FE"   # ⚠️ (= blue-50)
    "color/banner/green":  "#EFFCF9"   # ⚠️ (= green-50)
    "color/banner/yellow": "#FFFBDF"   # ✅
    "color/banner/pink":   "#FFEFF1"   # ⚠️ (= red-50)

  # ═══════════════════════════════════════════════════════════════
  # 🎨 Palette (원자 토큰 — 50 → 900, 9단계)
  # ⚠️ Figma variable로 등록 확인 안 됨 (Foundation 문서 페이지에만 기재).
  # semantic 토큰이 없을 때만 직접 참조하며, 코드에서 palette 이름으로
  # variable 조회 시 실패할 가능성 있음.
  # ═══════════════════════════════════════════════════════════════
  palette:
    purple:
      "50":  "#F8F6FE"
      "100": "#F4F0FD"
      "200": "#ECE6FC"
      "300": "#BFADF4"
      "400": "#997BED"
      "500": "#805AE9"   # ★ = color/brand/primary
      "600": "#6648BA"
      "700": "#523A95"
      "800": "#33245D"
      "900": "#1B1138"
    red:
      "50":  "#FFEFF1"
      "100": "#FFE2E5"
      "200": "#FFCCD1"
      "300": "#FF9BA5"
      "400": "#FF5E6F"
      "500": "#FF364B"   # ★ = color/accent/primary, color/font/error
      "600": "#CC2B3C"
      "700": "#99202D"
      "800": "#59131A"
      "900": "#330B0F"
    blue:
      "50":  "#F0F6FE"
      "100": "#E6F0FE"
      "200": "#D5E6FD"
      "300": "#B9D6FB"
      "400": "#8ABAF9"
      "500": "#589CF6"   # ★ = color/accent/secondary
      "600": "#4F8CDD"
      "700": "#3965A0"
      "800": "#233E62"
      "900": "#121F31"
    green:
      "50":  "#EFFCF9"
      "100": "#DEF8F2"
      "200": "#C8F3E9"
      "300": "#A4EBDB"
      "400": "#77E2C9"
      "500": "#1CCEA5"   # ★ = color/accent/tertiary, base/green
      "600": "#159A7C"
      "700": "#0D634F"
      "800": "#083E31"
      "900": "#041F19"
    yellow:
      "50":  "#FFFBDF"   # ★ = color/banner/yellow
      "100": "#FEF9C3"
      "200": "#FEF08A"
      "300": "#FDE047"
      "400": "#FACC15"
      "500": "#EAB308"
      "600": "#CA8A04"
      "700": "#A16207"
      "800": "#764004"
      "900": "#462304"
    gray:
      "50":  "#F8F8F8"
      "100": "#F4F4F4"
      "200": "#EEEEEE"
      "300": "#DDDDDD"   # ★ = color/neutral/quaternary, color/border/default
      "400": "#BDBDBD"
      "500": "#999999"   # ★ = color/neutral/tertiary, color/font/placeholder
      "600": "#757575"
      "700": "#666666"   # ★ = color/neutral/secondary, color/font/tertiary
      "800": "#333333"   # ★ = color/neutral/primary, color/font/secondary
      "900": "#1C1C1C"
    coolgray:
      "50":  "#F8F9FB"   # ★ = color/background/secondary, color/banner/gray
      "100": "#F0F1F3"
      "200": "#DADDE0"
      "300": "#C7CBD0"
      "400": "#A9AEB5"
      "500": "#92989D"
      "600": "#6E7276"
      "700": "#585B5E"
      "800": "#333537"
      "900": "#1D1E1F"

typography:
  # ═══════════════════════════════════════════════════════════════
  # Figma variable 원본 이름을 key로. 계층별 하위 그루핑.
  # ═══════════════════════════════════════════════════════════════

  # ─── font/family/* ────────────────────────────────────────
  family:
    "font/family/body":    "pretendard"   # ✅ 웹·Figma 기본
    "font/family/heading": "pretendard"   # ✅

  # OS 네이티브 폰트 매핑 (Figma 변수 아님, 참고용)
  osNativeFallback:
    android:   "Noto Sans KR | Roboto"          # KR | EN/Number
    ios:       "Apple SD Gothic Neo | San Francisco"

  # ─── font/weight/* ────────────────────────────────────────
  weight:
    "font/weight/regular": 400   # ✅ 가이드 17종 사용
    "font/weight/bold":    700   # ✅ 가이드 17종 사용
    # Figma 변수에는 medium · semibold 도 있음 — 가이드 밖 (display/*-medium 만 사용, KeyScreen 0곳)

  # ─── font/size/* — 사이즈 스케일 ─────────────────────────
  size:
    "font/size/2xsmall":         11   # ✅
    "font/size/xsmall":          12   # ✅
    "font/size/small":           14   # ✅
    "font/size/medium":          15   # ✅
    "font/size/large":           18   # ✅
    "font/size/xlarge":          20   # ✅
    "font/size/2xlarge":         24   # ✅
    # display/* — 변수는 있으나 가이드 17종 밖 (display 텍스트 스타일 전용)
    "font/size/display/small":   28   # ✅ Figma 변수
    "font/size/display/medium":  32   # ✅ Figma 변수
    "font/size/display/large":   36   # ✅ Figma 변수
    "font/size/display/xlarge":  40   # ✅ Figma 변수

  # ─── font/lineheight/* ────────────────────────────────────
  lineheight:
    "font/lineheight/2xsmall":         16   # ✅
    "font/lineheight/xsmall":          18   # ✅
    "font/lineheight/small":           22   # ✅
    "font/lineheight/medium":          24   # ✅
    "font/lineheight/large":           26   # ✅
    "font/lineheight/xlarge":          28   # ✅
    "font/lineheight/2xlarge":         32   # ✅
    "font/lineheight/display/small":   36   # ✅
    "font/lineheight/display/medium":  40   # ✅
    "font/lineheight/display/large":   44   # ✅
    "font/lineheight/display/xlarge":  50   # ✅

  # ─── font/letterspacing/* (px 단위 음수) ────────────────
  letterspacing:
    "font/letterspacing/2xsmall":         -0.22   # ✅
    "font/letterspacing/xsmall":          -0.24   # ✅
    "font/letterspacing/small":           -0.28   # ✅
    "font/letterspacing/medium":          -0.30   # ✅
    "font/letterspacing/large":           -0.36   # ✅
    "font/letterspacing/xlarge":          -0.40   # ✅
    "font/letterspacing/2xlarge":         -0.48   # ✅
    "font/letterspacing/display/small":   -0.56   # ✅
    "font/letterspacing/display/medium":  -0.64   # ✅
    "font/letterspacing/display/large":   -0.72   # ✅
    "font/letterspacing/display/xlarge":  -0.80   # ✅
    "font/letterspacing/none":             0      # ✅ (guide/* 문서용 스타일)
  # 규칙: letterSpacing = size × -0.02

  # ─── Text style composite tokens (Figma 조합 스타일) ────
  # get_variable_defs에서 이 key로 노출됨. 하위 변수 조합값.
  styles:
    "heading/1-bold":     { size: 24, lineHeight: 32, letterSpacing: -0.48, weight: 700 }   # ✅
    "heading/1-regular":  { size: 24, lineHeight: 32, letterSpacing: -0.48, weight: 400 }   # ✅
    "heading/2-bold":     { size: 20, lineHeight: 28, letterSpacing: -0.40, weight: 700 }   # ✅
    "heading/2-regular":  { size: 20, lineHeight: 28, letterSpacing: -0.40, weight: 400 }   # ✅
    "heading/3-bold":     { size: 18, lineHeight: 26, letterSpacing: -0.36, weight: 700 }   # ✅
    "heading/3-regular":  { size: 18, lineHeight: 26, letterSpacing: -0.36, weight: 400 }   # ✅
    "body/1-Bold":        { size: 15, lineHeight: 24, letterSpacing: -0.30, weight: 700 }   # ✅
    "body/1-regular":     { size: 15, lineHeight: 24, letterSpacing: -0.30, weight: 400 }   # ✅
    "body/2-bold":        { size: 14, lineHeight: 22, letterSpacing: -0.28, weight: 700 }   # ✅
    "body/2-Regular":     { size: 14, lineHeight: 22, letterSpacing: -0.28, weight: 400 }   # ✅
    "body/3-Bold":        { size: 12, lineHeight: 18, letterSpacing: -0.24, weight: 700 }   # ✅
    "body/3-Regular":     { size: 12, lineHeight: 18, letterSpacing: -0.24, weight: 400 }   # ✅
    "body/4-Bold":        { size: 11, lineHeight: 16, letterSpacing: -0.22, weight: 700 }   # ✅
    "body/4-Regular":     { size: 11, lineHeight: 16, letterSpacing: -0.22, weight: 400 }   # ✅ (Figma 이름 대문자 R)
    "button/large-bold":  { size: 15, lineHeight: 24, letterSpacing: -0.30, weight: 700 }   # ✅
    "button/medium-bold": { size: 14, lineHeight: 22, letterSpacing: -0.28, weight: 700 }   # ✅
    "button/small-bold":  { size: 12, lineHeight: 18, letterSpacing: -0.24, weight: 700 }   # ✅ 가이드 button-small (button/button 컴포넌트는 미사용)
    # ↑ 여기까지 Typography 가이드(296:3051) 17종. 아래는 가이드 밖 등록 스타일
    "button/medium-regular": { size: 14, lineHeight: 22, letterSpacing: -0.28, weight: 400 }   # ✅ 가이드 밖 (secondary large)
    "button/small-regular": { size: 12, lineHeight: 18, letterSpacing: -0.24, weight: 400 }   # ✅ AX 실측 (secondary medium·small)
    "button/tiny-regular":  { size: 11, lineHeight: 16, letterSpacing: -0.22, weight: 400 }   # ✅ 가이드 밖 (secondary tiny)
    "button/tiny-bold":     { size: 11, lineHeight: 16, letterSpacing: -0.22, weight: 700 }   # ✅ 가이드 밖 · KeyScreen 0곳
    # display/{1,2,3,4}-{bold,medium,regular} 12종 — 40/50 · 36/44 · 32/40 · 28/36, 가이드 밖
    # guide/detail-size (10/16 Bold) · guide/token-bold · guide/token-regular (13/20) — DS 가이드 문서 작성용
    # ⚠️ heading/*, body/*, button/* 이름은 API 반환값 기준 (대소문자 혼용 그대로 유지)
    #    "body/1-Bold" "body/3-Bold" "body/4-Bold" = capital B / "body/2-bold" = lowercase b
    #    "body/1-regular" = lowercase r / "body/2-Regular" "body/3-Regular" "body/4-Regular" = capital R

spacing:
  # ═══════════════════════════════════════════════════════════════
  # Scale tokens — Figma variable 원본 이름 그대로.
  # kebab-case로 flat 네임스페이스 (color/font/*와 다른 명명 규칙).
  # ═══════════════════════════════════════════════════════════════
  scale:
    "spacing-none":     0    # ✅ 간격 없음
    "spacing-3xsmall":  2    # ✅ 매우 좁은 간격
    "spacing-2xsmall":  4    # ✅ 좁은 간격
    "spacing-xsmall":   8    # ✅ 일반 간격
    "spacing-small":    12   # ✅ ★ base — 컨텐츠 구분
    "spacing-medium":   16   # ✅ 컨텐츠/그룹 구분
    "spacing-large":    20   # ✅ ★ layout margin (변경불가)
    "spacing-xlarge":   24   # ✅ ★ base — 컨텐츠/본문 여백
    "spacing-2xlarge":  32   # ✅ 넓은 여백
    "spacing-3xlarge":  40   # ✅ 그룹 명확 구분

    # 디스플레이용 큰 마진 (배너·인트로 등) — 실제 경로는 spacing/display/{medium|large|xlarge|2xlarge}
    "spacing-display-medium":    48   # ✅ = spacing/display/medium
    "spacing-display-margin-l":  60   # ✅ = spacing/display/large
    "spacing-display-margin-xl": 80   # ✅ = spacing/display/xlarge
    "spacing-display-2xlarge":   120  # ✅ = spacing/display/2xlarge

  # ─── layout/* — 시맨틱 별칭 ──────────────────────────────
  layout:
    "layout/margin":     20   # ✅ = spacing-large (화면 좌우 padding)
    "layout/margin-top": 24   # ✅ = spacing-xlarge (Headline 등 상단)

  # ─── 파생 값 (Figma variable 아님, 계산·관례) ────────────
  derived:
    screen-h-padding: 20      # = layout/margin
    content-width: 320        # = 360 - (layout/margin × 2)
    input-gap: 32             # = spacing-2xlarge — 필드 묶음(라벨+입력창) 간 세로 간격. 묶음 내부(라벨↔입력창·입력창↔입력창·입력창↔안내문구)는 spacing-xsmall 8
    list-item-height: 65      # list/list size=large 한 줄 높이 (medium link 55 / control 57 / button 65)
    card-padding: 24          # = spacing-xlarge — 정보 박스 내부 패딩

radius:
  # ═══════════════════════════════════════════════════════════════
  # Figma 변수 이름 그대로 (2026-10-23 Radius 가이드 481:3296 · 로컬 변수 대조)
  # 가이드 표기($radius-form 등)와 변수 이름(radius/components/form 등)이 다름 → 아래는 변수 이름
  # ═══════════════════════════════════════════════════════════════
  scale:                         # collection _Theme (unit/* 참조)
    "radius/none":     0
    "radius/2xsmall":  4      # ✅ 최소 버튼
    "radius/xsmall":   6      # ✅ 입력폼 · 본문 내 버튼
    "radius/small":    8      # ✅ 페이지 중요 액션 버튼
    "radius/medium":   12     # ✅ base — 본문 내 박스형 컨텐츠
    "radius/large":    16     # ✅ 팝업
    "radius/xlarge":   24     # ✅ base — 버텀시트
    "radius/2xlarge":  32     # ✅ 홈 메인 상/하단 구분 박스
    "radius/round":    9999   # ✅ 가이드 표기 50% — 레이블 · 라운드 버튼

  button:                        # collection Component — 가이드 Buttons
    "radius/button/large":  8      # = radius/small
    "radius/button/medium": 6      # = radius/xsmall
    "radius/button/small":  4      # = radius/2xsmall
    "radius/button/round":  9999   # = radius/round

  components:                    # collection Component — 가이드 Layout (가이드 표기)
    "radius/components/form":         6    # $radius-form
    "radius/components/box-contents": 12   # $radius-contents
    "radius/components/toast":        12   # $radius-toast
    "radius/components/popup":        16   # $radius-popup
    "radius/components/bottomsheet":  24   # $radius-bottomsheet
    "radius/components/label":        9999 # $radius-label
    # ↓ 가이드 표에 없는 변수
    "radius/components/form-small":   4
    "radius/components/box-button":   8    # card-select 등
    "radius/components/box-info":     8    # Banner · Bubble tooltip
    "radius/components/box-container":24

  banner:                        # ⚠ 값이 spacing/* 변수를 가리킴
    "radius/banner/small":  8      # → spacing/xsmall
    "radius/banner/medium": 12     # → spacing/small
    "radius/banner/large":  16     # → spacing/medium
    "radius/banner/xlarge": 24     # → spacing/xlarge

opacity:
  # ═══════════════════════════════════════════════════════════════
  # opacity/* — 투명도 토큰
  # ═══════════════════════════════════════════════════════════════
  "opacity/visible":        100   # ✅ 완전 불투명
  "opacity/invisible":      0     # ✅ 완전 투명
  "opacity/disable/button": 40    # ✅ Button/Control disable = Default × 40%

# Figma DS 파일 고정 키 (importComponentByKeyAsync 등에 사용)
figma:
  dsFileKey: "${FIGMA_DS_FILE_KEY}"

components:
  status-bar:
    height: 24px
    variants: "Color=Black, Type=AOS"
  action-bar-header:
    height: 56px
    variants: "type=main | page_icon | page_button | old"
  action-bar-headline:
    variants: "type=1line | 2line"
  button-primary:
    variants: "size=large/medium, type=brand/gray-light"
  button-fixed-bottom:
    height: 72px
    variants: "Device=AOS"
  list-list:
    height: 65px
    variants: "size=large, type=link/control"
  line-solid:
    note: "ComponentSet — importComponentSetByKeyAsync 사용"
    variants: "color=light | dark"
  line-divider:
    height: 10px
    variants: "color=light"
  info-contents:
    variants: "size=medium, type=regular/mixed"
---

# KONACARD Design System

> **AI 에이전트 참조 문서** — Figma Plugin API로 KONACARD AOS 화면을 제작하는 Claude 코딩 에이전트가 참조하는 디자인 시스템 명세입니다.  
> 원본 DS Figma 파일: `${FIGMA_DS_FILE_KEY}`  
> 작업 대상 파일: 세션마다 사용자가 공유하는 Figma URL에서 추출

---

## Overview

KONACARD는 한국의 선불카드·포인트 결제 플랫폼입니다. 디자인 언어는 **신뢰와 간결함**을 우선합니다.

- 🚨 **DS 컴포넌트 사용이 최우선 원칙입니다.** 화면을 만들 때는 반드시 DS 파일(`${FIGMA_DS_FILE_KEY}`)에 동일/유사한 컴포넌트가 있는지 **먼저 확인**하고, 있다면 무조건 그 인스턴스를 사용합니다. 직접 그리거나 autoLayout으로 새로 만드는 것은 **DS에 매칭되는 컴포넌트가 정말로 없을 때만** 허용됩니다. → 자세한 워크플로는 [§ Component-First Principle](#component-first-principle) 참조.
- **브랜드 퍼플 (`#805AE9`)** 이 유일한 액션 컬러입니다. CTA 버튼, 강조 텍스트, 헤드라인 일부에만 사용하며, 다른 용도로는 절대 사용하지 않습니다.
- **흰색 배경** (`background/primary` = `#FFFFFF`) 이 기본입니다. 섹션 분리에는 `background/secondary` (`#F8F9FB`, coolgray-50), 브랜드 약배경에는 `background/tertiary` (`#F8F6FE`, purple-50)를 사용합니다.
- **Pretendard** 폰트 전용입니다. 다른 폰트(Roboto 등)가 컴포넌트 내에 나타나면 DS 텍스트 스타일로 교체하세요.
- 화면 구조는 항상 **OS/status-bar → action-bar/header → content → button/fixed-bottom** 순서를 따릅니다.

---

## Colors

컬러는 **의미 기반(semantic) 토큰**과 **원자(palette) 토큰** 두 층으로 구성됩니다.
화면 제작 시에는 반드시 **의미 기반 토큰을 우선**하고, 원자 토큰은 의미 토큰이 없는 경우에만 직접 참조합니다.

> 출처: Figma DS `${FIGMA_DS_FILE_KEY}` / Color Guide (node 296:3042)
> **토큰 이름은 Figma variable 원본 그대로** 표기합니다 (예: `color/font/tertiary`). `get_variable_defs` 반환값과 1:1 매칭.
> **⚠️ Figma 원본 오타** — `color/button/quarternary` (실제 quaternary) 등은 원본명 그대로 유지 (수정 시 매칭 실패).

### 1) Brand — `color/brand/*`

| 토큰 | Hex | Palette | 용도 |
|------|-----|---------|------|
| `color/brand/primary` | `#805AE9` | purple-500 | 유일한 액션 컬러 — CTA, 강조, 링크 |
| `color/brand/secondary` | `#F4F0FD` | purple-100 | 브랜드 배지/태그 배경 |
| `color/brand/tertiary` | `#F8F6FE` | purple-50 | 브랜드 약 배경, 카드 배경 |

### 2) Base & Font — `color/black`, `color/white`, `color/font/*`

| 토큰 | Hex | 용도 |
|------|-----|------|
| `color/black` | `#000000` | 최상위 컨트라스트 |
| `color/white` | `#FFFFFF` | 기본 화면/카드 배경 |
| `color/font/primary` | `#000000` | 본문/타이틀 기본 텍스트 |
| `color/font/secondary` | `#333333` | 서브 텍스트, 캡션 |
| `color/font/tertiary` | `#666666` | 부가·설명 텍스트 |
| `color/font/quaternary` | `#999999` | 힌트·비활성 라벨 |
| `color/font/placeholder` | `#999999` | Input placeholder (quaternary와 값 동일) |
| `color/font/brand` | `#805AE9` | 브랜드 강조 텍스트 |
| `color/font/error` | `#FF364B` | 오류 문구 |
| `color/font/white` | `#FFFFFF` | 채움 CTA 위 흰 텍스트 |
| `base/green` | `#1CCEA5` | (관측) 로고 accent 등 |
| `base/bg_brand` | `#F4F0FD` | (관측) 배너 브랜드 옅은 배경 |

### 3) Neutral (텍스트·아이콘 위계) — `color/neutral/*`

| 토큰 | Hex | Palette | 위계 |
|------|-----|---------|------|
| `color/neutral/primary` | `#333333` | gray-800 | 1차 — 본문 텍스트 |
| `color/neutral/secondary` | `#666666` | gray-700 | 2차 — 보조 텍스트 |
| `color/neutral/tertiary` | `#999999` | gray-500 | 3차 — 플레이스홀더, 비활성 |
| `color/neutral/quaternary` | `#DDDDDD` | gray-300 | 4차 — 비활성 배경, 약구분 |

### 4) Background / Surfaces — `color/background/*`

| 토큰 | Hex | Palette | 용도 |
|------|-----|---------|------|
| `color/background/primary` | `#FFFFFF` | white | 기본 화면 |
| `color/background/secondary` | `#F8F9FB` | coolgray-50 | 섹션 분리, 카드 그룹 배경 |
| `color/background/tertiary` | `#F8F6FE` | purple-50 | 브랜드 영역 약배경 |
| `color/background/button-brand` | `#805AE9` | purple-500 | 채움 CTA 배경 |
| `color/background/brand` | `#805AE9` | purple-500 | Bubble tooltip Brand type |
| `color/background/dimed` | `#000000A3` | — | Popup 배경 dim overlay (~64%) |
| `color-surface-background-banner-brand` | `#F8F6FE` | purple-50 | (신규 명명 - 병행 존재) |

### 5) Button 색조 별칭 — `color/button/*`

| 토큰 | Hex | 용도 |
|------|-----|------|
| `color/button/secondary` | `#F4F0FD` | Brand_Light 채움 |
| `color/button/tertiary` | `#DDDDDD` | Gray_Line 아웃라인 |
| `color/button/quarternary` | `#999999` | ⚠️ 오타 그대로 (quaternary 아님) — 비활성 텍스트 |
| `color/button/white` | `#FFFFFF` | 흰 채움 |

### 6) Border — `color/border/*`

| 토큰 | Hex | 용도 |
|------|-----|------|
| `color/border/default` | `#DDDDDD` | Input·Select 기본 테두리 |
| `color/border/focus` | `#805AE9` | Focus·Active·Selected 테두리 |
| `color/border/brand` | `#805AE9` | Bubble tooltip Brand type border |
| `color/border/primay` | `#0000000F` | ⚠️ **Figma 오타 "primay"** (primary 아님, 값은 divider/primary와 동일) |

### 7) Icon — `color/icon/*`

| 토큰 | Hex | 용도 |
|------|-----|------|
| `color/icon/secondary` | `#333333` | 기본 아이콘 |
| `color/icon/tertiary` | `#666666` | 서브 아이콘 |
| `color/icon/quaternary` | `#999999` | 비활성·힌트 |
| `color/icon/quinary` | `#DDDDDD` | 매우 옅은 아이콘 (clear 원형 배경 등) |
| `color/icon/brand` | `#805AE9` | 브랜드 아이콘 |
| `color/icon/white` | `#FFFFFF` | 채움 배경 위 흰 아이콘 |
| `color/icon/accent-red` | `#FF364B` | 오류 아이콘 |
| `color/icon/accent-green` | `#1CCEA5` | 성공 아이콘 |
| `color/icon/accent-blue` | `#589CF6` | 정보 아이콘 |

### 8) Line & Divider — `color/divider/*`

| 토큰 | Value | 비고 |
|------|-------|------|
| `color/divider/primary` | `#000000` 6% (`#0000000F`) | 기본 구분선 — 리스트, 카드 |
| `color/divider/secondary` | `#000000` 8% (`#00000014`) | 약간 진한 구분선 |
| `color/divider/tertiary` | `#000000` 12% (`#0000001F`) | 강조 구분선, 입력 필드 |
| `color/divider/white` | `#FFFFFF` | 다크/컬러 배경 위 구분선 |

### 9) Accent (상태) — `color/accent/*`

⚠️ **주의**: `color/accent/*` 이름 그대로는 Figma 변수로 등록되어 있지 않음 (문서 페이지 기재용 이름). 실 컴포넌트에서는 아래 표의 대체 토큰 사용.

| 문서 토큰 | Hex | Palette | 의미 | 실사용 대체 (API 확인) |
|------|-----|---------|------|------------------------|
| `color/accent/primary` | `#FF364B` | red-500 | 오류, 취소, 경고 | `color/icon/accent-red`, `color/font/error`, `UI_Error` |
| `color/accent/secondary` | `#589CF6` | blue-500 | 정보 | `color/icon/accent-blue` |
| `color/accent/tertiary` | `#1CCEA5` | green-500 | 성공, 완료 | `color/icon/accent-green`, `base/green` |

### 9-1) Label — `color/label/*`

| 토큰 | Hex | 용도 |
|------|-----|------|
| `color/label/white` | `#FFFFFF` | Fill Label 위 흰 텍스트 |
| `color/label/neutral-secondary` | `#666666` | Neutral 라벨 텍스트 |
| `color/label/neutral-tertiary` | `#999999` | 옅은 라벨 텍스트 |

### 10) Gradient — `color/gradient/*`

| 토큰 | Start → End | 용도 |
|------|-------------|------|
| `color/gradient/primary` | `#804EE2` → `#526ED3` | 브랜드 강조 배너, 프리미엄 카드 |
| `color/gradient/secondary` | `#00BB5A` → `#5978EA` | 보조 강조 |
| `color/gradient/tertiary` | `#FF364B` → `#FF1493` | 이벤트, 프로모션 |

### 11) Banner (정보 배너 약배경) — `color/banner/*`

| 토큰 | Hex | Palette |
|------|-----|---------|
| `color/banner/brand` | `#F8F6FE` | purple-50 |
| `color/banner/gray` | `#F8F9FB` | coolgray-50 |
| `color/banner/blue` | `#F0F6FE` | blue-50 |
| `color/banner/green` | `#EFFCF9` | green-50 |
| `color/banner/yellow` | `#FFFBDF` | yellow-50 |
| `color/banner/pink` | `#FFEFF1` | red-50 |

### 12) Legacy / Alternate 이름 (관측됨)

Figma 파일에는 시대별로 병행 사용되는 **legacy 이름**과 **raw 이름**이 남아있습니다. 신규 코드는 상단 `color/font/*`, `color/background/*`, `color/border/*` 등 정식 이름을 우선 사용하되, 컴포넌트 API 조회 시 아래 이름이 반환될 수 있음을 인지합니다.

| Legacy 이름 | Hex | 정식 대체 (권장) |
|---|---|---|
| `black` | `#000000` | `color/black`, `color/font/primary` |
| `white` | `#FFFFFF` | `color/white`, `color/background/primary` |
| `brand` | `#805AE9` | `color/brand/primary` |
| `color/base/brand-primary` | `#805AE9` | `color/brand/primary` |
| `color/brand-secondary` | `#F4F0FD` | `color/brand/secondary` (dash 사용은 legacy) |
| `base/bg_brand` | `#F4F0FD` | `color/brand/secondary` |
| `base/bg_02` | `#F8F9FB` | `color/background/secondary` |
| `base/gray-300` | `#DDDDDD` | `color/neutral/quaternary` |
| `base/gray-700` | `#666666` | `color/neutral/secondary` |
| `base/gray-800` | `#333333` | `color/neutral/primary` |
| `color/gray-tertiary` | `#999999` | `color/neutral/tertiary` |
| `color/gray-quaternary` | `#DDDDDD` | `color/neutral/quaternary` |
| `000`, `Primary/000` | `#000000` | `color/font/primary` |
| `333` | `#333333` | `color/font/secondary` |
| `666` | `#666666` | `color/font/tertiary` |
| `Primary/BG_01` | `#FFFFFF` | `color/background/primary` |
| `BG_02` | `#F6F6FA` | ⚠️ `color/background/secondary`(#F8F9FB)와 다른 값 — 별개 legacy 자산 |
| `Line_02` | `#EEEEEE` | (아이콘 페이지 구분선 등 legacy) |
| `UI_Error` | `#FF364B` | `color/font/error` |
| `Subcolor/redFF364D` | `#FF364B` | ⚠️ 이름에 `FF364D` 오기재 — 실 값은 `FF364B` |
| `opecity/--제거/--black-65` | `#000000A6` | ⚠️ `opecity` 오타 + "제거" 접두어 → 사용 지양 (제거 예정) |

---

### Color Palette (원자 토큰 — 9단계: 50 → 900)

각 컬러 패밀리는 50(가장 옅음) ~ 900(가장 진함) 9단계로 구성됩니다.
★ 표시는 의미 기반 토큰이 직접 참조하는 단계입니다.

**purple** (브랜드 컬러)

| 50 | 100 | 200 | 300 | 400 | 500 ★ | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|
| `#F8F6FE` | `#F4F0FD` | `#ECE6FC` | `#BFADF4` | `#997BED` | `#805AE9` | `#6648BA` | `#523A95` | `#33245D` | `#1B1138` |

**red**

| 50 | 100 | 200 | 300 | 400 | 500 ★ | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|
| `#FFEFF1` | `#FFE2E5` | `#FFCCD1` | `#FF9BA5` | `#FF5E6F` | `#FF364B` | `#CC2B3C` | `#99202D` | `#59131A` | `#330B0F` |

**blue**

| 50 | 100 | 200 | 300 | 400 | 500 ★ | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|
| `#F0F6FE` | `#E6F0FE` | `#D5E6FD` | `#B9D6FB` | `#8ABAF9` | `#589CF6` | `#4F8CDD` | `#3965A0` | `#233E62` | `#121F31` |

**green**

| 50 | 100 | 200 | 300 | 400 | 500 ★ | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|
| `#EFFCF9` | `#DEF8F2` | `#C8F3E9` | `#A4EBDB` | `#77E2C9` | `#1CCEA5` | `#159A7C` | `#0D634F` | `#083E31` | `#041F19` |

**yellow**

| 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|
| `#FFFBDF` | `#FEF9C3` | `#FEF08A` | `#FDE047` | `#FACC15` | `#EAB308` | `#CA8A04` | `#A16207` | `#764004` | `#462304` |

**gray** (중성 — 의미 토큰의 백본)

| 50 | 100 | 200 | 300 ★ | 400 | 500 ★ | 600 | 700 ★ | 800 ★ | 900 |
|---|---|---|---|---|---|---|---|---|---|
| `#F8F8F8` | `#F4F4F4` | `#EEEEEE` | `#DDDDDD` | `#BDBDBD` | `#999999` | `#757575` | `#666666` | `#333333` | `#1C1C1C` |

**coolgray** (배경 전용 — 푸른빛이 도는 회색)

| 50 ★ | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 |
|---|---|---|---|---|---|---|---|---|---|
| `#F8F9FB` | `#F0F1F3` | `#DADDE0` | `#C7CBD0` | `#A9AEB5` | `#92989D` | `#6E7276` | `#585B5E` | `#333537` | `#1D1E1F` |

---

### 사용 규칙

- **`color/brand/primary` (`#805AE9`)** 는 CTA 버튼과 핵심 강조에만 사용 — 배경 전체에 깔거나 본문 텍스트에 사용 금지
- **`color/accent/primary` (red-500)** 는 "구매 취소", 오류 메시지 등 상태 표시 전용 — 장식 목적 사용 금지
- 텍스트/아이콘 위계는 **반드시 `color/neutral/*` 또는 `color/font/*` semantic 토큰**으로 — 직접 palette gray-\* 참조 지양
- 배경은 `color/background/primary` (white)가 기본, 섹션 분리 시 `color/background/secondary` (coolgray-50)
- 정보 배너 배경은 `color/banner/*` 토큰 사용 — 패밀리 50 단계를 직접 참조하지 말 것
- 구분선은 모두 **black + alpha** (`color/divider/*`) 사용 — solid gray 직접 사용 금지
- 컬러 변수는 **임의로 추가·변경할 수 없습니다** (DS 공통 자산)
- **Plugin API에서 variable 참조 시 반드시 원본 이름** (예: `figma.variables.getVariableByIdAsync` 또는 `getBoundVariablesAsync` 반환값의 slash 형태 이름)을 그대로 사용

---

## Typography

> 출처: Figma DS `${FIGMA_DS_FILE_KEY}` / Typography 가이드 (node 296:3051) — 2026-10-22 가이드 기준으로 다시 맞춤

서체 또한 사용자와 커뮤니케이션하는 매우 중요 요소이므로, 정보의 목적과 기능에 따라 최적의 서체를 적용합니다.
이를 위해 특수한 경우를 제외하고 시스템(OS) 최적화 폰트를 적용하도록 합니다.

### Typeface

개발환경에 최적화 되도록 OS 기본 서체를 사용합니다. (단, 디자인 파일 및 가이드는 코나아이 지정 서체인 프리텐다드 폰트로 제작/공유합니다.)

| 플랫폼 | 국문 | 영문 / 숫자 |
|--------|------|-------------|
| Android | 노토산스 (Noto Sans KR) | Roboto |
| iOS | 애플네오고딕 (Apple SD Gothic Neo) | San Francisco |
| **웹 · 디자인 컨텐츠 전반** | Pretendard | Pretendard |

지원 굵기: **Regular (400)** / **Bold (700)** — 가이드 17종이 이 두 굵기만 씀.

### Font Size (가이드 17종)

일관된 브랜드 경험과 사용성을 유지하기 위해 아래 제시된 가이드 이외의 폰트 사용을 지양합니다.
스타일 이름은 Figma 텍스트 스타일 원본(대소문자 그대로), 설명은 가이드 Example 열 그대로.

| 스타일 | Value | size / lh / ls | 굵기 | 사용처 (가이드) |
|--------|-------|----------------|------|-----------------|
| `heading/1-bold` | 24 | 24 / 32 / -0.48 | Bold | 타이틀 및 서비스 중요 문구에 사용합니다. |
| `heading/1-regular` | 24 | 24 / 32 / -0.48 | Regular | 서비스 중요 문구에 사용합니다. |
| `heading/2-bold` | 20 | 20 / 28 / -0.40 | Bold | 버텀 팝업 타이틀과 서비스 중요 문구에 사용합니다. |
| `heading/2-regular` | 20 | 20 / 28 / -0.40 | Regular | 컨텐츠 타이틀 및 서비스 중요 문구에 사용합니다. |
| `heading/3-bold` | 18 | 18 / 26 / -0.36 | Bold | 본문 내 중요 문구와 타이틀 영역에 사용합니다. |
| `heading/3-regular` | 18 | 18 / 26 / -0.36 | Regular | 본문 내 시각적으로 중요 정보를 전달할 때 사용합니다. |
| `body/1-Bold` | 15 (base size) | 15 / 24 / -0.30 | Bold | 앱 전반에 사용되며, 본문 내 강조되는 문구에 사용합니다. |
| `body/1-regular` | 15 (base size) | 15 / 24 / -0.30 | Regular | 시스템 기본 폰트로 앱 전반에 적극적으로 사용합니다. |
| `body/2-bold` | 14 (base size) | 14 / 22 / -0.28 | Bold | 15 사이즈와 더불어 앱 전반에 기본 시스템 폰트로 사용합니다. |
| `body/2-Regular` | 14 (base size) | 14 / 22 / -0.28 | Regular | 15 사이즈와 더불어 앱 전반에 기본 시스템 폰트로 사용합니다. |
| `body/3-Bold` | 12 | 12 / 18 / -0.24 | Bold | 서비스 이용 안내 및 가이드 영역에서 적용되는 최소 폰트이지만, 적극적인 사용을 지양합니다. |
| `body/3-Regular` | 12 | 12 / 18 / -0.24 | Regular | 서비스 이용 안내 및 가이드 영역에서 적용되는 최소 폰트이지만, 적극적인 사용을 지양합니다. |
| `body/4-Bold` | 11 | 11 / 16 / -0.22 | Bold | 특수한 경우 뱃지와 태그에 사용할 수는 있으나 사용을 권장하지 않습니다. |
| `body/4-Regular` | 11 | 11 / 16 / -0.22 | Regular | 특수한 경우 뱃지와 태그에 사용할 수는 있으나 사용을 권장하지 않습니다. |
| `button/large-bold` | 15 | 15 / 24 / -0.30 | Bold | 페이지를 컨트롤하는 중요 액션 버튼에 적용합니다. |
| `button/medium-bold` | 14 | 14 / 22 / -0.28 | Bold | 본문 내 중요 액션 버튼에 적용합니다. |
| `button/small-bold` | 12 | 12 / 18 / -0.24 | Bold | 설명 및 가이드에 따른 액션 버튼에 적용합니다. |

> 규칙: letterSpacing 은 항상 `size × -0.02` (Figma `font/letterspacing/*` 변수).
> Storybook 토큰: `--text-heading-{1,2,3}-{bold,regular}` · `--text-body-{1..4}-{bold,regular}` · `--text-button-{large,medium,small}`

### 가이드에 없는 등록 스타일 (참고)

Figma 에 텍스트 스타일로는 있지만 Typography 가이드 표에는 없는 것. 가이드 기준으로는 새 화면에 쓰지 않음.

| 스타일 | 값 | 현재 쓰임 (KeyScreen 보이는 텍스트, 2026-10-22) |
|---|---|---|
| `button/medium-regular` · `button/small-regular` · `button/tiny-regular` | 14/22 · 12/18 · 11/16 Regular | 234 · 245 · 116 — `button/button` secondary 내부 |
| `button/tiny-bold` | 11/16 Bold | 0 |
| `display/1~4-{bold, medium, regular}` (12) | 40/50 · 36/44 · 32/40 · 28/36 | display/4-bold 81 · 1-regular 15 · 1-bold 10 · 3-bold 9 · 4-regular 1, 나머지 0 (Medium 4종 모두 0) |
| `guide/detail-size` · `guide/token-bold` · `guide/token-regular` | 10/16 · 13/20 | DS 가이드 문서 작성용 |

### 사용 규칙

- **모든 텍스트 노드는 DS 텍스트 스타일 키로 설정합니다** — `figma.importStyleByKeyAsync` 사용
- fontSize / fontName / lineHeight / letterSpacing **직접 지정 금지** (스타일이 모든 값을 캡슐화)
- Roboto·Apple SD Gothic Neo 등 OS 폰트가 컴포넌트 내부에 남아 있으면 **반드시 DS 스타일로 교체**
- weight는 Regular(400) / Bold(700) **2종만** 사용 — Medium·SemiBold 등 직접 입력 금지
- 기본 본문은 `body/1-regular` · `body/2-Regular` (15 · 14 base size) — 12 이하(body/3 · body/4)는 안내·가이드 영역 최소 폰트로 적극 사용 지양
- 가이드 17종 밖의 스타일(display · button regular 등)은 새 화면에 쓰지 않음

---

## Spacing

> 출처: Figma DS `${FIGMA_DS_FILE_KEY}` / Spacing Guide (node 296:3057)

여백(Spacing)은 정보를 체계적으로 구조화하는 중요한 역할을 합니다. 잘 계획된 여백을 통해 정보를 체계적으로 그룹화하여 사용자가 쉽고 빠르게 정보를 인지할 수 있도록 지원합니다.

스페이싱의 **기본 단위는 4와 8의 배수**를 사용하며, 금융 앱의 특성상 **최소 2dp(pt) 여백**을 허용합니다.

### Layout Margin

- 코나카드 앱은 컨텐츠 몰입도를 위해 **디바이스 양쪽 여백을 20dp(pt)로 동일하게** 적용합니다.
- `spacing-large` (20px) — **변경 불가** 토큰
- 콘텐츠 가용 영역(Device Flexible Area): `360 - 20 × 2 = 320px`

### Spacing Scale

| 토큰 | 값 (px) | 용도 |
|------|--------:|------|
| `spacing-none` | 0 | 컨텐츠 간격이 없을 때 |
| `spacing-3xsmall` | 2 | 컨텐츠 사이 간격이 매우 좁은 경우 |
| `spacing-2xsmall` | 4 | 컨텐츠 사이 좁은 간격 |
| `spacing-xsmall` | 8 | 일반적인 컨텐츠 간격 |
| **`spacing-small`** | **12** *(base size)* | 컨텐츠와 컨텐츠 사이 구분이 필요한 경우 |
| `spacing-medium` | 16 | 컨텐츠와 그룹을 구분할 경우 |
| **`spacing-large`** | **20** *(layout margin)* | 레이아웃 마진 공통 — **변경 불가** |
| **`spacing-xlarge`** | **24** *(base size)* | 컨텐츠와 본문 사이 여백 |
| `spacing-2xlarge` | 32 | 컨텐츠와 본문 사이 넓은 여백 |
| `spacing-3xlarge` | 40 | 그룹의 명확한 구분이 필요한 넓은 여백 |

**Display margin** (배너·인트로 등 큰 영역):

| 토큰 | 값 (px) | 실제 Figma 경로 |
|------|--------:|------|
| `spacing-display-margin-l` | 60 | `spacing/display/large` |
| `spacing-display-margin-xl` | 80 | `spacing/display/xlarge` |
| *(문서에 없던 값)* | 48 | `spacing/display/medium` |
| *(문서에 없던 값)* | 120 | `spacing/display/2xlarge` |

### 사용 규칙

- `spacing-large` (20) — **레이아웃 마진 변경 불가 토큰**. 화면 좌우 패딩은 항상 20px.
- **Base size**는 `spacing-small` (12) 와 `spacing-xlarge` (24) — 디자인 시 우선 후보로 사용
- 4·8의 배수 토큰(`4, 8, 16, 24, 32, 40`)을 우선 사용, `2px·12px·20px`는 특정 의미가 있을 때만 사용
- Figma 변수 (`spacing-*`) 와 1:1 매핑 — 코드에서도 토큰명으로 참조
- 임의의 픽셀 값(예: `7px`, `13px`) 직접 입력 금지

---

## Radius

> 출처: Figma DS `${FIGMA_DS_FILE_KEY}` / Radius 가이드 (node 481:3296) — 2026-10-23 가이드 기준으로 다시 맞춤

일관된 패턴과 가이드는 사용자가 빠르게 정보를 인지할 수 있도록 돕고, 서비스 전반에 예측 가능한 사용성을 제공합니다.
아래 정의된 컴퍼넌트 가이드를 준수하여 일관된 사용성을 유지할 수 있도록 합니다.

토큰 열은 가이드 표기 그대로, 괄호 안은 실제 Figma 변수 이름. 설명은 가이드 Example 열 그대로.

### Radius

코너 라운드는 2와 4 배수를 기반으로 적용하며 최대 반원을 적용할 수 있습니다.

| 토큰 (Figma 변수) | Value | 사용처 (가이드) |
|------|------|------|
| `$radius-2xsmall` (`radius/2xsmall`) | 4px | 최소 버튼에 적용합니다. |
| `$radius-xsmall` (`radius/xsmall`) | 6px | 입력폼과 본문 내 적용되는 버튼에 적용합니다. |
| `$radius-small` (`radius/small`) | 8px | 페이지를 컨트롤하는 중요 액션 버튼에 적용합니다. |
| `$radius-medium` (`radius/medium`) | 12px (base size) | 본문 내 박스형 컨텐츠에 적용합니다. |
| `$radius-large` (`radius/large`) | 16px | 팝업에 적용합니다. |
| `$radius-xlarge` (`radius/xlarge`) | 24px (base size) | 버텀시트 팝업에 주로 적용합니다. |
| `$radius-2xlarge` (`radius/2xlarge`) | 32px | 홈 메인 상단/하단 구분하는 박스에 활용 |
| `$radius-round` (`radius/round`) | 50% (변수 값 9999) | 레이블과 라운드 버튼에 적용합니다. |

일관된 디자인과 사용성을 유지하기 위하여 아래 제시된 영역은 동일한 가이드를 적용합니다.

### Buttons

| 토큰 (Figma 변수) | Reference token | Value | 사용처 (가이드) |
|------|------|------|------|
| `$radius-button-large` (`radius/button/large`) | `$radius-small` | 8px | 페이지를 컨트롤하는 중요 액션 버튼에 적용합니다. |
| `$radius-button-medium` (`radius/button/medium`) | `$radius-xsmall` | 6px | 본문 내 중요 액션 버튼에 적용합니다. |
| `$radius-button-small` (`radius/button/small`) | `$radius-2xsmall` | 4px | 설명 및 가이드에 따른 액션 버튼에 적용합니다. |
| `$radius-button-round` (`radius/button/round`) | `$radius-round` | 50% | 라운드형 버튼에 적용합니다. |

### Layout

| 토큰 (Figma 변수) | Reference token | Value | 사용처 (가이드) |
|------|------|------|------|
| `$radius-form` (`radius/components/form`) | `$radius-xsmall` | 6px | 입력폼에 적용합니다. |
| `$radius-contents` (`radius/components/box-contents`) | `$radius-medium` | 12px | 컨텐츠에 적용합니다. |
| `$radius-toast` (`radius/components/toast`) | `$radius-medium` | 12px | 토스트 팝업에 사용합니다. |
| `$radius-popup` (`radius/components/popup`) | `$radius-large` | 16px | 팝업에 적용합니다. |
| `$radius-bottomsheet` (`radius/components/bottomsheet`) | `$radius-xlarge` | 24px | 버텀시트 팝업에 적용합니다. |
| `$radius-label` (`radius/components/label`) | `$radius-round` | 50% | 라벨에 적용합니다. |

> Storybook 토큰: `--radius-{2xsmall … round}` · `--radius-button-{large,medium,small,round}` · `--radius-components-{form,box-contents,toast,popup,bottomsheet,label}`

### 가이드에 없는 Figma 변수 (참고)

| 변수 | 값 | 비고 |
|---|---|---|
| `radius/none` | 0 | |
| `radius/components/form-small` | 4 (= 2xsmall) | |
| `radius/components/box-button` | 8 (= small) | card-select 등 박스형 버튼 |
| `radius/components/box-info` | 8 (= small) | Banner · Bubble tooltip |
| `radius/components/box-container` | 24 (= xlarge) | |
| `radius/banner/{small, medium, large, xlarge}` | 8 · 12 · 16 · 24 | 값이 radius 가 아닌 spacing 변수(spacing/xsmall · small · medium · xlarge)를 가리킴 |

### 사용 규칙

- Radius 적용 시 항상 **Buttons · Layout 토큰**(`radius/button/*`, `radius/components/*`)을 우선 사용 — 스케일 토큰 직접 사용은 해당 토큰이 없는 경우에만
- Figma에서는 **variable 바인딩** (`setBoundVariable("topLeftRadius", v)` 등)으로 적용 — `node.cornerRadius = N` 직접 지정 금지
- 바텀시트는 **상단 두 코너만** 24px (좌우 하단은 0)
- `radius-round` 은 height의 절반 이상으로 적용되어 항상 반원 형태가 되도록 함 (`9999px` 또는 `50%`)

---

## Layout

### 화면 프레임

- **기본 크기: 360 × 800px** (AOS 기준)
- 콘텐츠가 800px를 초과하는 경우에만 높이를 늘립니다
- 너비는 항상 **360px 고정**

### 그리드 & 패딩

> 모든 간격은 `## Spacing` 토큰을 참조합니다.

| 속성 | 값 | 토큰 |
|------|----|------|
| 화면 좌우 패딩 | `20px` | `layout/margin` (= `spacing-large`, 변경불가) |
| 콘텐츠 영역 너비 | `320px` | `360 - layout/margin × 2` |
| 필드 묶음(라벨+입력창) 간 세로 간격 | `32px` | `spacing-2xlarge` |
| 필드 묶음 내부 간격 (라벨↔입력창·입력창↔입력창·입력창↔안내문구) | `8px` | `spacing-xsmall` |
| 입력 영역 padding (상 / 하) | `24px` / `40px` | `spacing-xlarge` / `spacing-3xlarge` |
| 섹션 내부 콘텐츠 padding | `24px` | `spacing-xlarge` (= `layout/margin-top`) |
| 리스트 아이템 높이 (`list/list` 한 줄) | large `65px` / medium `55px`(link) | — (상·하 padding large 12 / medium 16 + 내용 + divider 1) |

### 화면 레이어 구조 (항상 이 순서)

```
wrapper (360×800, white)
└─ Layout [VERTICAL auto-layout, FILL, gap=0]
    ├─ OS/status-bar          h=24px  Color=Black, Type=AOS
    ├─ action-bar/header      h=56px  고정 높이
    ├─ [content area]         h=HUG   화면별 콘텐츠
    └─ button/fixed-bottom    h=72px  (필요 시)
```

> Radius 토큰은 `## Radius` 섹션 참조.

---

## Component-First Principle

> **이 원칙은 DS의 가장 강한 규칙입니다.** 컬러·타이포·간격·radius 토큰보다도 먼저 적용됩니다.
> 직접 만든 요소(custom frame, autoLayout, vector)는 DS 컴포넌트로 표현할 수 있다면 항상 거기에 양보합니다.

### 왜 컴포넌트 우선인가

- **일관성** — 모든 화면이 같은 인스턴스를 공유하므로 디자인 업데이트가 자동 반영됨
- **유지보수** — DS 컴포넌트 1곳 수정으로 모든 화면이 갱신
- **속도** — 직접 그리는 시간보다 import + 슬롯 채우기가 훨씬 빠름
- **품질** — DS 컴포넌트는 이미 토큰, variant, state, padding이 정합되어 있음

### 화면 제작 시 필수 워크플로

화면 작업을 시작하기 전, 또는 새 UI 요소를 추가할 때마다 다음 순서를 따릅니다.

```
1. DS 파일(${FIGMA_DS_FILE_KEY})을 먼저 검색한다.
   ├─ 02_Components 페이지에서 키워드로 COMPONENT_SET / COMPONENT 탐색
   ├─ 04_Image 페이지에서 아이콘·로고 탐색
   └─ 매칭되는 컴포넌트가 있으면 → 키 확보 후 importComponentByKeyAsync
2. variant 옵션(size / type / state)이 요구사항을 커버하는지 확인.
3. 컴포넌트의 내부 슬롯(텍스트·아이콘 슬롯, instance swap)을 활용해
   characters / componentProperties / setProperties 만으로 커스터마이즈.
4. DS에 정말로 없을 때만 autoLayout / custom frame 사용 — 단 내부 요소
   (텍스트 스타일, 아이콘, divider, 라벨, 칩, 색)는 여전히 DS 자산을 사용해야 함.
5. 새 UI 패턴이 반복되면 DS에 컴포넌트로 등록할 후보로 보고하기.
```

### 영역별 우선 매칭 (자주 쓰는 컴포넌트)

새 화면을 만들 때 다음 표를 먼저 참조하세요. 비슷한 영역을 직접 만들기 전에 DS 컴포넌트로 처리 가능한지 확인.

| 만들려는 UI | DS 컴포넌트 | 비고 |
|------------|-------------|------|
| 상태바 | `OS/status-bar` (Color=Black, Type=AOS) | 모든 화면 최상단 — 24px 고정 |
| 페이지 헤더 (back/title/right action) | `action-bar/header` (type=main/page_icon/page_button) | 56px 고정, FILL width |
| 본문 헤드라인 (타이틀+서브) | `action-bar/headline` (type=1line/2line/3line) | 직접 만든 heading + sub 텍스트 조합 금지 |
| 검색 입력 | `input` style/case=search bar (state 6종) | 검색 아이콘·clear 아이콘 내장 |
| 일반 입력 | `input` style/case=text field · text area · button · card-number · registration number (title · info · timer boolean) | 용도별로 style/case 만 바꿔 씀 |
| 카테고리/서브 탭 | `tab/sub-ui` (device=AOS/iOS, type=first/last), `tab/Sub` | 7개 sub-tab 슬롯 내장 |
| 메인 탭 | `tab/main`, `tab/main-multi`, `tab/main-full` | |
| 리스트 행 | `list/list` (size, type=link/button/control), `list/menu`, `list/card-select`, `list/benefit-store` 등 | 구분선 내장 |
| 확장 가능 행(아코디언) | `accordion` (header + body 묶음 · size × type=list/inquiry × state) · `accordion/header` · `accordion/body` | 구 list/expand · expand-open. 본문만 쓸 땐 accordion/body |
| 결제·혜택 행 | `list/payment`, `list/benefit`, `list/benefit-store` | |
| 본문 타이틀(섹션 제목) | `title/title` (Type=Con_list/Input, Size, Color=Black/Gray) | h2 텍스트 직접 입력 금지 |
| 가격·정보 텍스트 그룹 | `info/text-title` | |
| 태그·라벨 칩 | `label` (구 label/basic-label — size, type=color/line, color=brand-gradient/brand/brand-light/gray-dark/warning/gray-light, line 은 3색·tiny 없음) | 직접 cornerRadius+fill로 칩 만들지 말 것 |
| 배지 (점/숫자/new) | `badges/badge` (type=dot/new/num-min/num-max) | |
| CTA 버튼 (대) | `button/primary` (size=large/medium, type=brand/gray-light) | |
| 하단 고정 버튼 | `button/fixed-bottom` (Device=AOS) | h=72px |
| 선택 버튼 (보이는 선택지 중 하나 고르기) | `select/select button` (state=default/selected · status), `select/select button group` (columns=2/3/4) | 옛 button/select · select-2line 은 삭제 |
| 아이콘 (배경 약함) | `input/icon`, `input/icon-pass`, `input/bullet` | |
| 얇은 가로 구분선 | `line/solid` (color=light/dark) | ComponentSet — `importComponentSetByKeyAsync` 사용 |
| 두꺼운 섹션 구분 | `line/divider` (color=light/dark, h=10px) | |
| 수직 구분선 | `line/divider-line` (size=8/12/16, color=light/dark/white) | |
| 박스 컨테이너(혜택/카드) | `list/card`, `info-contents`, `list/card-select` | |
| 바텀시트 행 | `list/bottomsheet` (size, type=basic/country/country_flag) | |
| 카드 디자인 | `list/card` | |
| 아이콘 (모든 크기) | `04_Image` 페이지의 `ic_16` ~ `ic_56`, `ic_arrow`, `icn_20` | 직접 vector 그리기 절대 금지 |
| 브랜드 로고 (GS25, CU 등) | `04_Image` 페이지 — 브랜드별 단일 COMPONENT | rescale로 크기 조정 |

> **이 표는 자주 쓰는 항목만 정리한 인덱스입니다.** 빠진 영역이 있더라도 "직접 만든다" 전에 반드시 DS 파일을 검색하세요.

### 안티패턴 (절대 금지)

```js
// ❌ 검색바를 직접 그리기
const search = figma.createFrame(); search.cornerRadius = 6; ...

// ❌ 카테고리 칩을 직접 만들기
const chip = figma.createAutoLayout("HORIZONTAL", { cornerRadius: 9999, ... });

// ❌ 구분선을 rectangle + opacity로 만들기
const line = figma.createRectangle();
line.fills = [{ type: "SOLID", color: {r:0,g:0,b:0}, opacity: 0.06 }];

// ❌ 아이콘을 ellipse + line 으로 그리기
const c = figma.createEllipse(); const l = figma.createLine();

// ❌ 헤딩+서브 텍스트를 두 개의 TEXT 노드로 직접 조합
const h = figma.createText(); const sub = figma.createText();
```

### 올바른 패턴

```js
// ✅ 컴포넌트를 import해서 인스턴스로 사용 (키는 DS 파일에서 직접 검색해 확보)
const searchSet = await figma.importComponentByKeyAsync(
  "<input/search size=large state=default 의 key>"
);
const search = searchSet.createInstance();
parent.appendChild(search);
search.layoutSizingHorizontal = "FILL";
// 내부 텍스트 슬롯만 교체
search.findOne(n => n.type === "TEXT").characters = "브랜드명으로 검색";

// ✅ variant 전환은 setProperties 사용
tabInstance.setProperties({ state: "focus", status: "true" });

// ✅ ComponentSet 인 경우 importComponentSetByKeyAsync 사용
const lineSet = await figma.importComponentSetByKeyAsync(
  "<line/solid set 의 key>"
);
// 또는 특정 variant 키로 직접 import
const lineLight = await figma.importComponentByKeyAsync(
  "<line/solid color=light 의 key>"
);
```

### 검색 헬퍼

DS에서 컴포넌트를 빠르게 찾을 때 사용할 수 있는 스니펫:

```js
// 02_Components 페이지에서 키워드로 매칭되는 컴포넌트 찾기
const page = await figma.getNodeByIdAsync("17:827"); // 02_Components
await figma.setCurrentPageAsync(page);
const keywords = ["search", "tab", "list", "label", "divider"]; // 원하는 키워드
const found = [];
page.findAll(n => {
  if ((n.type === "COMPONENT_SET" || n.type === "COMPONENT")
      && keywords.some(k => n.name.toLowerCase().includes(k))) {
    found.push({ name: n.name, type: n.type, id: n.id, key: n.key });
  }
  return false;
});
return found;
```

---

## Components

### action-bar/header

헤더는 **항상 56px 고정 높이**입니다. HUG 설정 금지.

| variant | 특성 |
|---------|------|
| `type=main` | 타이틀 텍스트 없음 |
| `type=page_icon` | 중앙 타이틀 텍스트 있음 ("Page title") |
| `type=page_button` | 타이틀 + 우측 버튼 |
| `type=old` | "Main text" 레이블 있음 |

```js
// 올바른 헤더 생성 패턴
const hdr = headerVariant.createInstance();
parent.appendChild(hdr);
hdr.layoutSizingHorizontal = 'FILL';
hdr.layoutSizingVertical = 'FIXED';
hdr.resize(hdr.width, 56);  // 반드시 56px 강제 지정
```

### action-bar/headline

텍스트 내용에 따라 높이가 달라지므로 **HUG**로 설정합니다.

```js
headline.layoutSizingVertical = 'HUG';
```

2line 변형에서 혼합 색상 적용:
```js
// 앞부분 brand, 뒷부분 black
headline.findOne(n => n.type === 'TEXT').setRangeFills(0, N, [{ type: 'SOLID', color: C.brand }]);
```

### button/fixed-bottom

하단 고정 버튼 (h=72px). 내부에 좌/우 두 버튼 슬롯이 있습니다.

| 슬롯 | ID suffix | 용도 |
|------|-----------|------|
| 좌측 (보조) | `869:4615` | 취소/건너뛰기 (gray) |
| 우측 (주요) | `17:1037` | 확인/완료 (brand) |

단일 버튼 시나리오: 좌측 `visible=false`, 우측만 표시

### list/list

리스트 아이템의 기본 단위. 구분선이 컴포넌트 내장되어 있으므로 별도 divider 추가 불필요.

```
list [VERTICAL, itemSpacing=0]
└─ list/list size=large, type=link/control (h=65) × N   ※ size=medium link는 h=55
   └─ 내장 line/solid 구분선 (하단)
```

### line/solid & line/divider

- `line/solid`: 얇은 구분선 (1px). ComponentSet — `importComponentSetByKeyAsync` 사용. variant: `color=light | dark`. 키는 DS 파일에서 검색해 확보
- `line/divider`: 두꺼운 섹션 구분선 (h=10px). 단일 컴포넌트

---

## Elevation & Depth

KONACARD **앱(AOS)** 은 그림자(shadow)를 최소화합니다. 배경색·구분선·오버레이로 계층을 표현합니다.

| 용도 | 적용 |
|------|------|
| 카드/정보 박스 | 배경색 차이로 구분 (`background/secondary` #F8F9FB vs `white`) |
| 팝업 | 오버레이(`color/background/dimed` 64%, `bg-dimed`) + `radius/components/popup` (16px) |
| 구분선 | `line/solid` 컴포넌트 (black 6% opacity) |
| 바텀시트 | 상단 radius 24px, 오버레이 |

### 웹 전용 Shadow 토큰 (앱 미적용 · 정리 예정)

Figma DS(COMMON 파일 Elevation 페이지)에는 **웹 전용** shadow 토큰이 정의되어 있습니다. **앱에는 적용하지 않음.** 웹 프로젝트에서만 참조. 실제 등록된 이름은 `$shadow-*`가 아니라 `elevation/shadow-*` 체계.

| 토큰 | 용도 | 상태 |
|------|------|------|
| `elevation/shadow-card` | 카드 | ✅ EFFECT 스타일 등록됨 |
| `elevation/shadow-deep` | 강한 elevation | ✅ EFFECT 스타일 등록됨 |
| `elevation/shadow-dark` | (문서에 없던 추가 스타일) | ✅ 등록됨 |
| pressed/button/navigation/active 4종 | — | ⚠️ 미발견 |

---

## Shapes

| 요소 | radius | 비고 |
|------|--------|------|
| 정보 박스 | 12px | `radius/components/box-contents` |
| 입력 폼 | 6px | `radius/components/form` |
| 배지/필 | 9999px | `radius/components/label` |
| CTA 버튼 (대) | 8px | `radius/button/large` |
| 팝업 | 16px | `radius/components/popup` |
| 바텀시트 | 24px (상단만) | `radius/components/bottomsheet` |

모든 radius는 DS variable로 바인딩하세요. `cornerRadius = N` 직접 지정 금지.

---

## Icons

아이콘은 DS 파일(`${FIGMA_DS_FILE_KEY}`)의 `04_Image` 페이지에서 가져옵니다.

**직접 그리기 절대 금지** — Rectangle/Vector/Ellipse로 아이콘을 만드는 것은 허용되지 않습니다.

| 카테고리 | 크기 | 대표 아이콘 |
|---------|------|------------|
| `ic_16/` | 16×16 | ic_time_16_w, ic_select_on_16 |
| `ic_20/` | 20×20 | ic_notice_20_gr, ic_card_20 |
| `ic_24/` | 24×24 | **ic_back_24**, ic_close_24, ic_alarm_24 |
| `ic_32/` | 32×32 | ic_main_cardregist |
| `ic_40/` | 40×40 | ic_plus_40, ic_cancel_40 |
| `ic_45/` | 45×45 | ic_complete_45, ic_caution_45 |
| `ic_56/` | 56×56 | ic_complete_brand_56 |
| `ic_arrow/` | 14×14 | **ic_arrow_right_14** (검정/회색/흰색) |
| `icn_20/` | 20×20 | outline 스타일 아이콘 |
| `img_*` | 다양 | 일러스트, 브랜드 로고 |

크기 조정 시:
- **auto-layout 기반 컴포넌트** → `resize(w, h)` 가능
- **절대 배치 내부 요소 포함 컴포넌트** → 반드시 `rescale(factor)` 사용

---

## Do's and Don'ts

### ✅ Do

1. **DS 컴포넌트를 import해 인스턴스로 사용** — `figma.importComponentByKeyAsync()` 또는 `importComponentSetByKeyAsync()`
2. **Pretendard 폰트를 스크립트 시작 시 모두 preload** — 텍스트 조작 전 필수
3. **TEXT 노드에 `textAutoResize = 'HEIGHT'` 설정** — 기본값 `'NONE'`은 내용이 잘림
4. **radius는 variable 바인딩** — `setBoundVariable()`로 DS variable 적용
5. **action-bar/header 너비를 `resize(360, 56)`으로 명시 지정** — 기본값이 360이 아닐 수 있음
6. **TEXT 노드에 `layoutSizingHorizontal = 'FILL'` 대신 명시적 픽셀 너비** — FILL은 FRAME에만 안전

### ❌ Don't

1. **폰트 직접 지정** (`node.fontSize = 14`, `node.fontName = {...}`) — DS 스타일 키 사용
2. **아이콘 직접 생성** (Rectangle, Vector, Ellipse) — DS 아이콘 컴포넌트 import
3. **action-bar/header에 HUG** — 항상 56px 고정
4. **radius 직접 지정** (`node.cornerRadius = 12`) — DS variable 바인딩
5. **`layoutSizingVertical = 'HUG'`를 Instance 노드에 설정** — 오류 발생. auto-layout frame이나 TEXT 노드에만 가능
6. **`resize()` 전에 `textAutoResize` 설정** — `resize()`가 `'NONE'`으로 리셋함

---

## 주요 패턴 코드

### TEXT 노드 생성 (makeText 패턴)

```js
async function makeText(styleKey, color, width, chars) {
  const style = await figma.importStyleByKeyAsync(styleKey);
  const t = figma.createText();
  t.textStyleId = style.id;
  t.fills = [{ type: 'SOLID', color }];
  t.resize(width, 20);          // 1. 너비 고정
  t.characters = chars;          // 2. 내용 설정
  t.textAutoResize = 'HEIGHT';   // 3. resize() 이후에 설정
  return t;
}
```

### 화면 wrapper + Layout 생성

```js
const wrapper = figma.createFrame();
wrapper.name = '#SCREEN_NAME KONACARD DS';
wrapper.resize(360, 800);
wrapper.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];

const layout = figma.createFrame();
layout.name = 'Layout';
layout.layoutMode = 'VERTICAL';
layout.primaryAxisSizingMode = 'AUTO';
layout.counterAxisSizingMode = 'FIXED';
layout.itemSpacing = 0;
layout.fills = [];
wrapper.appendChild(layout);
layout.resize(360, 10);
layout.layoutSizingHorizontal = 'FILL';
```

### list/list 나열

```js
const listSet = await figma.importComponentSetByKeyAsync('<list/list set 의 key>');
const listVariant = listSet.children.find(c => c.name === 'size=large, type=link');

const listFrame = figma.createFrame();
listFrame.layoutMode = 'VERTICAL';
listFrame.itemSpacing = 0;  // 구분선은 컴포넌트 내장
listFrame.primaryAxisSizingMode = 'AUTO';
listFrame.fills = [];

for (const item of items) {
  const inst = listVariant.createInstance();
  listFrame.appendChild(inst);
  inst.layoutSizingHorizontal = 'FILL';
  // 타이틀 텍스트 설정
  inst.findOne(n => n.type === 'TEXT' && n.name === 'title').characters = item.label;
}
```

---

## Figma 컴포넌트 인덱스

> 컴포넌트 키는 본 문서에 포함되지 않습니다. 사용 시 DS 파일(`${FIGMA_DS_FILE_KEY}`)을 직접 검색해 키를 확보하세요.

| 컴포넌트 | 타입 |
|----------|------|
| `OS/status-bar` | Single |
| `action-bar/header` | ComponentSet |
| `action-bar/button` | ComponentSet |
| `action-bar/headline` | ComponentSet |
| `button/primary` | ComponentSet |
| `button/fixed-bottom` | ComponentSet |
| `button/text` | ComponentSet |
| `title/title` | ComponentSet |
| `control/agree` | ComponentSet |
| `control/swtich` | ComponentSet |
| `line/dotted` | Single |
| `line/solid` | ComponentSet |
| `line/divider` | Single |
| `info/contents` | ComponentSet |
| `info/text-title` | Single |
| `info/text-info` | ComponentSet |
| `list/list` | ComponentSet |
| `ic_24/ic_back_24` | Single |
| `ic_20/ic_notice_20_gr` | Single |
| `ic_arrow/ic_arrow_right_14` | Single |
| `ic_arrow/ic_arrow_right_14_g` | Single |

---

*생성일: 2026-06-24 | 원본: [konacard-ds-rules.md](./konacard-ds-rules.md)*
