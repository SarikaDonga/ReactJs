import React, { useState } from 'react'

const DynamicFormData = () => {

    const [formFields, setformFields] = useState([
        {
            name: '',
            age: ''
        },
        
    ])

    const handleFormChange = (e, index) => {
        // console.log(index, e.target.name)

        let data=[...formFields]
        data[index][e.target.name]=e.target.value
        setformFields(data)
    }

    const SubmitHandler=(e)=>{
        e.preventDefault()
        console.log(formFields)

    }

    const addFields=()=>{
        let add={
            name:'',
            age:''
        }
        setformFields([...formFields,add])
    }

    const removeFields=(index)=>{
        console.log(index)
        let datadelete=[...formFields]
        datadelete.splice(index,1)
        setformFields(datadelete)
    }
    return (
        <div>

            <form action="" onSubmit={SubmitHandler}>
                {
                    formFields.map((form, index) => {
                        return (
                            <div key={index}>
                                <input type="text" name='name' placeholder='Name' value={form.name} onChange={e => handleFormChange(e, index)} />
                                <input type="text" name='age' placeholder='Age' value={form.age} onChange={e => handleFormChange(e, index)} />

                                <button onClick={()=>removeFields(index)}>Delete</button>
                            </div>
                        )
                    })
                }
            </form>
            <button onClick={addFields}>Add More...</button>
            <button onClick={SubmitHandler}>Submit</button>
        </div>

    )
}

export default DynamicFormData