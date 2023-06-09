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
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}