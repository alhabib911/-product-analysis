import React from 'react';
import './Product.css'

const Product = (props) => {
    const { image, productName, details, video} = props.product
    return (
        <div className='product-details'>
            <div className='contant'>
                <h2>{productName}</h2>
                <p>{details}</p>
                <div className="watch-btn">
                <a href={video}>Watch Now</a>
                </div>
            </div>
            <div className='photo'>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Product;