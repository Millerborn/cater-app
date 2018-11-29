const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Return customer address information from Server
router.get('/:id', (req, res) => {
    const customerId = req.params.id;
    console.log('GET customer address of person id', customerId);
    const queryText = `SELECT addresses.*, customers.*, person FROM addresses
    JOIN person ON person.id = addresses.person_id
    JOIN customers ON customers.person_id = person.id
    WHERE person.id=${customerId};`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT chef menu query', err);
        res.sendStatus(500);
      });
  });

  router.put('/:id', (req, res) => {
    console.log('updating address', req.params.id);
    const customerId = req.params.id;
    const updatedAddress = req.body;
    const queryText = `UPDATE customers
    SET "first_name" = $1, 
    "last_name" = $2, 
    "favorites" = $3, 
    "email" = $4, 
    "phone" = $5,
    WHERE id=$6;`;
  
    const queryValues = [
      updatedAddress.street,
      updatedAddress.city,
      updatedAddress.state,
      updatedAddress.zip,
      updatedAddress.address_type,
      customerId
    ];
  
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing SELECT address query', err);
        res.sendStatus(500);
      });
  });

module.exports = router;