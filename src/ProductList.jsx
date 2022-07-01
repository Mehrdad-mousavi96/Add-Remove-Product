import React from 'react';
import Product from "./Product";

const ProductList = ({products, onDelete}) => {

    return (
        <div>
            {products.map(product => {
                return (
                    <Product key={product.id} product={product} onDelete={onDelete} />
                )
            })}
        </div>
    );
};

export default ProductList;