export const User = {
  createUser: (userId, userName) => {
    return { userId, userName, status: 'active' };
  },
  updateUser: (userId, user) => {
    return { ...user, userId };
  },
};
