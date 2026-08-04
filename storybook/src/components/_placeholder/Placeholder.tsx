import type { ReactNode } from "react";

/**
 * 아직 Figma 스펙이 들어오지 않은 컴포넌트 자리표시자.
 * 사이드바에 항목만 노출하고, 상세 스펙 오면 실제 구현으로 교체.
 */
export function Placeholder({
  name,
  hint,
  figmaUrl,
}: {
  name: string;
  hint?: ReactNode;
  figmaUrl?: string;
}) {
  return (
    <div
      style={{
        width: 320,
        padding: 24,
        border: "1px dashed var(--color-border-default)",
        borderRadius: 12,
        background: "var(--color-background-secondary)",
        color: "var(--color-font-secondary)",
        font: "var(--text-body-2-regular)",
        letterSpacing: "var(--font-letterspacing-small)",
      }}
    >
      <div
        style={{
          font: "var(--text-body-1-bold)",
          color: "var(--color-font-primary)",
          marginBottom: 8,
        }}
      >
        {name}
      </div>
      <div style={{ color: "var(--color-font-tertiary)" }}>
        {hint ??
          "Figma 스펙 대기 중. 이 컴포넌트의 Figma URL을 알려주면 실제 구현으로 교체됩니다."}
      </div>
      {figmaUrl && (
        <a
          href={figmaUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginTop: 12,
            font: "var(--text-body-3-bold)",
            color: "var(--color-font-brand)",
            textDecoration: "underline",
          }}
        >
          Figma 링크 열기 ↗
        </a>
      )}
    </div>
  );
}
