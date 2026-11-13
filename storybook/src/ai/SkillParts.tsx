import { useState } from "react";
import styles from "./ai.module.css";

/**
 * AI & Tools/Skill 페이지 조각 — seed-design.io/ai-integration/skill 의 Installation · File Structure 구성 참고
 *   InstallTabs : 탭으로 명령을 고르고 복사 버튼으로 붙여 넣는 코드 상자
 *   FileTree    : 폴더 · 파일 아이콘이 있는 트리
 */

export interface InstallOption {
  label: string;
  command: string;
}

export function InstallTabs({ options }: { options: InstallOption[] }) {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const command = options[active].command;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* 클립보드를 못 쓰는 환경 — 직접 선택해 복사 */
    }
  };

  return (
    <div className={styles.install}>
      <div className={styles.installBar}>
        <div role="tablist" className={styles.installTabs}>
          {options.map((o, i) => (
            <button
              key={o.label}
              role="tab"
              aria-selected={i === active}
              className={i === active ? styles.installTabOn : styles.installTab}
              onClick={() => setActive(i)}
            >
              {o.label}
            </button>
          ))}
        </div>
        <button className={styles.copy} onClick={copy} aria-label="명령 복사">
          {copied ? "복사됨" : <CopyIcon />}
        </button>
      </div>
      <pre className={styles.installCode}>
        <code>{command}</code>
      </pre>
    </div>
  );
}

export interface TreeNode {
  name: string;
  children?: TreeNode[];
}

export function FileTree({ root }: { root: TreeNode }) {
  return (
    <div className={styles.tree}>
      <TreeItem node={root} depth={0} />
    </div>
  );
}

function TreeItem({ node, depth }: { node: TreeNode; depth: number }) {
  const folder = !!node.children;
  return (
    <>
      <div className={styles.treeRow} style={{ paddingLeft: depth * 14 }}>
        {folder ? <FolderIcon /> : <FileIcon />}
        <span>{node.name}</span>
      </div>
      {node.children?.map((c) => <TreeItem key={c.name} node={c} depth={depth + 1} />)}
    </>
  );
}

/* 문서 페이지용 선 아이콘 (DS 컴포넌트가 아닌 페이지 장식) */
const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function FolderIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg {...iconProps}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg {...iconProps}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h9" />
    </svg>
  );
}
