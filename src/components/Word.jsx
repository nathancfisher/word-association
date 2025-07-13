import styles from "./Word.module.css";
import { motion } from "framer-motion";

function Word({ word, animate }) {
  return (
    <motion.div
      className={styles.word}
      initial={animate.initial}
      animate={animate.animate}
    >
      <p className={styles.text}>{word.word}</p>
      <p className={styles.score}>
        <span className={styles.symbol}>x</span>
        {word.multiplier}
      </p>
    </motion.div>
  );
}

export default Word;
