import React from 'react'

// pass attribute
const Child = ({ name, age, city }) => {

    return (
        <div>

            {/* Pass Attributes  */}
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>City:{city}</p>


        </div>
    )
}

export default Child