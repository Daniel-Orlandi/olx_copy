const connection = require("../databases/connection");

class AdsModel {
  async getAds(page, limit) {
    return connection("ads")
      .limit(limit)
      .offset((page - 1) * limit)
      .select("*");
  }

  async count() {
    return connection("ads").count();
  }

  async getAdsById(id) {
    return connection("ads").where("id", id).select("*");
  }

  async create(name, description, value, publishing_date, user_id, status, condition) {
    return connection("ads")
    .returning("*")
    .insert({
      description,
      value,
      publishing_date,
      user_id,
      status,
      condition
    });
  }

  async update(id, name, description, value, publishing_date, user_id, status, condition) {
    return connection("ads")
      .returning("*")
      .update({
        name,
        description,
        value,
        publishing_date,
        user_id,
        status,
        condition
      })
      .where("id", id);
  }

  async delete(id) {
    return connection("ads").where("id", id).delete();
  }
}

module.exports = new AdsModel();
