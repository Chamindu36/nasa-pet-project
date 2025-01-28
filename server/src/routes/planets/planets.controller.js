const { getAllPlanets, planets } = require("../../models/planets.model");

async function httpGetAllPlanets(req, res) {
  try {
    const planets = await getAllPlanets();
    return res.status(200).json(planets);
  } catch (error) {
    console.error('Error fetching planets:', error);
    return res.status(500).json({
      error: 'Internal server error while fetching planets'
    });
  }
}

module.exports = {
  httpGetAllPlanets,
};
