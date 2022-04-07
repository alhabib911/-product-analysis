import React from 'react';
import useReview from '../../hooks/useReview';
import useProduct from '../../hooks/useProduct'
import Product from '../Product/Product';
import './Home.css'
import Review from '../Review/Review';


const Home = () => {
    const [review, setReview] = useReview();
    
    const [product] = useProduct()
    return (
        <div className='home-container'>
            <div className="product-details">
                {
                    product.map(product => <Product
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="review">
                {
                    review.map(review => <Review
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Home;