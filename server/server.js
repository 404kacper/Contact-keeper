const express = require('express');
const connectDB = require('../config/db');
const config = require('../config/node_modules/config');
const cors = require('cors');

const app = express();

// Connect Database
connectDB();

// Init Middleware
const corsOptions = {
  origin: config.get('frontendURL'),
};
app.use(express.json({ extended: false }));
app.use(cors(corsOptions));

// enable pre-flight request for all routes
app.options('*', cors(corsOptions)); 

// Define Routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  console.log(`Frontend URL for cors is: ${config.get('frontendURL')}`);
  if (process.env.NODE_ENV == 'production') {
    console.log(
      `NODE_ENV is set to: ${process.env.NODE_ENV} using production package.`
    );
  } else {
    console.log(
      `NODE_ENV wasn't set defaulting to default.json package an dev environment.`
    );
  }
});
