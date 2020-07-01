import React, { useRef } from "react";

export const Clicker = ({ n, increment, name, inlineProp: inlineCallback }) => {
  const renders = useRef(0);
  console.log(name, "renders: ", ++renders.current);
  return inlineCallback ? (
    <button onClick={increment}>{n}</button>
  ) : (
    <button onClick={() => increment(n)}>{n}</button>
  );
};

export const ClickerMemo = React.memo(Clicker);
