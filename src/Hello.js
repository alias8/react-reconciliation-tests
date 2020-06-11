import React, {useRef} from 'react';

export const Hello = React.memo(({increment}) => {
    // const renders = useRef(0);
    // console.log("hello renders: ", ++renders.current)
    return <button onClick={increment}>hello</button>;
});

