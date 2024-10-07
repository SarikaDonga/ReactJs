import React from 'react'

const Default_Props = ({ name, message }) => {
    return (
        <div>
            <h2>Hello, {name}!</h2>
            <p>{message}</p>
        </div>
    )
}
Default_Props.defaultProps = {
    name: 'Guest',
    message: 'Hello! Welcome to the site!',
};


export default Default_Props