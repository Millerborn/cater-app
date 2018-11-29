const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.post('/', (req, res) => {
  console.log(`in hire_chef.router.js POST for`, req.body);
  const newOrder = req.body;
  const queryText = `INSERT INTO orders ("order_date", "address_id", "menu_item_id", "chef_id", "price", "quantity")
  VALUES ($1, $2, $3, $4, $5, $6);`;

  const queryValues = [
    newOrder.order_date,
    newOrder.address_id,
    newOrder.menu_item_id,
    newOrder.chef_id,
    newOrder.price,
    newOrder.quantity,
  ];
  pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(201); })
    .catch((error) => {
      console.log('error adding order', error);
      res.sendStatus(500)
    })
});

// router.post('/', async (req, res) => {
//     console.log(`in order.router.js POST for`, req.body);
//     const client = await pool.connect();
//     try {
//       const {
//           order_date,
//           address_id,
//           menu_item_id,
//           chef_id,
//           menu
//       } = req.body;
//       await client.query('BEGIN')
//       const orderInsertResults = await client.query(`INSERT INTO orders 
//       ("order_date", "address_id", "menu_item_id", "chef_id")
//       VALUES ($1, $2, $3, $4)
//       RETURNING id;`, [orders.id, order_date, address_id, menu_item_id, chef_id]);
//       const orderId = orderInsertResults.rows[0].id
//       await Promise.all(menu.map(menu => {
//         const insertMenuItemText = `INSERT INTO menu_item_orders 
//         ("order_id", "menu_item_id") VALUES ($1, $2)`;
//         const insertMenuItemValues = [orderId, menu.id, menu.menu_item_id];
//         return client.query(insertMenuItemText, insertMenuItemValues);
//       }));
//       await client.query('COMMIT')
//       res.sendStatus(201);
//     } catch (error) {
//       await client.query('ROLLBACK')
//       console.log('Error POST /add-order', error);
//       res.sendStatus(500)
//     } finally {
//       client.release();
//     }
//   })

router.delete('/:id', (req, res) => {
  let reqId = req.params.id;
  console.log('Delete request for id', reqId);
  let sqlText = `DELETE FROM orders WHERE orders.id=$1;`;
  console.log(sqlText);
  pool.query(sqlText, [reqId])
      .then((result) => {
          console.log('item deleted');
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error in deleting ${sqlText}`, error);
          res.sendStatus(500);
      })
})

  module.exports = router;