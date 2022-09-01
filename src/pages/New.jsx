import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";

function New() {

    let navigate = useNavigate()


    const URL = 'https://black-pepper-backend.herokuapp.com/products'

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

    const createProduct = async (product) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        let path = `/`
        navigate(path)
    };

    return (
        <section>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newForm.brand}
                name="brand"
                placeholder="Brand"
                onChange={handleChange}
            />
            <input
                type="text"
                value={newForm.name}
                name="name"
                placeholder="Product name..."
                onChange={handleChange}
            />
            <input
                type="text"
                value={newForm.description}
                name="description"
                placeholder="Product description"
                onChange={handleChange}
            />
            <input type="submit" value="Create Listing" />
        </form>
    </section>
    )
}

export default New