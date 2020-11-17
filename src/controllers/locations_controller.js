const LocationModel = require("../models/locations");

//Framework Adonis
class LocationController {
  async index(req, res) {
    
    const { page = 1, limit = 20 } = req.query;

    const [count] = await LocationModel.count();

    const locations = await LocationModel.getLocation(page, limit);

    res.header("X-Total-Count", count["count(*)"]);

    return res.status(201).json(locations);
  }

  async show(req, res) {
    const { id } = req.params;

    const location = await LocationModel.getLocationById(id);

    return res.status(201).json(location);
  }

  async store(req, res) {
    const { user_id, cep, city, neighborhood } = req.body;

    const location = await LocationModel.create(user_id, cep, city, neighborhood);

    return res.status(201).json(location);
  }

  async update(req, res) {
    const { user_id, cep, city, neighborhood } = req.body;

    const { id } = req.params;

    const location = await LocationModel.update(id, user_id, cep, city, neighborhood);

    return res.status(201).json(location);
  }

  async delete(req, res) {
    const { id } = req.params;

    await AdPhotoModel.delete(id);
    return res.status(204).send();
  }
}

module.exports = new LocationController();
