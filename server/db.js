var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/reviews_db', {useNewUrlParser: true});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected')
});