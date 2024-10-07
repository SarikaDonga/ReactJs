import React from 'react'

// parent Main.jsx
const Product_Pass = ({items}) => {

  return (
    <div>
      {items.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Product_Pass