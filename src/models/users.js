const connection = require("../databases/connection");

class UserModel {
  async getUsers(page, limit) {
    return connection("users")
      .limit(limit)
      .offset((page - 1) * limit)
      .select("*");
  }

  async count() {
    return connection("users").count();
  }

  async getUsersById(id) {
    return connection("users").where("id", id).select("*");
  }

  async create(name,email, password, phone) {
    return connection("users").returning("*").insert({
      name,
      email,
      password,
      phone
    });
  }

  async update(id, name,email, password, phone) {
    return connection("users")
      .returning("*")
      .update({ name, email, password, phone })
      .where("id", id);
  }

  async delete(id) {
    return connection("users").where("id", id).delete();
  }
}

module.exports = new UserModel();
