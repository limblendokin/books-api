class BooksService {
  constructor(booksRepository, subscriptionsRepo) {
    this.booksRepo = booksRepository;
    this.subscriptionsRepo = subscriptionsRepo;
  }
  create(book) {
    const { name } = book;
    return this.booksRepo.create(name);
  }
  async borrow(bookId, userId) {
    return new Promise((resolve, reject) => {
      const userSubscription = this.subscriptionsRepo
        .getAll(userId)
        .then((userSubscription) => {
          if (userSubscription.length > 0) {
            this.booksRepo.getAll(userId).then((userBorrowedBooks) => {
              if (userBorrowedBooks.length < 5) {
                this.booksRepo.getById(bookId).then((book) => {
                  if (!book.userId) {
                    this.booksRepo
                      .update({ ...book, userId: userId })
                      .then((book) => {
                        resolve(book);
                      });
                  } else {
                    reject();
                  }
                });
              } else {
                reject();
              }
            });
          }
        });
    });
  }
  return() {}
}
