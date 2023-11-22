// TypingEffect.js
import React, { useState, useEffect } from "react";
import styles from "../app/typingtext.css";

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      index++;

      if (index > text.length) {
        clearInterval(intervalId);
      }
    }, 100); // Ubah nilai interval sesuai kebutuhan

    return () => clearInterval(intervalId);
  }, [text]);

  return <span className={styles.typingEffect}>{displayedText}</span>;
};

export default TypingEffect;
