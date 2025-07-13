import { useEffect, useRef } from "react";
import { history } from "./Words.module.css";

function Words({ children }) {
  const scrollRef = useRef(null);

  // Scrolls Last Element into view
  useEffect(() => {
    // Gaurd Clause
    if (!scrollRef?.current) return;

    scrollRef.current.scrollLeft = scrollRef?.current.scrollWidth;
  }, [children]);

  return (
    <section ref={scrollRef} className={history}>
      {children}
    </section>
  );
}

export default Words;
