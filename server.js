const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();
const connectDB = require('./db');

const app = express();

// PORT
const port = process.env.PORT || 5000;

// Home
app.get('/', (request, response) => {
    response.json(`This is HOME page`);
});

// connect DB
connectDB();

// middleware
app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use(errorHandler);

// Listening Server
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});