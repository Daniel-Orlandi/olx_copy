const connection = require("../databases/connection");

class AdPhotoModel {
  async getAdPhoto(page, limit) {
    return connection("ad_photos")
      .limit(limit)
      .offset((page - 1) * limit)
      .select("*");
  }

  async count() {
    return connection("ad_photos").count();
  }

  async getAdPhotoById(id) {
    return connection("ad_photos").where("id", id).select("*");
  }

  async create(ad_id, file_id) {
    return connection("ad_photos").returning("*").insert({
      ad_id,
      file_id
    });
  }

  async update(id, ad_id, file_id) {
    return connection("ad_photos")
    .returning("*")
    .update({ ad_id, file_id })
    .where("id", id);
  }

  async delete(id) {
    return connection("ad_photos").where("id", id).delete();
  }
}

module.exports = new AdPhotoModel();
