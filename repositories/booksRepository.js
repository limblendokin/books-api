class BooksRepository {
  constructor(dao) {
    this.dao = dao;
  }
  createTable() {
    const sql = `
CREATE TABLE IF NOT EXISTS books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  FOREIGN KEY(userId) REFERENCES Users(id),
  name TEXT)`;
    return this.dao.each(sql);
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
  getAll(filter) {
    const { userId } = filter;
    return this.dao.each(`SELECT * FROM books WHERE userId = ?`, [userId]);
  }
}
module.exports = BooksRepository;
