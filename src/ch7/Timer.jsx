import React, { useState, useEffect } from 'react'
import style from './style.module.css'
const Timer = () => {
  const [second, setSecond] = useState(60)
  const [active, setActive] = useState(false)

  useEffect(() => {
    let interval = null
    if (active && second > 0)
      interval = setInterval(() => {
        setSecond((prev) => prev - 1)
      }, 1000);
      else if(second===0){

        clearInterval(interval)
      }

    return () => {
      clearInterval(interval)

    };

  }, [second,active]);
  const resetTimer = () => {
    setSecond(60)
    setActive(false)
  }
  return (
    <div style={{ textAlign: 'center' }}>

      <h1>Timer</h1>

      <button onClick={() => setActive(!active)} className={style.b1}>{
        active ? 'pause' : 'start'
      }</button>
      {
        second
      }
      <button onClick={resetTimer} className={style.b1}>Reset</button>
    </div>
  )
}

export default Timer