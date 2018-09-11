class Sorter {
  
  constructor() {
    this.arr = [];
    this.compFunc = function(a, b) {
      return a - b;
    }
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    let sorted = [];
    indices = indices.sort(function (a, b) {
      return a - b;
    });

    for (let i = 0; i < indices.length; i++) {
      sorted.push(this.arr[indices[i]]);
    }

    sorted.sort(this.compFunc);

    for (let i = 0; i < sorted.length; i++) {
      this.arr[indices[i]] = sorted[i];
    }

    console.log(this.arr);
  }

  setComparator(compareFunction) {
    this.compFunc = compareFunction;
  }
}

module.exports = Sorter;