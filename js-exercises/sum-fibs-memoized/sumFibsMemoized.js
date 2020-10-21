function sumFibs(number) {
  let sum = 0;
  let FibonnacciNumber1 = 0;
  let FibonnacciNumber2 = 1;

  while (FibonnacciNumber2 <= number) {
    if (FibonnacciNumber2 % 2 === 1) {
      sum += FibonnacciNumber2;
    }

    FibonnacciNumber2 = FibonnacciNumber1 + FibonnacciNumber2;
    FibonnacciNumber1 = FibonnacciNumber2 - FibonnacciNumber1;
  }

  return sum;
}

function cacheFunction(functionCache) {
  const cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    }

    const result = functionCache(n);
    cache[n] = result;
    return result;
  };
}

export { sumFibs, cacheFunction };
