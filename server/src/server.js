// Importing required modules
const http = require("http");
const dotenv = require("dotenv");
const app = require("./app");
const { mongoConnect } = require('./services/mongo');
const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.model');

// Loading environment variables
dotenv.config();

// Defining the port to listen on
const PORT = process.env.PORT || 8000;

// Creating a server with the app
const server = http.createServer(app);

/**
 * Function to start the server
 */
async function startServer() {
  try {
    // Connect to MongoDB
    await mongoConnect();

    // Load planets data
    await loadPlanetsData();

    // Load launch data
    await loadLaunchData();

    // Start the server
    server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
}

// Call the startServer function
startServer();
