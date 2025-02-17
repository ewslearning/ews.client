import React, { useState } from "react";
import styles from "./sidebar.module.css";
import { useRouter } from "next/navigation";

const Sidebar = ({ addBlock }: { addBlock: (type: string) => void }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        {['Heading', 'Subheading', 'Bullet Points', 'Numbered List', 'Text', 'Conclusion'].map(type => (
          <button key={type} className={styles.button} onClick={() => addBlock(type)}>
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
