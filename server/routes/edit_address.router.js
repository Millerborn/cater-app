const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

  router.put('/:id', (req, res) => {
    console.log('edit address router');
    const addressId = req.params.id;
    const updatedAddress = req.body;
    const queryText = `UPDATE addresses
    SET "street" = $1, 
    "city" = $2, 
    "state" = $3, 
    "zip" = $4, 
    "address_type" = $5,
    WHERE id=$6;`;
  
    const queryValues = [
      updatedAddress.street,
      updatedAddress.city,
      updatedAddress.state,
      updatedAddress.zip,
      updatedAddress.address_type,
      addressId
    ];
  
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing SELECT plant query', err);
        res.sendStatus(500);
      });
  });

module.exports = router;