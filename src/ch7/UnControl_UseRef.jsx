import { useRef } from "react";
import React from 'react'

const UnControl_UseRef = () => {
    const nameInput = useRef(null);
    const emailInput = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Submitted: Name - ${nameInput.current.value}, Email - ${emailInput.current.value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    ref={nameInput}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    ref={emailInput}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default UnControl_UseRef