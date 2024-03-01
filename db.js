const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const MONGODB_URI = process.env.MONGODB_URI;

        mongoose.connect(MONGODB_URI);

        console.log('Connect to mongodb');

    } catch (error) {
        console.log('mongodb connection error', error);
    }
};

module.exports = connectDB;