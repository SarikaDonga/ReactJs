import React from 'react'

const Object_Foreach = () => {
    const products = [
        { id: 1, name: 'Laptop', price: 999 },
        { id: 2, name: 'Smartphone', price: 699 },
        { id: 3, name: 'Tablet', price: 499 },
      ];

      let product_item=[]
      products.forEach((item,i)=>(
        product_item.push(


            <li  key={item.id}>{item.name}-{item.price}</li>
        )
      ))

      
  return (
    <div>

        <ul>
            {product_item}
        </ul>
    </div>
  )
}

export default Object_Foreach