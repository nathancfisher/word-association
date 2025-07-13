import { useEffect } from "react";
import { label } from "./Timer.module.css";

function Timer({ time, dispatch }) {
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "dec" });
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return <label className={label}>{time}</label>;
}

export default Timer;
