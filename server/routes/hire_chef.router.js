const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// Return specific Chef information from Server
router.get('/', (req, res) => {
    const queryText = `SELECT menu_item.*, chef_profile.id as chef_profile_id, 
    chef_profile.first_name, chef_profile.last_name
    FROM menu_item
    JOIN chef_profile ON chef_profile.chef_id = menu_item.chef_id
    GROUP BY menu_item.id, chef_profile.id;
    `;
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