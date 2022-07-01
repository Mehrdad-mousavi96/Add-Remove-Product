import React from 'react';
import Product from "./Product";

const App = () => {

    const product = {
        title: 'Book 1'
    }
    return (
        <div>
            <Product title={product} />
        </div>
    );
};

export default App;