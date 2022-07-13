export default class {
    constructor(value, index, completed = false) {
      this.value = value;
      this.index = index;
      this.completed = completed;
      this.element = this.#createElement();
    }
}