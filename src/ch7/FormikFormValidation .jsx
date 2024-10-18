import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'; // For validation schema

const FormikFormValidation = () => {
  // Formik hook with initial values, validation schema, and submit handler
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters long')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log('Form Submitted:', values);
      alert('Form submitted successfully!');
    },
  });

  return (
    <div className="container">
      <h2>Formik Form Validation Example</h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Name field */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="invalid-feedback">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="invalid-feedback">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="invalid-feedback">{formik.errors.password}</div>
          ) : null}
        </div>

        {/* Submit button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormikFormValidation;
