import React from 'react'
import { useState } from 'react'

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        // setName(e.target.value)
        // setEmail(e.target.value)
        // setPassword(e.target.value)

        const { name, value } = e.target

        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value)
                break;
            case "password":
                setPassword(value)
                break;
        }
    }

    const handleFormSubmit=(e)=>{
        e.preventDefault()

        const formData={
            name,
            email,
            password
        }

        console.log(formData)

    }
    return (

        <form action="" onSubmit={handleFormSubmit} >


            <input type="text" value={name} onChange={handleChange} />
            <input type="email" value={email} onChange={handleChange} />
            <input type="password" value={password} onChange={handleChange} />

            <button>SignUp</button>
        </form>
    )
}

export default Register