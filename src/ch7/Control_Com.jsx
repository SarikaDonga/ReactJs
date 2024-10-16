import React, { useState } from 'react'

const Control_Com = () => {

    const [name,setName]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name)
    }
  return (
    <div>


        <form action="" onClick={handleSubmit}>


            Name:
            <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)}/>

            <button >Add</button>
        </form>
    </div>
  )
}

export default Control_Com