import React, {useState} from 'react';
import Product from "./Product";
import ProductList from "./ProductList";
import product from "./Product";
import AddProduct from "./AddProduct";

const App = () => {

    const [products, setProducts] = useState([
        {id: 1, title: 'Book 1'},
        {id: 2, title: 'Book 2'},
        {id: 3, title: 'Book 3'}
    ])

    const addProduct = (title) => {
        const id = Math.floor(Math.random() * 10000)
        const newProduct = {id, ...title}
        setProducts([...products, newProduct])
    }

    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id != id))
    }

    return (
        <div style={{margin: '20px', padding: '10px'}}>
            {/*<Product  />*/}
            <AddProduct onAdd={addProduct} />
            <ProductList products={products} onDelete={deleteProduct} />
        </div>
    );
};

export default App;