const UserModel = require("../models/users");
//Framework Adonis
class UsersController {
  async index(req, res) {
    
    const { page = 1, limit = 20 } = req.query;

    const [count] = await UserModel.count();

    const users = await UserModel.getUsers(page, limit);

    res.header("X-Total-Count", count["count(*)"]);

    return res.status(201).json(users);
  }

  async show(req, res) {
    const { id } = req.params;

    const user = await UserModel.getUsersById(id);

    return res.status(201).json(user);
  }

  async store(req, res) {
    const { name, email, password, phone } = req.body;

    const user = await UserModel.create(name, email, password, phone);

    return res.status(201).json(user);
  }

  async update(req, res) {
    const { name, email, password, phone } = req.body;

    const { id } = req.params;

    const user = await UserModel.update(id, name, email, password, phone);

    return res.status(201).json(user);
  }

  async delete(req, res) {
    const { id } = req.params;

    await UserModel.delete(id);
    return res.status(204).send();
  }
}

module.exports = new UsersController();
