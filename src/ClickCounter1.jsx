import React from 'react'
import { useState } from 'react'

const ClickCounter1 = () => {

  const [no, setNo] = useState(0)
  const Increement = () => {
    setNo(no + 1)
  }
  return (
    <div>

      <h2>{no}</h2>
      <button onClick={Increement}>Increement</button>
    </div>
  )
}

export default ClickCounter1