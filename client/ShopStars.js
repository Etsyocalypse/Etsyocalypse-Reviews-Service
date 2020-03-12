import React from 'react';

const ShopStars = (props) => {
    let avgStars = props.calcStars(props.shopReviewData); // run calc avg function on reviews sent down as props
    if (avgStars >= 4.75 && avgStars <= 5) { // if result star rating is between 4.75 and 5
        return (
            <>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            </>
          ); // return - render 5 star icons
    } else if (avgStars >= 4.25 && avgStars <= 4.74) { // if result star rating  is between 4.25 and 4.74
        return (
            <>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            </>
          );// return - render 4 stars and 1 half star
    } else if (avgStars >= 3.75 && avgStars <= 4.24) { // if result star rating  is between 3.75 and 4.24
        return (
            <>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            </>
          );// return - render 4 stars
    } else if (avgStars >= 3.25 && avgStars <= 3.74) { // if result star rating  is between 3.25 and 3.74
        return (
            <>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <i className="far fa-star"></i>
            </>
          );// return - render 3 stars and 1 half star
    } else if (avgStars >= 2.75 && avgStars <= 3.24) { // if result star rating  is between 2.75 and 3.24
        return (
            <>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            </>
          );// return - render 3 stars
    } else if (avgStars >= 2.25 && avgStars <= 2.74) { // if result star rating  is between 2.25 and 2.74
        return (
            <>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            </>
          );// return - render 2 stars and 1 half star
    } else if (avgStars >= 1.75 && avgStars <= 2.24) { // if result star rating  is between 1.75 and 2.24
        return (
            <>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            </>
          );// return - render 2 stars
    } else if (avgStars >= 1.25 && avgStars <= 1.74) { // if result star rating  is between 1.25 and 1.74
        return (
            <>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            </>
          );// return - render 1 stars and 1 half star
    } else if (avgStars >= .75 && avgStars <= 1.24) { // if result star rating  is between .75 and 1.24
      // return - render 1 star
      return (
        <>
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        </>
      )
    } else if (avgStars >= .25 && avgStars <= .74) { // if result star rating  is between .25 and .74
        return (
            <>
            <i className="fas fa-star-half-alt"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            </>
          );// return - render 1 half star
    } else { // else 
        return (
            <>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            </>
          );// return - render 0 stars
    }
}

export default ShopStars;