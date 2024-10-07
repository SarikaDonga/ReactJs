import React, { useState } from 'react'


// useState Example
const Count = () => {

    const [no,setNo]=useState(0)

    let inc=()=>{
        setNo(no+1)
    }
    
    let dec=()=>{
      if(no>0){
        setNo(no-1)
      }
    }
    let reset=()=>{
        setNo(0)
    }
  
  return (

    <div>
      
    
    <button onClick={inc}>Increement</button> 
       {no}
    <button onClick={dec}>Decreement</button> 
    <button onClick={reset}>Reset</button> 
    
    </div>
  )
}

export default Count