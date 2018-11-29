
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const customerRouter = require('./routes/customer.router');
const hireChefRouter = require('./routes/hire_chef.router');
const checkoutRouter = require('./routes/checkout_page.router');
const orderRouter = require('./routes/order.router');
const customerInformationRouter = require('./routes/customer_information.router');
const editAddressRouter = require('./routes/edit_address.router');
const editCustomerRouter = require('./routes/edit_customer.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/display-chef', customerRouter);
app.use('/hire-chef', hireChefRouter);
app.use('/checkout', checkoutRouter);
app.use('/add-order', orderRouter)
app.use('/customer-information', customerInformationRouter);
app.use('/edit-address', editAddressRouter);
app.use('/edit-customer', editCustomerRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
