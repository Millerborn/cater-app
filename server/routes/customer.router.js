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

  router.post('/', async (req, res) => {
    console.log(`in customer.router.js POST for`, req.body);
    const client = await pool.connect();
    try {
        const {
            street,
            city,
            state,
            zip,
            address_type
        } = req.body;
        await client.query('BEGIN')
        await client.query(`INSERT INTO addresses ("street", "city", "state", "zip", "address_type")
        VALUES ($1, $2, $3 $4, $5);`, [ street, city, state, zip, address_type ]);

        await client.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error post /shelf', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
});

module.exports = router;