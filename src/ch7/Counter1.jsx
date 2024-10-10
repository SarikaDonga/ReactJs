import React, { useState } from 'react'
import { useEffect } from 'react';

const Counter1 = () => {

    const [count, setCount] = useState(0);
    const [num,setNum]=useState(0)

    useEffect(() => {
        alert("Count")

        document.title=`messages(${count})`
        return () => {

        };
    }, [count,num]);
    return (
        <div>
            <button onClick={(() => {
                setCount(count + 1)
            } )}>Count {count}</button>

            <button onClick={(() => {
                setNum(num + 1)
            } )}>Num {num}</button>


        </div>
    )
}

export default Counter1