import React from 'react'
import { useState, useEffect } from 'react';

const Multiple = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        document.title = `Count: ${count}`;
        console.log(count,name)

    }, [count,name]);

  
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>

            <h2>Name:{name}</h2>
            <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
    )
}

export default Multiple