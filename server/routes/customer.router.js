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

//   router.post('/', (req, res) => {
//     console.log(`in customer.router.js POST for`, req.body);
//     const newAddress = req.body;
//     const queryText = `INSERT INTO addresses ("street", "city", "state", "zip", "address_type")
//     VALUES ($1, $2, $3, $4, $5);`;

//     const queryValues = [
//       newAddress.street,
//       newAddress.city,
//       newAddress.state,
//       newAddress.zip,
//       newAddress.address_type,
//     ];
//     pool.query(queryText, queryValues)
//       .then(() => { res.sendStatus(201); })
//       .catch((error) => {
//         console.log('error adding address', error);
//         res.sendStatus(500)
//       })
// });

module.exports = router;