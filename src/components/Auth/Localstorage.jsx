// localStorageUtils.js

export const saveUserData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getUserData = (key) => {
  const userData = localStorage.getItem(key);
  return userData ? JSON.parse(userData) : null;
};

export const clearUserData = (key) => {
  localStorage.removeItem(key);
};
