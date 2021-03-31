class SubscriptionsRepository {
  constructor(dao) {
    this.dao = dao;
  }
  createTable() {
    const sql = `
CREATE TABLE IF NOT EXISTS subscriptions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  FOREIGN KEY(userId) REFERENCES Users(id),
  name TEXT)`;
    return this.dao.each(sql);
  }
  create(name) {
    return this.dao.run('INSERT INTO subscriptions (name) VALUES (?)', [name]);
  }
  update(subscription) {
    const { id, name } = subscription;
    return this.dao.run(`UPDATE subscriptions SET name = ? WHERE id = ?`, [
      name,
      id,
    ]);
  }
  delete(id) {
    return this.dao.run(`DELETE FROM subscriptions WHERE id = ?`, [id]);
  }
  getById(id) {
    return this.dao.get(`SELECT * FROM subscriptions WHERE id = ?`, [id]);
  }
  getAll() {
    return this.dao.all(`SELECT * FROM subscriptions`);
  }
}
module.exports = SubscriptionsRepository;
