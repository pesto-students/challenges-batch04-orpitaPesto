function dropElements(elements, predicate) {
  if (Array.isArray(elements) && typeof predicate === 'function') {
    return elements.filter(element => predicate(element));
  }
  throw new Error('Provide valid Inputs');
}

export { dropElements };
