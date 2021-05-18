import React, { useState, useEffect } from 'react';

export const MouseEventEffect = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const getMousePosition = e => {
        console.log('MouseEventEffectが呼ばれました');
        setX(e.clientX);
        setY(e.clientY);
    }

    // イベントの登録は初回登録時のみに処理すればよい
    useEffect(() =>{
        console.log('useEffectが呼ばれました');
        window.addEventListener('mousemove',getMousePosition);
        return () => {
            window.removeEventListener('mousemove',getMousePosition)
        };
    },[]);

    return(
        <div>
            <ul>
                <li>x座標：{x}</li>
                <li>y座標：{y}</li>
            </ul>

        </div>
    )
}