import React, { useState } from 'react'


// useState Example
const Count = () => {

    const [no,setNo]=useState(0)

    let inc=()=>{
        setNo(no+1)
    }
  
  return (

    <div>{no}
    
    <button onClick={inc}>Increement</button></div>
  )
}

export default Count