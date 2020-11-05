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
    if (value >= 0 && value <= this.array.length - 1) {
      this.pointer = value;
    } else {
      this.pointer = this.array.length - 1;
    }
  }

  reversed() {
    // this.array.reverse();
    const reversedArray = [];
    this.array.forEach(element => {
      reversedArray.push(element);
    });
    reversedArray.reverse();
    // () => ({ value: this.array[0] });
    // return this.next;
    return {
      next: () => ({ value: reversedArray[0] }),
    };
  }

  indexOf(value) {
    // let computedIndex = 0;
    // this.array.forEach((element, ind) => {
    //   if (this.array[element] === value) {
    //     computedIndex = ind;
    //   }
    // });
    // return computedIndex;
    return this.array.indexOf(value);
  }

  [Symbol.iterator]() {
    return {
      next: () => ({ value: this.array[0], done: true }),
    };
  }
}
export { Cycled };
