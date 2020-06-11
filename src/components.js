import React, {useRef} from 'react';

export class NonInlineCallback_PureComponent extends React.PureComponent {
    constructor() {
        super();
        this.renders = 0;
    }

    render() {
        const {name, increment, n} = this.props;
        console.log(name, "renders: ", ++this.renders)
        return <button onClick={() => increment(n)}>{n}</button>;
    }
}

// like React.PureComponent
export const NonInlineCallback_memo = React.memo(({n, increment, name}) => {
    const renders = useRef(0);
    console.log(name, "renders: ", ++renders.current)

    return <button onClick={() => increment(n)}>{n}</button>;
});

export const NonInlineCallback = ({n, increment, name}) => {
    const renders = useRef(0);
    console.log(name, "renders: ", ++renders.current)

    return <button onClick={() => increment(n)}>{n}</button>;
}

export const InlineCallback_memo = React.memo(({n, increment, name}) => {
    const renders = useRef(0);
    console.log(name, "renders: ", ++renders.current)

    return <button onClick={increment}>{n}</button>;
});

export const InlineCallback = ({n, increment, name}) => {
    const renders = useRef(0);
    console.log(name, "renders: ", ++renders.current)

    return <button onClick={increment}>{n}</button>;
}

// how long does the shallow comparison of props take vs a call to render?

