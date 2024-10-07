import React from 'react'
import { useEffect, useState } from 'react';
const ApiCall = () => {
    const [data, setData] = useState([]);
    const [loading,setLoding]=useState(true)

    const card={
        width:'300px',
        height:'500px',
        
    }
    const cardImage={
        width:'100%',
        height:'50%'

    }
    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch('https://api.escuelajs.co/api/v1/products')

            const result = await res.json()
            console.log(result)
            setData(result)
            setLoding(false)
        }

        fetchData()
        return () => {

        };
    }, []);

    return (



        <div>
            {
                loading?<p>Loading...</p>:

    
       
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
           
           
           
            {
                loading ? <p>Loading...</p>:


                data.map((item, index) => (
                    <div key={index.id} style={card}>
                        <img src={item.images} alt="" style={cardImage}/>
                        <p><b>Title:</b>{item.title}</p>
                        <p><b>Price:</b>${item.price}</p>
                    </div>
                ))
            }



        </div>
}
        </div>
    )
}

export default ApiCall