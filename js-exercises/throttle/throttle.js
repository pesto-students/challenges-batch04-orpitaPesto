// function throttle(fn, timeInMs) {}
function throttle(func, delay) {
  let timeout = null;
  return (...args) => {
    if (!timeout) {
      timeout = setTimeout(() => {
        func.call(this, ...args);
        timeout = null;
      }, delay);
    }
  };
}

export { throttle };
