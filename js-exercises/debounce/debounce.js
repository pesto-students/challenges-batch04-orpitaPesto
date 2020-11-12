function debounce(fn, timeInMs) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), timeInMs);
  };
}

export { debounce };
