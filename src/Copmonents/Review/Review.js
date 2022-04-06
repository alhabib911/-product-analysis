import React from 'react';
import './Review.css'

const Review = (props) => {
    const { authorName, authorImg, comment, review, reviewTwo, reviewThree, reviewFour, reviewFive } = props.review
    return (
        <div className="home-container">
            <div className='customer-review'>
                <div className='author'>
                    <img className='photo' src={authorImg} alt="" />
                    <p className='author-name'>Author: <small>{authorName}</small></p>
                    <p>{comment}</p>
                    <div className='rating-sign'>
                        <p>Rating:</p>
                        <div className='star'>

                            <img src={review} alt="" />
                            <img src={reviewTwo} alt="" />
                            <img src={reviewThree} alt="" />
                            <img src={reviewFour} alt="" />
                            <img src={reviewFive} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;