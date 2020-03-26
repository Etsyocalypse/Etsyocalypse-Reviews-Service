const mongoose = require('mongoose');
const db = mongoose.connection;
const creds = require('./config.js');
const Schema = mongoose.Schema;

mongoose.connect(`mongodb+srv://${creds.dbUser}:${creds.dbPass}@cluster0-dazka.mongodb.net/reviews_db?retryWrites=true&w=majority`, {useNewUrlParser: true});

db.on('error', console.error.bind(console, 'connection error:'));

const reviewSchema = new Schema ({
  productId: Number,
  shopId: Number,
  type: String,
  avatar: String,
  reviewer: String,
  date: Date,
  star_rating: Number,
  text: String,
  imageURL: String,
  item: String,
  itemImageURL: [String]
}, { collection: 'reviews' });

const reviewModel = mongoose.model('Review', reviewSchema);

const getItemReviewsById = (id, callback) => {
  reviewModel.find({ productId: id, type: 'item' }, null, { sort: {date: -1} }, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
}

const getShopReviewsById = (id, callback) => {
  reviewModel.find({ shopId: id, type: 'shop' }, null, { sort: {date: -1} }, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
}

module.exports = {getShopReviewsById, getItemReviewsById}

