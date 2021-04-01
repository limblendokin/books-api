class BooksService {
  constructor(booksRepository, usersRepository) {
    this.booksRepo = booksRepository;
    this.usersRepo = usersRepository;
  }
  create(book) {
    const { name } = book;
    return this.booksRepo.create(name);
  }
  async lend(book, user) {
    const userInfo = await this.usersRepo.getById(user.id);
    if (!userinfo) {
      return Promise.reject('User with specified id not found');
    }
    if (!userInfo.subscription) {
      return Promise.reject('No subscription');
    }
    const userLentBooks = await this.booksRepo.getLentBooks(user.id);
    if (userLentBooks.length >= 5) {
      return Promise.reject('Lend limit exceeded');
    }
    const bookInfo = await this.booksRepo.getById(book.id);
    console.log(bookInfo);
    if (bookInfo.userId) {
      return Promise.reject('Book already lent to someone');
    }
    return this.booksRepo.update({ ...bookInfo, userId: user.id });
  }
  async return(book, user) {
    const userInfo = await this.usersRepo.getById(user.id);
    if (!userInfo) {
      return Promise.reject('User with specified id not found');
    }
    const bookInfo = await this.booksRepo.getById(book.id);
    if (bookInfo.userId !== user.id) {
      return Promise.reject('Book lent by another user');
    }
    return this.booksRepo.update({ ...bookInfo, userId: null });
  }
}
module.exports = BooksService;
