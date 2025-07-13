import styles from "./Total.module.css";
import { motion } from "framer-motion";

function Total({ children }) {
  return <motion.p className={styles.total}>{children}</motion.p>;
}

export default Total;
