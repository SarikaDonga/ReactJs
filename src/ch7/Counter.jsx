import React, { useState } from 'react'

const Counter = () => {
    const [no, setNo] = useState(0)
    const [add, setAdd] = useState()

    let inc = () => {
        setNo(no + add)
    }

    let dec = () => {
        if (no > 0) {
            setNo(no - add)
        }
    }
    let reset = () => {
        setNo(0)
    }
    return (
        <div>


            <input type="number" name="" id="" onChange={(e) => setAdd(Number(e.target.value))} ></input>
            <button onClick={inc} disabled={no >= 100}>Increement</button>
            {no}
            <button onClick={dec} disabled={no <= 0}>Decreement</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}

export default Counter