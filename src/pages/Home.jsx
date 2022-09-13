import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {

    const [products, setProducts] = useState(null)
    const URL = 'https://black-pepper-backend.herokuapp.com/products'

    const getProducts = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setProducts(data)
    }

    
    useEffect(() =>{
        getProducts()
    }, [])

    const loading = () => {
        return (
            <div>Loading</div>
        )
    }

    const loaded = () => {


        return (
            <div className="products-container">
                {products.map((product, idx) => {
                    return (
                        <div key={idx}  className="product-box">
                            <Link className="product-link" to={`/product/${product._id}`}>
                                <h2 className="product-brand">{product.brand}</h2>
                            </Link>
                            <h3 className="product-name">{product.name}</h3>
                        </div>
                    )
                })}
            </div>
        )
    }

    return products ? loaded() : loading()
}

export default Home