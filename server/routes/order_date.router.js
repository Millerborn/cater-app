const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(`in order_date.router.js POST for`, req.body);
    const newOrder = req.body;
    const queryText = `INSERT INTO orders ("order_date")
    VALUES ($1);`;

    const queryValues = [
        newOrder.order_date,
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((error) => {
        console.log('error adding address', error);
        res.sendStatus(500)
      })
});

module.exports = router;