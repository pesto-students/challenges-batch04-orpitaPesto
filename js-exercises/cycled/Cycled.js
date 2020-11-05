class Cycled {
  constructor(array) {
    this.array = array;
    this.pointer = 0;
  }

  checkNextIndex() {
    if (this.pointer === this.array.length - 1) {
      this.pointer = 0;
    } else {
      this.pointer += 1;
    }
  }

  current() {
    return this.array[this.pointer];
  }

  next() {
    this.checkNextIndex();
    return this.array[this.pointer];
  }

  checkPreviousIndex() {
    if (this.pointer === 0) {
      this.pointer = this.array.length - 1;
    } else {
      this.pointer -= 1;
    }
  }

  previous() {
    this.checkPreviousIndex();
    return this.array[this.pointer];
  }

  calculateIndex(stepIndex) {
    if (stepIndex > 0) {
      for (let i = 0; i < stepIndex; i++) {
        this.checkNextIndex();
      }
    }
    if (stepIndex < 0) {
      for (let i = stepIndex; i < 0; i++) {
        this.checkPreviousIndex();
      }
    }
  }

  step(stepIndex) {
    this.calculateIndex(stepIndex);
    return this.array[this.pointer];
  }

  get index() {
    return this.pointer;
  }

  set index(value) {
    if (value === 0 && this.pointer !== 0) {
      this.pointer = 0;
    } else {
      this.calculateIndex(value);
    }
  }

  reversed() {
    this.array.reverse();
    this.pointer = this.array.length - 1;
    return this.array;
  }
}
export { Cycled };
