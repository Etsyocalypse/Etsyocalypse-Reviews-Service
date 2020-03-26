import React from 'react';

const SeeMoreReviews = (props) => {
  if (props.tab === 'item' && props.showAllItemReviews === false) {
      if (props.itemReviewData.length > 4) {
        return (
            <div className="review-txt-center">
                <button onClick={props.handleSeeMoreReviewsClick} id="review-more-btn-item">See more reviews</button>
            </div>
        )
      } else {
          return null;
      }
  } else if (props.tab === 'shop' && props.showAllShopReviews === false) {
      if (props.shopReviewData.length > 4) {
        return (
            <div className="review-txt-center">
                <button onClick={props.handleSeeMoreReviewsClick} id="review-more-btn-shop">See more reviews</button>
            </div>
        )
      } else {
          return null;
      }
  } else {
      return null;
  }
}

export default SeeMoreReviews;