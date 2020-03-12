import React from 'react';
import ReviewStars from './ReviewStars.js';

const ReviewList = (props) => {
    if (props.tab === 'item') {  
        return (
            <>
            {props.itemReviewData.map((rev, index) => (
                <div data-id={rev.id} key={index} className="review-container">
                    <div className="topline">
                        <div className="avatar"><img className="avatar-img" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="dummyAvatar"></img></div>
                        <p><a href="">{rev.reviewer}</a>{'  ' + rev.date}</p>
                    </div>
                    <div className="review-body">
                        <div className="star-text">
                            <div className="starRating"><ReviewStars star_rating={rev.star_rating}/></div>
                            <div className="text">{rev.text}</div>
                        </div>
                    </div>
                </div>
            ))}
            </>
        )
    } else {
        return (
            <>
            {props.shopReviewData.map((rev, index) => (
                <div data-id={rev.id} key={index} className="review-container">
                    <div className="topline">
                        <div className="avatar"><img className="avatar-img" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="dummyAvatar"></img></div>
                        <p><a href="">{rev.reviewer}</a>{'  ' + rev.date}</p>
                    </div>
                    <div className="review-body">
                        <div className="star-text">
                            <div className="starRating"><ReviewStars star_rating={rev.star_rating}/></div>
                            <div className="text">{rev.text}</div>
                        </div>
                    </div>
                </div>
            ))}
            </>
        )
    }
  
}

export default ReviewList;