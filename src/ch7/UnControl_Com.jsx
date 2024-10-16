import React from 'react'

const UnControl_Com = () => {

    const handleSubmit=(e)=>{
        e.preventDefault()
        const n=document.querySelector("#name").value
        console.log(n)
    }
  return (

    <form action="">
        Name:
        <input type="text" name="" id="name" />

        <button onClick={handleSubmit}>Submit</button>
        </form>
  )
}

export default UnControl_Com