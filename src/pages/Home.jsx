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
            <div className="content-wrap">
                <p className="about-section">This site was created by Brendan Burke as a resource for anyone suffering from a Black Peppercorn allergy. The following list of products have been verified to exclude Black Pepper from the ingredients list. Please feel free to contribute any products that you know to be pepper free!</p>
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
            </div>
            
        )
    }

    return products ? loaded() : loading()
}

export default Home