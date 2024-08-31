// Import the Stack class
const Stack = require('./data-structures/stack/stack.js');
const Queue = require('./data-structures/queue/Queue.js');
const LinearSearch = require('./data-structures/searching/LinearSearching.js')

function isWds(string) {
    return string === "WDS"
  }
  
  module.exports = {isWds,
    LinearSearch,
    Stack,
    Queue
  };