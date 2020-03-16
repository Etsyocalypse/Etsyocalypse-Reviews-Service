import React from 'react';
import ReviewList from './ReviewList.js';
import ShopStars from './ShopStars.js';
import Dummydata from './Dummydata.js';

export default class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemId: 0,
            shopId: 0,
            itemReviewData: Dummydata.itemReviewData,
            shopReviewData: Dummydata.shopReviewData,
            tab: 'item'
        }
        this.handleItemReviewTabClick = this.handleItemReviewTabClick.bind(this);
        this.handleShopReviewTabClick = this.handleShopReviewTabClick.bind(this);
        this.handleSeeMoreReviewsClick = this.handleSeeMoreReviewsClick.bind(this);
        this.calculateStarRatingAvg = this.calculateStarRatingAvg.bind(this);
    }


    componentDidMount() {
        this.handleItemReviewTabClick();
    }

    handleItemReviewTabClick() {
        let shopTab = document.getElementById('review-tabShop');
        shopTab.classList.remove('review-selectedTab');
        let itemTab = document.getElementById('review-tabItem');
        itemTab.classList.add('review-selectedTab');
        this.setState({
            tab: 'item'
        });
    }

    handleShopReviewTabClick() {
        let itemTab = document.getElementById('review-tabItem');
        itemTab.classList.remove('review-selectedTab');
        let shopTab = document.getElementById('review-tabShop');
        shopTab.classList.add('review-selectedTab');
        this.setState({
            tab: 'shop'
        })
    }

    handleSeeMoreReviewsClick() {
        let moreReviews = document.getElementsByClassName('review-hide');
        for (let i = 0; i < moreReviews.length; i++) {
          moreReviews[i].classList.remove('review-hide');
        }
        if (moreReviews.length <= 20) {
            let moreReviewsBtn = document.getElementById('review-more-btn');
            moreReviewsBtn.classList.add('review-hide');
        }
    }

    // calculate star rating average
    calculateStarRatingAvg(reviewDataArray) {
        let starTotal = 0;
        let reviewCount = 0;
        for (let record of reviewDataArray) {
            starTotal += record.star_rating;
            reviewCount++;
        }
        return starTotal / reviewCount;
    }
    
    // get shop reviews

    // get number of shop reviews

    // get shop rating

    // get item reviews

    render() {
        return (
            <div className="review-main">
                <div className="review-ratings">
                    <div className="review-shop">
                      <p className="review-rating-headers review-shop-rating">Shop rating</p>
                      <ShopStars calcStars={this.calculateStarRatingAvg} shopReviewData={this.state.shopReviewData}/>
                    </div>
                    <div className="review-shop">
                        <p className="review-rating-headers review-shop-review">Total shop reviews</p>
                        <p className="review-shopReviewNum">{this.state.shopReviewData.length}</p>
                    </div>
                </div>
                <div id="review-tab-container">
                    <div id="review-tabs">
                        <button id="review-tabItem" className="review-tabAnimate" onClick={this.handleItemReviewTabClick}>Reviews for this item<span className="review-reviewNum">{this.state.itemReviewData.length}</span></button>
                        <button id="review-tabShop" className="review-tabAnimate" onClick={this.handleShopReviewTabClick}>Reviews for this shop<span className="review-reviewNum">{this.state.shopReviewData.length}</span></button>
                    </div>
                </div>
                <div className="review-reviewList" ><ReviewList handleSeeMoreReviewsClick={this.handleSeeMoreReviewsClick} itemReviewData={this.state.itemReviewData} shopReviewData={this.state.shopReviewData} tab={this.state.tab}/></div>
                <div className="review-pictures">
                    <p>Photos from reviews</p>
                </div>
            </div>
        )
    }
}
