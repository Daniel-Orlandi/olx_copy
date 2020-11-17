const FileModel = require("../models/ad_photos");

//Framework Adonis
class FileController {
  async index(req, res) {
    
    const { page = 1, limit = 20 } = req.query;

    const [count] = await FileModel.count();

    const files = await FileModel.getFile(page, limit);

    res.header("X-Total-Count", count["count(*)"]);

    return res.status(201).json(files);
  }

  async show(req, res) {
    const { id } = req.params;

    const file = await FileModel.getFileById(id);

    return res.status(201).json(file);
  }

  async store(req, res) {
    const { path, type } = req.body;

    const file = await FileModel.create(path, type);

    return res.status(201).json(file);
  }

  async update(req, res) {
    const { path, type } = req.body;

    const { id } = req.params;

    const file = await FileModel.update(id, path, type);

    return res.status(201).json(file);
  }

  async delete(req, res) {
    const { id } = req.params;

    await FileModel.delete(id);
    return res.status(204).send();
  }
}
