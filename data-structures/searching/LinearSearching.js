class LinearSearch {
    /**
     * Performs a linear search on an array.
     * @param {Array} array - The array to search through.
     * @param {*} target - The value to search for.
     * @returns {number} The index of the target value if found, otherwise -1.
     */
    static search(array, target) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
          return i; // Return the index if the target is found
        }
      }
      return -1; // Return -1 if the target is not found
    }
  }
  
  module.exports = LinearSearch;
  