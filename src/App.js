import React, {useState, useEffect} from 'react';
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";

const App = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const sendRequest = async () => {
            const response = await  fetch('http://localhost:8000/products')

            const responseData = await response.json()

            setProducts(responseData)
        }

        sendRequest()

    }, [])

    const addProduct = async (title) => {

        const response =  await fetch('http://localhost:8000/products', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }, 
            body: JSON.stringify(title)
        })

        const responseData = await response.json()

        setProducts([...products, responseData])
    }


    const deleteProduct = async (id) => {

        await fetch(`http://localhost:8000/products/${id}`, {
            method: 'DELETE'
        })

        setProducts(products.filter((product) => product.id != id))
    }

    return (
        <div style={{margin: '20px', padding: '10px'}}>
            <AddProduct onAdd={addProduct} />
            <ProductList products={products} onDelete={deleteProduct} />
        </div>
    );
};

export default App;