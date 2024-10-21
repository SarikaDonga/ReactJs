import React from 'react'
import { useFormik } from 'formik'
import { signUpSchema } from '../schema/validate'
const Validation_lib = () => {

    const initialValues = {
        name: '',
        email: '',
        password: '',
        cpassword: ''
    }

    // const formik = useFormik({
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values,action) => {
            console.log(values)
            action.resetForm()
        }

    })

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>

                <div className="name">
                    <label htmlFor="">Name:</label>
                    <input type="text"
                        name="name" id=""
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {
                        errors.name && touched.name ? (
                            <p className='form-error'>{errors.name}</p>

                        ) : null
                    }
                </div>

                <div className="emaill">
                    <label htmlFor="">Email:</label>
                    <input type="email" name="email" id=""
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                    {
                        errors.email && touched.email ? (
                            <p className='form-error'>{errors.email}</p>

                        ) : null
                    }

                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input type="password" name="password" id=""
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur} /><br />
                    {
                        errors.password && touched.password ? (
                            <p className='form-error'>{errors.password}</p>

                        ) : null
                    }


                </div>

                <div> 

                    <label htmlFor="">Confirm Password:</label>
                    <input type="cpassword" name="cpassword" id=""
                        value={values.cpassword}
                        onChange={handleChange}
                        onBlur={handleBlur} />

                    {
                        errors.cpassword && touched.cpassword ? (
                            <p className='form-error'>{errors.cpassword}</p>

                        ) : null
                    }


                </div>



                <button type='submit'>Registration</button>
            </form>

        </div>

    )
}

export default Validation_lib