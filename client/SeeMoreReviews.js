import React from 'react';

const SeeMoreReviews = (props) => {
  if (props.tab === 'item') {
      if (props.itemReviewData.length > 4) {
        return (
            <div className="review-txt-center">
                <button onClick={props.handleSeeMoreReviewsClick} id="review-more-btn">See more reviews</button>
            </div>
        )
      } else {
          return null;
      }
  } else if (props.tab === 'shop') {
      if (props.shopReviewData.length > 4) {
        return (
            <div className="review-txt-center">    
                <button onClick={props.handleSeeMoreReviewsClick} id="review-more-btn">See more reviews</button>
            </div>
        )
      } else {
          return null;
      }
  }
}

export default SeeMoreReviews;