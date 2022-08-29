import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

function Product() {
    const [product, setProduct] = useState(null)
    const params = useParams()
    const URL = `https://black-pepper-backend.herokuapp.com/products/${params.id}`

    const getProduct = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setProduct(data)
    }

    
    useEffect(() =>{
        getProduct()
    }, [])

    const loading = () => {
        return (
            <div>Loading</div>
        )
    }

    const loaded = () => {

        console.log(product)

        return (
            <div className="products-container">

                        <div className="product-box">
                            <h2 className="product-brand">{product.brand}</h2>
                            <h3 className="product-name">{product.name}</h3>
                        </div>
            </div>
        )
    }

    return product ? loaded() : loading()
}

export default Product