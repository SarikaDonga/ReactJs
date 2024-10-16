import React, { useState } from 'react'

const SignUp = () => {

    const [user,setUser]=useState({
        name:'',
        email:'',
        password:''
    })

    const handleInputChange=(e)=>{
        const {name,value}=e.target

        setUser(
           {
            ...user,
            [name] : value 
           }  
        )     
    }


    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(user.name)
        console.log(user.email)
        console.log(user.password)
    }

    return (
        <form action=""  onSubmit={handleSubmit}>


            <input type="text"  onChange={handleInputChange} value={user.name} />
            <input type="email" onChange={handleInputChange} value={user.email}/>
            <input type="password" onChange={handleInputChange} value={user.password}/>

            <button>SignUp</button>
        </form>)
}

export default SignUp