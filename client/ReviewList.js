import React from 'react';
import ReviewStars from './ReviewStars.js';
import SeeMoreReviews from './SeeMoreReviews.js';

const ReviewList = (props) => {
    if (props.tab === 'item') {  
        return (
            <>
            {props.itemReviewData.map((rev, index) => (
                        <div data-id={rev.id} key={index} className={`review-container ${index > 3 ? "review-hide" : ""}`}>
                            <div className="review-topline">
                                <div className="review-avatar"><i className="fas fa-user-circle"></i></div>
                                <p><a href="">{rev.reviewer}</a>&nbsp;&nbsp;{rev.date}</p>
                            </div>
                            <div className="review-body">
                                <div className="review-star-text">
                                    <div className="review-starRating"><ReviewStars star_rating={rev.star_rating}/></div>
                                    <div className="review-text">{rev.text}</div>
                                </div>
                            </div>
                        </div>
            ))}
            <SeeMoreReviews handleSeeMoreReviewsClick={props.handleSeeMoreReviewsClick} itemReviewData={props.itemReviewData} tab={props.tab}/>
            </>
        )
    } else {
        return (
            <>
            {props.shopReviewData.map((rev, index) => (
                <div data-id={rev.id} key={index} className={`review-container ${index > 3 ? "review-hide" : ""}`}>
                    <div className="review-topline">
                        <div className="review-avatar"><i className="fas fa-user-circle"></i></div>
                        <p><a href="">{rev.reviewer}</a>&nbsp;&nbsp;{rev.date}</p>
                    </div>
                    <div className="review-body">
                        <div className="review-star-text">
                            <div className="review-starRating"><ReviewStars star_rating={rev.star_rating}/></div>
                            <div className="review-text">{rev.text}</div>
                        </div>
                    </div>
                </div>
            ))}
            <SeeMoreReviews handleSeeMoreReviewsClick={props.handleSeeMoreReviewsClick} shopReviewData={props.shopReviewData} tab={props.tab}/>
            </>
        )
    }
  
}

export default ReviewList;