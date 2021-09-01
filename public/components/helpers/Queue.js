export class Queue {
  constructor() {
    this.dataStore = [];
  }
  enqueue(element) {
    this.dataStore.push(element)
    console.log(this.dataStore)
  }
  dequeue(element) {
    this.dataStore.shift(element)
  }
  front() {
    return this.dataStore[0]
  }
  back() {
    return this.dataStore[this.dataStore.length - 1]
  }
  putOut() {
    console.log('this is put out')
  }
  empty() {
    this.dataStore.length ? false : true
  }
};
