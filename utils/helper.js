export const sum = (a, b) => {
  return a + b;
};

export const deleteUserById = (users = [], userId = "") => {
  return users.filter((user) => user.id !== userId);
};

export const findUserById = (users = [], userId = "") => {
  return users.find((user) => user.id === userId);
};
