import React, { useState } from 'react'

const ChangeName = () => {

    const [user,setUser]=useState({
        name:"sarika",
        age:26
    })

    const ChangeName=()=>{
        setUser({...user,name:"test"})
    }
  return (
    <div>
        <p>{user.name}</p>
        <p>{user.age}</p>

        <button onClick={ChangeName}>Updte</button>

    </div>
  )
}

export default ChangeName