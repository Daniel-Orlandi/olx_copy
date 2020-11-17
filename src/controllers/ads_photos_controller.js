const AddPhotoModel = require("../models/ad_photos");

//Framework Adonis
class AdsPhotosController {
  async index(req, res) {
    
    const { page = 1, limit = 20 } = req.query;

    const [count] = await AdPhotoModel.count();

    const adsPhotos = await AdPhotoModel.getAdPhoto(page, limit);

    res.header("X-Total-Count", count["count(*)"]);

    return res.status(201).json(adsPhotos);
  }

  async show(req, res) {
    const { id } = req.params;

    const adPhoto = await AdPhotoModel.getAdsPhotoById(id);

    return res.status(201).json(adPhoto);
  }

  async store(req, res) {
    const { ad_id, file_id } = req.body;

    const adPhoto = await AdPhotoModel.create(ad_id, file_id);

    return res.status(201).json(adPhoto);
  }

  async update(req, res) {
    const { ad_id, file_id } = req.body;

    const { id } = req.params;

    const adPhoto = await AdPhotoModel.update(id, ad_id, file_id);

    return res.status(201).json(adPhoto);
  }

  async delete(req, res) {
    const { id } = req.params;

    await AdPhotoModel.delete(id);
    return res.status(204).send();
  }
}

module.exports = new AdsPhotosController();
