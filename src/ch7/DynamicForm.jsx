import React, { useState } from 'react';

// Dynamic form component
const DynamicForm = ({ formConfig, onSubmit }) => {
  // Initialize form state based on the configuration
  const [formData, setFormData] = useState(() =>
    formConfig.reduce((acc, field) => {
      acc[field.name] = field.type === 'checkbox' ? false : '';
      return acc;
    }, {})
  );

  // Handle input changes
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formConfig.map((field, index) => (
        <div key={index} className="form-group">
          <label>{field.label}</label>
          {field.type === 'select' ? (
            <select
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="form-control"
            >
              {field.options.map((option, i) => (
                <option key={i} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : field.type === 'textarea' ? (
            <textarea
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="form-control"
              placeholder={field.placeholder}
            />
          ) : field.type === 'checkbox' ? (
            <input
              type="checkbox"
              name={field.name}
              checked={formData[field.name]}
              onChange={handleChange}
              className="form-check-input"
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="form-control"
              placeholder={field.placeholder}
            />
          )}
        </div>
      ))}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

const FormPage = () => {
  const formConfig = [
    { label: 'Name', type: 'text', name: 'name', placeholder: 'Enter your name' },
    { label: 'Email', type: 'email', name: 'email', placeholder: 'Enter your email' },
    { label: 'Password', type: 'password', name: 'password', placeholder: 'Enter your password' },
    {
      label: 'Gender',
      type: 'select',
      name: 'gender',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
      ],
    },
    {
      label: 'Bio',
      type: 'textarea',
      name: 'bio',
      placeholder: 'Tell us about yourself',
    },
    {
      label: 'Subscribe to newsletter',
      type: 'checkbox',
      name: 'subscribe',
    },
  ];

  const handleFormSubmit = (formData) => {
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="container">
      <h2>Dynamic Form Example</h2>
      <DynamicForm formConfig={formConfig} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default FormPage;
