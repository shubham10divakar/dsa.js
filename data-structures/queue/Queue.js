class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the end of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the element from the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift(); // Removes the first element from the array
    }
  
    // Peek at the front element without removing it
    front() {
      if (this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the queue
    size() {
      return this.items.length;
    }
  
    // Print the elements of the queue
    printQueue() {
      return this.items.join(" ");
    }
  
    // Clear the queue
    clear() {
      this.items = [];
    }
  }
  
  module.exports = Queue;
  