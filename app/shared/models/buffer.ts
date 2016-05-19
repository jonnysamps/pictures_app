export class Buffer<T> extends Array {
  constructor(private size: number) {
    super();
  }

  append(item: T) {
    this.push(item);
    // if (this.length > this.size)
    //   this.shift();
  }

  prepend(item: T) {
    this.unshift(item);
    // if (this.length > this.size)
    //   this.pop();
  }

  center(index: number) {
    let min = this.centerMin(index);
    let max = this.centerMax(min);
    this.splice(0, min); // Chop the front off
    this.splice(max + 1);// Chop the end off
  }

  centerMin(index: number) {
    let result = Math.ceil(index - (this.size / 2.0));
    return result < 0 ? 0 : result;
  }

  centerMax(min: number) {
    let result = min + this.size - 1;
    return result > this.length - 1 ? this.length : result;
  }
}