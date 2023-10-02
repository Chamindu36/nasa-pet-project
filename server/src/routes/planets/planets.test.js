const request = require('supertest');
const app = require('../../app');
const {
    mongoConnect,
    mongoDisconnect,
} = require('../../services/mongo');
const {
    loadPlanetsData,
} = require('../../models/planets.model');

// Import the Planet model
const Planet = require('./models/planet.model');

describe('GET /planets', () => {
    beforeAll(async () => {
        await mongoConnect();
        await loadPlanetsData();
    }, 30000);

    afterAll(async () => {
        await mongoDisconnect();
    });

  it('should return a list of planets', async () => {
    // Insert some dummy data for testing
    await Planet.create({ keplerName: 'Kepler-22b' });
    await Planet.create({ keplerName: 'Kepler-442b' });

    // Send a GET request to the endpoint
    const response = await request(app).get('/planets');

    // Check if the response is successful
    expect(response.status).toBe(200);

    // Check if the response body is an array
    expect(Array.isArray(response.body)).toBe(true);

    // Check if the response contains the inserted planets
    expect(response.body.length).toBe(2);
    expect(response.body[0].keplerName).toBe('Kepler-22b');
    expect(response.body[1].keplerName).toBe('Kepler-442b');
  });

  it('should handle errors', async () => {
    // Force an error by not connecting to the database
    jest.spyOn(mongoose, 'connect').mockImplementation(() => {
      throw new Error('Failed to connect');
    });

    // Send a GET request to the endpoint
    const response = await request(app).get('/planets');

    // Check if the response is an error
    expect(response.status).toBe(500);
    expect(response.body.error).toBe('Internal Server Error');
  });
});
