const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// Return specific Chef information from Server
router.get('/:id', (req, res) => {
    const chefInfo = req.params.id
    console.log('GET chef info from id', chefInfo);
    const queryText = `SELECT menu_item.*, chef_profile.id as 
      chef_profile_id, 
      chef_profile.first_name, chef_profile.last_name, chef_profile.hourly_rate
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

// Return Chef info and chef menu from Server
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

// router.post('/', (req, res) => {
//   const queryText1 = `INSERT INTO "orders"
//                         ("order_date", "address_id", "menu_item_id", "chef_id")
//                      VALUES ($1, $2, $3, $4) RETURNING id;`;  
//   const queryText2 = `INSERT INTO "menu_item_orders"
//                      ("order_id", "menu_item_id")
//                      VALUES ($1, $2);`;
//   pool.query(queryText1, [req.body.order_date, req.body.address_id, req.body.menu_item_id, req.body.chef_id])
//       .then((results) => {
//           console.log('pool results', results.rows);

//           pool.query(queryText2, [req.body.order_id, results.rows[0].id])
//           .then((results) => {
//               res.sendStatus(201);
//           })
//           .catch((error) => {
//               console.log(error);
//               res.sendStatus(500);
//           })
//       }).catch((error) => {
//           console.log(error);
//           res.sendStatus(500);
//       });

// });

router.post('/', (req, res) => {
  console.log(`in hire_chef.router.js POST for`, req.body);
  const newOrder = req.body;
  const queryText = `INSERT INTO orders ("order_date", "address_id", "menu_item_id", "chef_id")
  VALUES ($1, $2, $3, $4);`;

  const queryValues = [
    newOrder.order_date,
    newOrder.address_id,
    newOrder.menu_item_id,
    newOrder.chef_id,
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((error) => {
      console.log('error adding order', error);
      res.sendStatus(500)
    })
});

// router.post('/', async (req, res) => {
//   console.log(`in hire_chef.router.js POST for`, req.body);
//   const client = await pool.connect();
//   try {
//     const {
//         order_date,
//         address_id,
//         menu_item_id,
//         chef_id,
//     } = req.body;
//     await client.query('BEGIN')
//     const orderInsertResults = await client.query(`INSERT INTO orders 
//     ("order_date", "address_id", "menu_item_id", "chef_id")
//     VALUES ($1, $2, $3, $4)
//     RETURNING id;`, [orders.id, order_date, address_id, menu_item_id, chef_id]);
//     const orderId = orderInsertResults.rows[0].id
//     await Promise.all(orders.map(menu => {
//       const insertMenuItemText = `INSERT INTO menu_item_orders 
//       ("order_id", "menu_item_id") VALUES ($1, $2)`;
//       const insertMenuItemValues = [orderId, menu.id, menu.menu_item_id];
//       return client.query(insertMenuItemText, insertMenuItemValues);
//     }));
//     await client.query('COMMIT')
//     res.sendStatus(201);
//   } catch (error) {
//     await client.query('ROLLBACK')
//     console.log('Error POST /hire-chef', error);
//     res.sendStatus(500)
//   } finally {
//     client.release();
//   }
// })

module.exports = router;