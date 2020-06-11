import React, {useState, useCallback, useRef} from 'react';
import {Hello, useCountRenders} from "./Hello";
import {
    NonInlineCallback_memo,
    InlineCallback_memo,
    NonInlineCallback,
    InlineCallback,
    NonInlineCallback_PureComponent
} from "./components";

// https://www.youtube.com/watch?v=-Ls48dd-vJE&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM&index=5
// https://reactjs.org/docs/reconciliation.html
const App = () => {
    const [count, setCount] = useState(0)
    // const renders = useRef(0);
    // console.log("parent renders: ", ++renders.current)

    const favouriteNums = [7];

    const increment = useCallback((n) => {
        setCount(c => c + n)
    }, [setCount])

    return (
        <div>
            <Hello increment={increment}/>
            <div>count: {count}</div>

            <div>increment prop DOES NOT change reference, memo means it will NOT RENDER when App is rendered</div>
            {favouriteNums.map(n => {
                return <NonInlineCallback_memo n={n} key={n} increment={increment} name={"NonInlineCallback_memo"}/>
            })}

            <div>increment prop DOES NOT change reference, PureComponent means it will NOT RENDER when App is rendered</div>
            {favouriteNums.map(n => {
                return <NonInlineCallback_PureComponent n={n} key={n} increment={increment} name={"NonInlineCallback_PureComponent"}/>
            })}

            <div>increment prop DOES NOT change reference, but since not memoized it WILL RENDER when App is rendered</div>
            {favouriteNums.map(n => {
                return <NonInlineCallback n={n} key={n} increment={increment} name={"NonInlineCallback"}/>
            })}

            <div>increment prop DOES change reference, memo makes no difference because it changes each time, it WILL RENDER when App is rendered</div>
            {favouriteNums.map(n => {
                return <InlineCallback_memo n={n} key={n} increment={() => increment(n)} name={"InlineCallback_memo"}/>
            })}

            <div>increment prop DOES change reference, not memoized, it WILL RENDER when App is rendered</div>
            {favouriteNums.map(n => {
                return <InlineCallback n={n} key={n} increment={() => increment(n)} name={"InlineCallback"}/>
            })}
        </div>
    );
};

export default App;
