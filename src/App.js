import React, { useState, useCallback } from "react";
import { Clicker, ClickerMemo } from "./components";

// https://www.youtube.com/watch?v=-Ls48dd-vJE&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM&index=5
// https://reactjs.org/docs/reconciliation.html
const App = () => {
  const [sequence, setSequence] = useState("");
  const letters = ["a", "b", "c", "d"];
  const increment = useCallback(
    (n) => {
      setSequence((c) => {
        return c + n;
      });
    },
    [setSequence]
  );

  return (
    <div>
      <div>sequence: {sequence}</div>

      <div>Buttons with memo:</div>
      {letters.map((n) => {
        return (
          <ClickerMemo
            key={n}
            n={n}
            increment={increment}
            name={`${n} with memo`}
            inlineCallback={false}
          />
        );
      })}

      <div>Buttons with memo and inlineCallback:</div>
      {letters.map((n) => {
        return (
          <ClickerMemo
            key={n}
            n={n}
            increment={(n) => increment(n)}
            name={`${n} with memo and inlineCallback`}
            inlineCallback={true}
          />
        );
      })}

      {/*<div>Buttons without memo:</div>*/}
      {/*{letters.map((n) => {*/}
      {/*  return (*/}
      {/*    <Clicker*/}
      {/*      key={n}*/}
      {/*      n={n}*/}
      {/*      increment={increment}*/}
      {/*      name={`${n} without memo`}*/}
      {/*      inlineCallback={false}*/}
      {/*    />*/}
      {/*  );*/}
      {/*})}*/}
    </div>
  );
};

export default App;
