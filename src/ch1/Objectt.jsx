import React from 'react'

const Objectt = () => {

    const product = {
        name: 'Laptop',
        price: 1200,
        description: 'A high-performance laptop',
    };

    // Object Methods

    //1. Object.keys(): Returns an array of the object's keys (property names).
    let pro = Object.keys(product)

    // 2.Object.values(): Returns an array of the object's values.
    let pro1 = Object.values(product)

    // 3. Object.entries(): Returns an array of key-value pairs (as arrays).
    const entries = Object.entries(product);

    // 4. Object.assign(): Copies properties from one or more source objects to a target object.
    const cat = { category: "electronic" };
    const merged = Object.assign(product, cat);

    // 5. desturing Object destructuring is a powerful tool to extract properties from objects.

    const { name, price, description } = product;
    console.log(name);   
    console.log(price);    
    console.log(description); 

    return (
        <div>
            {
                <>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <p>{product.description}</p>

                </>
            }
        </div>
    )
}

export default Objectt