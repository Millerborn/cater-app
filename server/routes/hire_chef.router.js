const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// Return all Chefs from Server
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM chef_profile;';
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