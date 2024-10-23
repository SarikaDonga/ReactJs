import * as Yup from "yup"
export const signUpSchema = Yup.object({
    name: Yup.string().min(3).max(25).required("Please Enter Your name"),
    emai: Yup.string().email().required("Please Enter Valid Email"),
    password: Yup.string().min(6).required("Minmum 6 Character"),
    cpassword: Yup.string().required().oneOf([Yup.ref('password'), null], "Please Must Match"),
    radioOption: Yup.string() .required('Please select an option'),
    checkbox: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
    dropdown: Yup.string().required('Please select an option'),
    
})