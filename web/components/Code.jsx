import React, { useRef, useEffect } from "react";
import Prism from "prismjs";
import styles from "./Code.module.css";
import "prismjs/components/prism-typescript"

const Code = ({ code, plugins, language }) => {
  const codeRef = useRef();

  useEffect(() => {
    if (codeRef && codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [codeRef]);

  return (
    <div className={styles.Code}>
    <pre className={!plugins ? "" : plugins.join(" ")}>
      <code ref={codeRef} className={`language-${language}`}>
        {code.trim()}
      </code>
    </pre>
    </div>
  );
};

export default Code;
