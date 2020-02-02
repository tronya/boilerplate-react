const LStorage = {
  getFromStorage: key => JSON.parse(localStorage.getItem(key)),
  updateInStorage: (key, data) => localStorage.setItem(key, JSON.stringify({ ...this.getFromStorage, ...data })),
  saveToStorage: (key, data) => localStorage.setItem(key, JSON.stringify(data)),
};

export default LStorage;
