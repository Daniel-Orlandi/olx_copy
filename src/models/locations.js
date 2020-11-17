const connection = require("../databases/connection");

class LocationsModel {
  async getLocation(page, limit) {
    return connection("locations")
      .limit(limit)
      .offset((page - 1) * limit)
      .select("*");
  }

  async count() {
    return connection("locations").count();
  }

  async getLocationById(id) {
    return connection("locations").where("id", id).select("*");
  }

  async create(user_id, cep, city, neighborhood) {
    return connection("locations").returning("*").insert({
      user_id,
      cep,
      city,
      neighborhood
    });
  }

  async update(id, user_id, cep, city, neighborhood) {
    return connection("locations")
    .returning("*")
    .update({ 
      user_id,
      cep,
      city,
      neighborhood
     })
    .where("id", id);
  }

  async delete(id) {
    return connection("locations").where("id", id).delete();
  }
}

module.exports = new LocationsModel();
