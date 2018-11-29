const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(`in customer.router.js POST for`, req.body);
    const newCustomer = req.body;
    const queryText = `INSERT INTO customers ("first_name", "last_name", "favorites", "email", "phone", "person_id")
    VALUES ($1, $2, $3, $4, $5, $6);`;

    const queryValues = [
      newCustomer.first_name,
      newCustomer.last_name,
      newCustomer.favorites,
      newCustomer.email,
      newCustomer.phone,
      newCustomer.person_id,
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((error) => {
        console.log('error adding customer to database', error);
        res.sendStatus(500)
      })
});

module.exports = router;