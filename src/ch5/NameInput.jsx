import React, { useState } from 'react'

const NameInput = () => {

    const [name,setName]=useState('test')
 

    const changeName=(e)=>{
      setName(e.target.value)
    }
    const addName=()=>{
        setName("user")
    }
  return (
    <div>

    <input type="text" name="" id="" value={name} onChange={changeName} />
    <p>{name}</p>

    <button onClick={addName}>Change Name</button>
    </div>
  )
}

export default NameInput