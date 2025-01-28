const mongoose = require('mongoose');

require('dotenv').config();

// Update below to match your own MongoDB connection string.
// const MONGO_URL = process.env.MONGO_URL;
const MONGO_URL = "mongodb+srv://NASA_API:Chamma36@nasacluster.lopifn9.mongodb.net/nasa?retryWrites=true&w=majority";

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect() {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 10000,
        });
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;
    }
}

async function mongoDisconnect() {
    try {
        await mongoose.disconnect();
    } catch (err) {
        console.error('Error disconnecting from MongoDB:', err);
        throw err;
    }
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}