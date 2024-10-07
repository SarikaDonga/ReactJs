import React, { useState } from 'react'
import Child from './Child'
import Product_Pass from './Product_Pass'
import Default_Props from './Default_Props';

const Main = () => {

    const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Smartphone', price: 699 },
    { id: 3, name: 'Tablet', price: 499 },
  ];

  return (
    <div>

      <Child name="sarika" age={26} email="sarika@gmail.com"/>
      <Product_Pass items={products}/>
      
      <Default_Props name="sarika" message="Welcome to React!" />
      {/* No props passed, default props will be used */}
      <Default_Props/>
      
    </div>
  )
}

export default Main