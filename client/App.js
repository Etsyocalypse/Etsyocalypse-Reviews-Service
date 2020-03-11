import React from 'react';
import ReviewList from './ReviewList.js';
import Dummydata from './Dummydata.js';

export default class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewData: Dummydata.Dummydata,
            tab: 'item'
        }
    }

    render() {
        return (
            <div className="review main">
                <div className="review ratings">
                    <div className="review shop">
                      <p className="review shopRating">Shop rating</p>
                    </div>
                    <div className="review shop">
                        <p className="review shopReview">Total shop reviews</p>
                    </div>
                </div>
                <div className="review tabs">
                    <button className="tab">Reviews for this item</button>
                    <button className="tab">Reviews for this shop</button>
                </div>
                <div className="review reviewList" ><ReviewList reviewData={this.state.reviewData} tab={this.state.tab}/></div>
                <div className="review pictures">
                    <p>Photos from reviews</p>
                </div>
            </div>
        )
    }
}
