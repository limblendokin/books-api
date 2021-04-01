class BooksRepository {
  constructor(dao) {
    this.dao = dao;
  }
  createTable() {
    const sql = `
CREATE TABLE IF NOT EXISTS books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId INTEGER,
  name TEXT,
  FOREIGN KEY(userId) REFERENCES Users(id))`;
    return this.dao.run(sql);
  }
  create(name) {
    return this.dao.run('INSERT INTO books (name) VALUES (?)', [name]);
  }
  update(book) {
    const { id, name, userId } = book;
    return this.dao.run(`UPDATE books SET name = ?, userId = ? WHERE id = ?`, [
      name,
      userId,
      id,
    ]);
  }
  delete(id) {
    return this.dao.run(`DELETE FROM books WHERE id = ?`, [id]);
  }
  getById(id) {
    return this.dao.get(`SELECT * FROM books WHERE id = ?`, [id]);
  }
  getAll() {
    return this.dao.all(`SELECT * FROM books`);
  }
  getLentBooks(userId) {
    return this.dao.all(`SELECT * FROM books WHERE userId = ?`, [userId]);
  }
}
module.exports = BooksRepository;
