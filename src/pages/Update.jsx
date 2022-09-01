import React from "react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function Update() {
    let navigate = useNavigate()
    let params = useParams()

    const [products, setProducts] = useState(null)

    const getURL = `https://black-pepper-backend.herokuapp.com/products/${params.id}`
    const URL = `https://black-pepper-backend.herokuapp.com/products/update/${params.id}`

    const [newForm, setNewForm] = useState({
        brand: '',
        title: '',
        description: '',
    })

    const handleChange = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(newForm);
        setNewForm({
            brand: '',
            name: '',
            description: '',
        })
    }

    const getProducts = async () => {
        const response = await fetch(getURL)
        const data = await response.json()
        setProducts(data)
    }

    useEffect(() => {
        getProducts()
    }, [])

    const createProduct = async (product) => {
        await fetch(URL, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        let path = `/product/${params.id}`
        navigate(path)
    };

    const loading = () => {
        return (
            <div>Loading</div>
        )
    }

    const loaded = () => {
        console.log(products)
        return (
            <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.brand}
                    name="brand"
                    placeholder='Brand'
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.description}
                    name="description"
                    placeholder="Product description"
                    onChange={handleChange}
                />
                <input type="submit" value="Update Listing" />
            </form>
        </section>
        )

    }

    return products ? loaded() : loading()
}

export default Update