class MyHashSet {
  constructor() {
    this.arr = []; // using dynamic arrays
  }

  /**
   * @param {number} key
   * @return {void}
   */
  add(key) {
    // as it is set element should only be added if its not present
    // element in the MyHashSet should be unique.
    if (!this.arr.includes(key)) {
      this.arr.push(key);
    }
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    // key may be or may not be present in the array
    const ind = this.arr.indexOf(key);

    if (ind !== -1) {
      this.arr.splice(ind, 1);
    }
  }

  /**
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    return this.arr.includes(key);
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
