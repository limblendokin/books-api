class UsersService {
  constructor(booksRepository, usersRepository) {
    this.booksRepo = booksRepository;
    this.usersRepo = usersRepository;
  }
  create(user) {
    const { name } = user;
    return this.usersRepo.create(name);
  }
  update(user) {
    return this.usersRepo.update(user);
  }
  delete(user) {
    return this.usersRepo.delete(user.id);
  }
  getById(user) {
    return this.usersRepo.getById(user.id);
  }
  getAll() {
    return this.usersRepo.getAll();
  }
  async setSubscription(user) {
    const userInfo = await this.usersRepo.getById(user.id);
    return this.usersRepo.update({ ...userInfo, subscription: 1 });
  }
}
module.exports = UsersService;
