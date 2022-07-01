import React from 'react';

const Product = ({title}) => {

    const clickHandler = () => {
        console.log('hi')
    }

    return (
        <>
            <div>
                {title}
            </div>
            <button onClick={() => console.log('title')}>title</button>
        </>

    );
};

export default Product;