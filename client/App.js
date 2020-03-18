import React from 'react';
import ReviewList from './ReviewList.js';
import ShopStars from './ShopStars.js';
import axios from 'axios';

export default class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemId: 1,
            shopId: 0,
            itemReviewData: [],
            shopReviewData: [],
            tab: 'item'
        }
        this.handleItemReviewTabClick = this.handleItemReviewTabClick.bind(this);
        this.handleShopReviewTabClick = this.handleShopReviewTabClick.bind(this);
        this.handleSeeMoreReviewsClick = this.handleSeeMoreReviewsClick.bind(this);
        this.calculateStarRatingAvg = this.calculateStarRatingAvg.bind(this);
        this.getItemReviewsById = this.getItemReviewsById.bind(this);
        this.getShopReviewsById = this.getShopReviewsById.bind(this);
    }

    componentDidMount() {
        this.handleItemReviewTabClick();
        this.getItemReviewsById();
    }

    handleNavigateTo(id) {
        this.setState({
            itemId: id
        })
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
        let moreReviewsCopy = Array.from(moreReviews).slice();
        
        for (let i = moreReviews.length - 1; i >= 0; i--) { 
          moreReviews[i].classList.remove('review-hide');
        }
        if (moreReviewsCopy.length <= 20) {
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

    // get shop reviews by Id
    getShopReviewsById() {
        axios.get('http://localhost:3000/shopReviews:id', {
            params: {
                id: this.state.shopId
            }
        })
        .then((response) => {
            this.setState({
                shopReviewData: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    // get item reviews by id
    getItemReviewsById() {
        axios.get('http://localhost:3000/itemReviews:id', {
            params: {
                id: this.state.itemId
            }
        })
        .then((response) => {
            this.setState({
                shopId: response.data[0].shopId,
                itemReviewData: response.data
            });
            this.getShopReviewsById()
        })
        .catch((error) => {
            console.log(error);
        });
    }

    // get item reviews
    // getAllItemReviews() {
    //     axios.get('http://localhost:3000/itemReviews')
    //     .then((response) => {
    //         this.setState({
    //             itemReviewData: response.data
    //         })
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // }

    // get shop reviews
    // getAllShopReviews() {
    //     axios.get('http://localhost:3000/shopReviews')
    //     .then((response) => {
    //         this.setState({
    //             shopReviewData: response.data
    //         });
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // }

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
