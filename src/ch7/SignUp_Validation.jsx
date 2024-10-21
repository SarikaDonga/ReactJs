import React, { useState } from 'react';

const SignUp_Validation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();

  const handleName = (e) => {
    const name = e.target.value;
    setName(name);

    // if (name.length < 3) {
    //   setNameError(true);
    // } else {
    //   setNameError(false);
    // }
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);

    // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // if (!email.match(emailRegex)) {
    //   setEmailError(true);
    // } else {
    //   setEmailError(false);
    // }
  };

  const submit = (e) => {
    e.preventDefault();

    if (name.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailRegex)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleName}
        />
        <br /><br />
        {nameError && (
          <span style={{ color: 'red' }}>
            Name must be at least 3 characters long
          </span>
        )}
        <br /><br />
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmail}
        />
        <br /><br />
        {emailError && (
          <span style={{ color: 'red' }}>
            Enter a valid email
          </span>
        )}
        <br /><br />

        <input type="submit" value="SignUp" />
      </form>
    </div>
  );
};

export default SignUp_Validation;
