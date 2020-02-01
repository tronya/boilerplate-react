global.matchMedia =
  global.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {},
    };
  };

class LocalStorageMock {
  store = {};
  setItem = (key, val) => (this.store[key] = val);
  getItem = key => this.store[key];
  removeItem = key => delete this.store[key];
  clear = () => (this.store = {});
}

global.localStorage = new LocalStorageMock();
