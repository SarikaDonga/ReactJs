import React, { useState, useEffect } from 'react';

const WindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        // Function to update the window width state
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        //  window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener 
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 

    return (
        <div>
            <h1>Window Width: {windowWidth}</h1>

        </div>
    )
}

export default WindowWidth