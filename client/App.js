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
        this.calculateStarRatingAvg = this.calculateStarRatingAvg.bind(this);
    }

    handleItemReviewTabClick() {
        let shopTab = document.getElementById('tabShop');
        shopTab.classList.remove('selectedTab');
        let itemTab = document.getElementById('tabItem');
        itemTab.classList.add('selectedTab');
        this.setState({
            tab: 'item'
        });
    }

    handleShopReviewTabClick() {
        let itemTab = document.getElementById('tabItem');
        itemTab.classList.remove('selectedTab');
        let shopTab = document.getElementById('tabShop');
        shopTab.classList.add('selectedTab');
        this.setState({
            tab: 'shop'
        })
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
            <div className="review main">
                <div className="review ratings">
                    <div className="review shop">
                      <p className="review rating-headers shop-rating">Shop rating</p>
                      <ShopStars calcStars={this.calculateStarRatingAvg} shopReviewData={this.state.shopReviewData}/>
                    </div>
                    <div className="review shop">
                        <p className="review rating-headers shop-review">Total shop reviews</p>
                        <p className="review shopReviewNum">{this.state.shopReviewData.length}</p>
                    </div>
                </div>
                <div id="review-tab-container">
                    <div id="tabs">
                        <button id="tabItem" className="tabAnimate" onClick={this.handleItemReviewTabClick}>Reviews for this item<span className="reviewNum">{this.state.itemReviewData.length}</span></button>
                        <button id="tabShop" className="tabAnimate" onClick={this.handleShopReviewTabClick}>Reviews for this shop<span className="reviewNum">{this.state.shopReviewData.length}</span></button>
                    </div>
                </div>
                <div className="review reviewList" ><ReviewList itemReviewData={this.state.itemReviewData} shopReviewData={this.state.shopReviewData} tab={this.state.tab}/></div>
                <div className="review pictures">
                    <p>Photos from reviews</p>
                </div>
            </div>
        )
    }
}
