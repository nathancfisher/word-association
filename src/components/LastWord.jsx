import { prevWord } from "./LastWord.module.css";
import { motion } from "framer-motion";

function LastWord({ word, animate }) {
  return (
    <motion.div
      className={prevWord}
      initial={animate.initial}
      animate={animate.animate}
    >
      <p>{word.word}</p>
    </motion.div>
  );
}

export default LastWord;
