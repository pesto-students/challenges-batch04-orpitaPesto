const allSettled = (promises) => new Promise((resolve) => {
  let indexOfPromise = promises.length - 1;
  const results = [];
  const resolver = (result, index) => {
    indexOfPromise -= 1;
    results[index] = { status: "fulfilled", value: result };
    if (indexOfPromise === 0) {
      resolve(results);
    }
  };
  promises.forEach((promise, index) => {
    Promise.resolve(promise)
      .then((result) => resolver(result, index))
      .catch((error) => results.push({status: "rejected", reason: error}));
  });
});
export { allSettled };
