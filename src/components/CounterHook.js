import React, { useState } from 'react';

export const CounterHook = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(prevCount => prevCount +1);
    }

    const incrementCountTen = () => {
        for(let i = 0; i < 10; i++)
        setCount(prevCount => prevCount +1);
        
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementCount}>カウント</button>
            <button onClick={incrementCountTen}>カウント10</button>
        </div>
    )
}

