import React from 'react'

export default function Nodes(props) {
    const {isFinish, isStart} = props;
    const extraClassName = isFinish
    ? 'node-finish'
    : isStart
    ? 'node-start'
    : '';
    return (
        <div id={`block${props.counter}`} className={`node ${extraClassName}`}>
        </div>
    )
}
