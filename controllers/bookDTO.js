module.exports = (book) => {
  return {
    id: Number(book.id || -1),
    name: String(book.name || ''),
  };
};
