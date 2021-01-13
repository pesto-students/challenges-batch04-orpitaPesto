function rangeIter(lb, ub) {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(lb) || isNaN(ub)) {
    throw new TypeError('undefined is not a number');
  } else {
    const range = {
      from: lb,
      to: ub,
      * [Symbol.iterator]() {
        let current = lb;
        if (lb <= ub) {
          yield current;
          while (current < ub) {
            yield (current += 1);
          }
        }
      },
    };
    return range;
  }
}

export { rangeIter };
