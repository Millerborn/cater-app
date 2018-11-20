const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// Return specific Chef information from Server
router.get('/', (req, res) => {
    const queryText = 'SELECT first_name, last_name, specialty, min_price FROM chef_profile;';
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT project query', err);
        res.sendStatus(500);
      });
  });

// Return Chef menu information from Server
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM menu_item WHERE chef_id=1;';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT project query', err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;