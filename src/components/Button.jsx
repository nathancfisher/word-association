import { btn, wrapper } from "./Button.module.css";
import { motion } from "framer-motion";

function Button({ children, dispatch, animate }) {
  return (
    <div className={wrapper}>
      <motion.button
        initial={animate.initial}
        animate={animate.animate}
        className={btn}
        onClick={() => dispatch({ type: "new" })}
      >
        {children}
      </motion.button>
    </div>
  );
}

export default Button;
