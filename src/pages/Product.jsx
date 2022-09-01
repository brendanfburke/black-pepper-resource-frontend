import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

function Product() {
    const [product, setProduct] = useState(null)
    const params = useParams()
    const URL = `https://black-pepper-backend.herokuapp.com/products/${params.id}`
    const deleteURL = `https://black-pepper-backend.herokuapp.com/products/delete/${params.id}`
    const navigate = useNavigate()

    const getProduct = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setProduct(data)
    }

    const goHome = () => {
        let path = '/'
        navigate(path)
    }

    const deleteProduct = async () => {
        // eslint-disable-next-line
        const response = await fetch(deleteURL, {
            method: 'DELETE',
        })
        goHome()
    };

    const updateProduct = () => {
        let path = `/update/${params.id}`
        navigate(path)
    }

    
    useEffect(() =>{
        getProduct()
        // eslint-disable-next-line
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
                    <p className="product-description">{product.description}</p>
                </div>
                <button onClick={deleteProduct}>Delete Product</button>
                <button onClick={updateProduct}>Update Product</button>
            </div>
        )
    }

    return product ? loaded() : loading()
}

export default Product