import React from "react";
import { useState, useEffect } from "react";

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
                        <div className="product-box">
                            <h2 className="product-brand">{product.brand}</h2>
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