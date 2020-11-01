function curry(fn) {
  if (typeof fn !== 'function') {
    throw new Error(' Function expected.');
  } else {
    const curriedFunction = (...args) => {
      if (args.length === fn.length) {
        return fn(...args);
      }
      return (...args2) => curriedFunction(...args.concat(args2));
    };
    return curriedFunction;
  }
}

export {
  curry,
};
