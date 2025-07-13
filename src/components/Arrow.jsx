import { icon } from "./Arrow.module.css";
import { easeIn, motion } from "framer-motion";

function Arrow({ animate }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={icon}
      initial={animate.initial}
      animate={animate.animate}
    >
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: easeIn }}
      />
    </motion.svg>
  );
}

export default Arrow;
