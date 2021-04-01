class UsersRepository {
  constructor(dao) {
    this.dao = dao;
  }
  createTable() {
    const sql = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  subscription BOOLEAN,
  name TEXT)`;
    return this.dao.run(sql);
  }
  create(name) {
    return this.dao.run('INSERT INTO users (name) VALUES (?)', [name]);
  }
  update(user) {
    const { id, name, subscription } = user;
    return this.dao.run(
      `UPDATE users SET name = ?, subscription = ? WHERE id = ?`,
      [name, id, subscription]
    );
  }
  delete(id) {
    return this.dao.run(`DELETE FROM users WHERE id = ?`, [id]);
  }
  getById(id) {
    return this.dao.get(`SELECT * FROM users WHERE id = ?`, [id]);
  }
  getAll() {
    return this.dao.all(`SELECT * FROM users`);
  }
}
module.exports = UsersRepository;
