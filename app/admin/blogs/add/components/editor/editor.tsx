import React from "react";
import styles from "./editor.module.css";

interface Block {
  id: number;
  type: string;
  content: string;
}

interface EditorProps {
  blocks: Block[];
  updateBlock: (id: number, content: string) => void;
}

const Editor: React.FC<EditorProps> = ({ blocks, updateBlock }) => {
  return (
    <div className={styles.editorContainer}>
      {blocks.map((block) => (
        <div key={block.id} className={styles.editorBlock}>
          <input
            type="text"
            placeholder={block.type}
            value={block.content}
            onChange={(e) => updateBlock(block.id, e.target.value)}
            className={styles.inputField}
          />
        </div>
      ))}
    </div>
  );
};

export default Editor;
