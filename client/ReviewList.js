import React from 'react';

const ReviewList = (props) => {
    if (props.tab === 'item') {
        return (
            <>
            {props.reviewData.map((rev, index) => (
                <div data-id={rev.id} key={index}>
                    <div className="review topline">{rev.reviewer}</div>
                    <div className="review date">{rev.date}</div>
                    <div className="review starRating">{rev.star_rating}</div>
                    <div className="review text">{rev.text}</div>
                </div>
            ))}
            </>
        )
    }
  
}

export default ReviewList;