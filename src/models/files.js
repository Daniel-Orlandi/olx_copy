const connection = require("../databases/connection");

class FileModel {
  async getFile(page, limit) {
    return connection("files")
      .limit(limit)
      .offset((page - 1) * limit)
      .select("*");
  }

  async count() {
    return connection("files").count();
  }

  async getFileById(id) {
    return connection("files").where("id", id).select("*");
  }

  async create(path, type) {
    return connection("files").returning("*").insert({
      ad_id,
      file_id
    });
  }

  async update(id, path, type) {
    return connection("files")
    .returning("*")
    .update({ path, type })
    .where("id", id);
  }

  async delete(id) {
    return connection("files").where("id", id).delete();
  }
}

module.exports = new FileModel();
