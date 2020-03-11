const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// get request for product review data (max of 4)
app.get('/reviews', (req, res) => {});

// get request for more product reviews (5 to 20)
app.get('/moreReviews', (req, res) => {});

// get request for shop review data (max of 4)
app.get('/shopReviews', (req, res) => {});

// get request for shop review data (5 to 20)
app.get('/moreShopReviews', (req, res) => {});

app.listen(port, () => console.log(`Reviews app listening on port ${port}!`));
