const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const db = require('./db.js');

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// get request for product review data (max of 4)
app.get('/itemReviews', (req, res) => {
    db.getItemReviews((err, result) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.send(result);
        }
    })
});

// get request for more product reviews (5 to 20)
app.get('/moreItemReviews', (req, res) => {});

// get request for shop review data (max of 4)
app.get('/shopReviews', (req, res) => {});

// get request for shop review data (5 to 20)
app.get('/moreShopReviews', (req, res) => {});

app.listen(port, () => console.log(`Reviews app listening on port ${port}!`));
