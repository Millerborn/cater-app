const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// Return all Chefs from Server
router.get('/:id', (req, res) => {
    const personId = req.params.id;
    console.log('person Id', personId);
    const queryText = `SELECT addresses.*, person.id as persons_id FROM addresses
    JOIN person ON person.id = addresses.person_id
    WHERE person.id=$1;`;
    pool.query(queryText, [personId])
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT project query', err);
        res.sendStatus(500);
      });
  });

module.exports = router;