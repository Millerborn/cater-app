const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Return customer address information from Server
router.get('/:id', (req, res) => {
    const customerId = req.params.id;
    console.log('GET customer address of person id', customerId);
    const queryText = `SELECT addresses.*, person FROM addresses
    JOIN person ON person.id = addresses.person_id
    WHERE person.id=${customerId};`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT chef menu query', err);
        res.sendStatus(500);
      });
  });

module.exports = router;