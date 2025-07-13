import { input } from "./Input.module.css";

function Input({ children, control, dispatch }) {
  return (
    <input
      type="text"
      className={input}
      placeholder={children}
      value={control}
      onChange={(e) => dispatch({ type: "key", payload: e.target.value })}
    />
  );
}

export default Input;
