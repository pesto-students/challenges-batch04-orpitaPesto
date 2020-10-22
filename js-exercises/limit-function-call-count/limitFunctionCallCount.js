const limitFunctionCallCount = (callFunction, numberOfCalls) => {
  let countForCalls = 0;
  return (...input) => {
    countForCalls += 1;
    return (countForCalls <= numberOfCalls) ? callFunction(...input) : null;
  };
};

export {
  limitFunctionCallCount,
};
