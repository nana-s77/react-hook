import React from 'react';
import { useState } from 'react';

export const ItemHook = () => {
    // useState宣言と初期値の指定
    const [items,setItems] = useState([]);
    // イベント発生時にsetStateがどうなるかの処理を記述
    const addItem = () => {
        setItems([...items, {id: items.length, value: Math.floor(Math.random()*11)}])
    }
    return(
        <div>
            <button onClick={addItem}>通知</button>
            <ul>
                {
                    items.map(item =>(
                        <li key={item.id}>
                            {item.value}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
    