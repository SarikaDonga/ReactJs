import React from 'react'

// If user Try to update name variable it will be not change in dom then using useState hook

const InputChange = () => {

    let name="abcd"

    console.log(name)

    const handleChange=()=>{
        name="hello"

        alert(name)

        console.log(name)
    }
  return (
    <div>
        {name}
        <button onClick={handleChange}>Add</button>

    </div>
  )
}

export default InputChange