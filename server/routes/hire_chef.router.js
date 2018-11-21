// const express = require('express');
// const pool = require('../modules/pool');
// const router = express.Router();


// // Return specific Chef information from Server
// router.get('/', (req, res) => {
//   console.log('in GET chef info');
//     const queryText = `SELECT menu_item.*, chef_profile.id as chef_profile_id, 
//     chef_profile.first_name, chef_profile.last_name
//     FROM menu_item
//     JOIN chef_profile ON chef_profile.chef_id = menu_item.chef_id
//     GROUP BY menu_item.id, chef_profile.id;
//     `;
//     pool.query(queryText)
//       .then((result) => { res.send(result.rows); })
//       .catch((err) => {
//         console.log('Error completing SELECT project query', err);
//         res.sendStatus(500);
//       });
//   });

// // Return Chef menu information from Server
// router.get('/:id', (req, res) => {
//   console.log('in GET chef menu router');
//   const queryText = 'SELECT * FROM menu_item WHERE menu_item.chef_id=$1;';
//   pool.query(queryText)
//     .then((result) => { res.send(result.rows); })
//     .catch((err) => {
//       console.log('Error completing SELECT project query', err);
//       res.sendStatus(500);
//     });
// });

// module.exports = router;

const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// Return specific Chef information from Server
router.get('/:id', (req, res) => {
    const chefInfo = req.params.id
    console.log('GET chef info from id', chefInfo);
    const queryText = `SELECT menu_item.*, chef_profile.id as chef_profile_id, 
      chef_profile.first_name, chef_profile.last_name
      FROM menu_item
      JOIN chef_profile ON chef_profile.chef_id = menu_item.chef_id
      WHERE chef_profile.id=$1;
    `;
    pool.query(queryText, [chefInfo])
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT chef info query', err);
        res.sendStatus(500);
      });
  });

// Return Chef menu information from Server
router.get('/:id', (req, res) => {
  const chefId = req.params.id;
  console.log('GET chef menu from id', chefId);
  const queryText = `SELECT menu_item.*, chef_profile.id FROM menu_item
    JOIN chef_profile ON chef_profile.chef_id = menu_item.chef_id
    WHERE chef_profile.id=${chefId};`;
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT chef menu query', err);
      res.sendStatus(500);
    });
});

module.exports = router;