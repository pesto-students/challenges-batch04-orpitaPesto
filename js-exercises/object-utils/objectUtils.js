// your implementation

// const map = (obejt, )

const map = (obj, callback) => Object.fromEntries(Object.entries(obj).map(callback));

const filter = (obj, callback) => Object.fromEntries(Object.entries(obj).filter(callback));

const invert = (obj) => map(obj, ([key, value]) => [value, key]);

const merge = (...args) => Object.assign(...args);

const all = (obj, callback) => Object.entries(obj).every(callback);

const some = (obj, callback) => Object.entries(obj).some(callback);

export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};
