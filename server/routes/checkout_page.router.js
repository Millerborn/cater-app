const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Return customers address from Server
router.get('/', (req, res) => {
    // const customerId = req.params.id
    console.log('response for get addresses', response.data);
    const queryText = `SELECT * FROM addresses;`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT project query', err);
        res.sendStatus(500);
      });
  });

module.exports = router;