import { current } from "./CurrentDisplay.module.css";

function CurrentDisplay({ children }) {
  return <section className={current}>{children}</section>;
}

export default CurrentDisplay;
