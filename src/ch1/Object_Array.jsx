import React, { useState } from 'react'

const Object_Array = () => {
    let products = [
        {
            "id": 1,
            "name": "Laptop",
            "price": 1200,
            "description": "High-performance laptop with 16GB RAM and 512GB SSD.",
            "category": "Electronics",
            "inStock": true,
            "image": "https://cdn.thewirecutter.com/wp-content/media/2023/11/editing-laptop-2048px-231551-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp"
        },
        {
            "id": 2,
            "name": "Smartphone",
            "price": 800,
            "description": "Latest smartphone with a 6.5-inch display and 128GB storage.",
            "category": "Electronics",
            "inStock": false,
            "image": "https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Grey_PC_0527_final.jpg?imbypass=true"
        },
        {
            "id": 3,
            "name": "Headphones",
            "price": 150,
            "description": "Noise-cancelling over-ear headphones with Bluetooth connectivity.",
            "category": "Accessories",
            "inStock": true,
            "image": "https://m.media-amazon.com/images/I/61XvYOrqVeL._SX522_.jpg"
        },
        {
            "id": 4,
            "name": "Running Shoes",
            "price": 120,
            "description": "Comfortable running shoes with durable cushioning.",
            "category": "Footwear",
            "inStock": true,
            "image": "https://m.media-amazon.com/images/I/61utX8kBDlL._SY695_.jpg"
        },
        {
            "id": 5,
            "name": "Wristwatch",
            "price": 250,
            "description": "Stylish wristwatch with water resistance and leather strap.",
            "category": "Accessories",
            "inStock": true,
            "image": "https://m.media-amazon.com/images/I/71jl69CU7yL._SX679_.jpg"
        }
    ]


    // filter product


    // State to hold the filtered products (initially show all products)
    const [filteredProducts, setFilteredProducts] = useState([...products]);

    // Function to filter products based on in-stock status
    const filterInStock = () => {
        setFilteredProducts([...products.filter(product => product.inStock)]);
    };

    // Function to filter products based on category
    const filterByCategory = (category) => {
        setFilteredProducts([...products.filter(product => product.category === category)]);
    };

    // Reset the product list to show all products
    const resetFilters = () => {
        setFilteredProducts([...products]);
    };
    return (
        <>
            <div className='container'>


                {
                    filteredProducts.length > 0 ? (filteredProducts.map((product, index) => (
                        <div key={index} className='product'>
                            <img src={product.image} alt="" className='product_img' />
                            <h2>{product.name}</h2>
                            <p>Price:{product.price}</p>
                            <p>Category:{product.category}</p>
                            <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
                        </div>
                    ))

                    ) : (
                        <h1>No products found</h1>
                    )}
            </div>



            <div>

                <button onClick={filterInStock}>Show In-Stock Products</button>
                <button onClick={() => filterByCategory('Electronics')}>Show Electronics</button>
                <button onClick={() => filterByCategory('Accessories')}>Show Accessories</button>
                <button onClick={() => filterByCategory('Footwear')}>Show Footwear</button>
                <button onClick={resetFilters}>Show All Products</button>
            </div>
        </>)
}

export default Object_Array