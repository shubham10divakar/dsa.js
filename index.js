// Import the Stack class
const Stack = require('./data-structures/stack/stack.js');

const stack = new Stack();
stack.push(10);
stack.push(20);

console.log(stack.printStack()); // Output: 10 20

function isWds(string) {
    return string === "WDS"
  }
  
  module.exports = {isWds,
    Stack
  };