module.exports = (user) => {
  return {
    id: Number(user.id || -1),
    name: String(user.name || ''),
    subscription: Number(user.subscription || 0),
  };
};
