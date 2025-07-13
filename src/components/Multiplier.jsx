import { multiplier, symbol } from "./Multiplier.module.css";

function Multiplier({ word }) {
  return (
    <div className={multiplier}>
      <p>
        <span className={symbol}>x</span>
        {word.multiplier}
      </p>
    </div>
  );
}

export default Multiplier;
