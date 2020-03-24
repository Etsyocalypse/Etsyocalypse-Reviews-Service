import React from 'react';
import ReviewStars from './ReviewStars.js';
import SeeMoreReviews from './SeeMoreReviews.js';
import Moment from 'react-moment';

const ReviewList = (props) => {
    if (props.tab === 'item') {
        return (
            <>
            {props.itemReviewData.map((rev, index) => (
                        <div data-id={rev.id} key={index} className={`review-container ${index > 3 ? "review-hide" : ""}`}>
                            <div className="review-topline">
                                <div className="review-avatar"><i className="fas fa-user-circle" style={props.setRandomAvatarColor()}></i></div>
                                <p><a className="review-link-txt" href="">{rev.reviewer}</a>&nbsp;&nbsp;<Moment format="MMM, D YYYY">{rev.date}</Moment></p>
                            </div>
                            <div className="review-body">
                                <div className="review-star-text">
                                    <div className="review-starRating"><ReviewStars star_rating={rev.star_rating}/></div>
                                    <div className="review-text">{rev.text}</div>
                                    <p className="review-purchased-item">Purchased item:</p>
                                    <div className="review-topline">
                                      <div className="review-item-link">
                                        <a href=""><img className="review-avatar review-images" src={rev.itemImageURL[0]}></img></a>
                                      </div>
                                      <a className="review-item-link review-link-txt" href="">{rev.item}</a>
                                    </div>
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
                        <div className="review-avatar"><i className="fas fa-user-circle" style={props.setRandomAvatarColor()}></i></div>
                        <p><a className="review-link-txt" href="">{rev.reviewer}</a>&nbsp;&nbsp;<Moment format="MMM, D YYYY">{rev.date}</Moment></p>
                    </div>
                    <div className="review-body">
                        <div className="review-star-text">
                            <div className="review-starRating"><ReviewStars star_rating={rev.star_rating}/></div>
                            <div className="review-text">{rev.text}</div>
                            <p className="review-purchased-item">Purchased item:</p>
                            <div className="review-topline">
                                <div className="review-item-link">
                                <a href=""><img className="review-avatar review-images" src={rev.itemImageURL[0]}></img></a>
                                </div>
                                <a className="review-item-link review-link-txt" href="">{rev.item}</a>
                            </div>
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