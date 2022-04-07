import React from 'react';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [review] = useReview();
    return (
        <div className='customer-review'>
            <div className="text">
                <h2>Customer Review</h2>
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

export default Reviews;


// import React from 'react';

// const Reviews = () => {
//     return (
//         <div>
//             <h2>reviews</h2>
//         </div>
//     );
// };

// export default Reviews;