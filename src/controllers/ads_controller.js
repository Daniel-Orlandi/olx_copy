const AdsModel = require("../models/ads");

//Framework Adonis
class AdsController {
  async index(req, res) {
    
    const { page = 1, limit = 20 } = req.query;

    const [count] = await AdsModel.count();

    const ads = await AdsModel.getAds(page, limit);

    res.header("X-Total-Count", count["count(*)"]);

    return res.status(201).json(ads);
  }

  async show(req, res) {
    const { id } = req.params;

    const ad = await AdsModel.getAdsById(id);

    return res.status(201).json(ad);
  }

  async store(req, res) {
    const { name, description, value, publishing_date, user_id, status, condition } = req.body;

    const ad = await AdsModel.create(name, description, value, publishing_date, user_id, status, condition);

    return res.status(201).json(ad);
  }

  async update(req, res) {
    const { name, description, value, publishing_date, user_id, status, condition } = req.body;

    const { id } = req.params;

    const ad = await AdsModel.update(id, name, description, value, publishing_date, user_id, status, condition);

    return res.status(201).json(ad);
  }

  async delete(req, res) {
    const { id } = req.params;

    await AdsModel.delete(id);
    return res.status(204).send();
  }
}

module.exports = new AdsController();
