import React from 'react'
import { useState ,useEffect} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    

    useEffect(() => {
        document.title = `Count: ${count}`; // Update the  title
      }, [count]); // Re-run this effect when the count changes
    
   
    return (
        <div>

            {count}
            <button onClick={()=>setCount(count+1)}>Increement</button>
        </div>
    )
}

export default Counter