const mongoose = require('mongoose');
const db = mongoose.connection;
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/reviews_db', {useNewUrlParser: true});

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
  itemImageURL: String,
});

const reviewModel = mongoose.model('Review', reviewSchema);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected')
});

