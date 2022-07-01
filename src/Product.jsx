import React, {useState} from 'react';

const Product = ({product, onDelete}) => {


    return (
        <div style={{margin: "10px"}} >
            <div>{product.title}</div>
            <div>
                <button onClick={() => onDelete(product.id)} >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Product;