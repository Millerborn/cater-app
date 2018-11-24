const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Return customers address from Server
router.get('/:id', (req, res) => {
    console.log('id', req.params.id);
    const personId = req.params.id
    console.log('response for get addresses');
    const queryText = `SELECT addresses.*, orders.menu_item_id, person.id, customers.*, menu_item.title, menu_item.time_to_make FROM addresses 
    JOIN person ON person.id = addresses.person_id
    JOIN customers ON customers.person_id = person.id
    JOIN orders ON orders.address_id = addresses.id 
    JOIN menu_item ON menu_item.id = orders.menu_item_id
    WHERE customers.person_id=${personId};`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT project query', err);
        res.sendStatus(500);
      });
  });

// Return Chef info and chef menu from Server
router.get('/:id', (req, res) => {
    const personId = req.params.id;
    console.log('GET order', personId);
    const queryText = `SELECT addresses.*, orders.menu_item_id, 
    person.id, customers.*, menu_item.title, menu_item.time_to_make 
    FROM addresses 
    JOIN person ON person.id = addresses.person_id
    JOIN customers ON customers.person_id = person.id
    JOIN orders ON orders.address_id = addresses.id 
    JOIN menu_item ON menu_item.id = orders.menu_item_id
    WHERE person.id=$1;`;
    pool.query(queryText, [personId])
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT chef menu query', err);
        res.sendStatus(500);
      });
  });

  router.put('/', (req, res) => {
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
      updatedAddress.id,
    ];
  
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing SELECT address query', err);
        res.sendStatus(500);
      });
  });

  router.delete('/', (req, res) => {
    const queryText = 'DELETE FROM addresses WHERE id=$1';
    pool.query(queryText, [req.query.id])
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing delete address query', err);
        res.sendStatus(500);
      });
  });

module.exports = router;