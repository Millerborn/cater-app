const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

  router.put('/:id', (req, res) => {
    console.log('edit customer router');
    const customerId = req.params.id;
    const updatedCustomer = req.body;
    const queryText = `UPDATE customers
    SET first_name = $1, 
    last_name = $2, 
    favorites = $3, 
    email = $4, 
    phone = $5
    WHERE id=$6;`;
  
    const queryValues = [
      updatedCustomer.first_name,
      updatedCustomer.last_name,
      updatedCustomer.favorites,
      updatedCustomer.email,
      updatedCustomer.phone,
      customerId
    ];
  
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(200); })
      .catch((error) => {
        console.log('Error completing update customer query', error);
        res.sendStatus(500);
      });
  });

module.exports = router;