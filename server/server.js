const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 3000;
const db = require('./db.js');

app.use(express.static(path.join(__dirname, '../dist')));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// get item reviews by id
app.get('/itemReviews:id', (req, res) => {
    db.getItemReviewsById(req.query.id, (err, result) => {
        if (err) {
            console.log(err)
            res.status(404).send(err);
        } else {
            res.send(result);
        }
    })
})

// get shop reviews by id
app.get('/shopReviews:id', (req, res) => {
    db.getShopReviewsById(req.query.id, (err, result) => {
        if (err) {
            res.status(404).send(err);
        } else {
            res.send(result);
        }
    })
});

app.listen(port, () => console.log(`Reviews app listening on port ${port}!`));
