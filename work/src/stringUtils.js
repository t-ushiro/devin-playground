/**
 * String utility functions
 */

/**
 * Capitalizes the first letter of a string
 * @param {string} str - Input string
 * @returns {string} String with first letter capitalized
 */
function capitalize(str) {
  if (!str || typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Reverses a string
 * @param {string} str - Input string
 * @returns {string} Reversed string
 */
function reverse(str) {
  if (!str || typeof str !== 'string') return '';
  return str.split('').reverse().join('');
}

/**
 * Counts occurrences of a substring in a string
 * @param {string} str - Input string
 * @param {string} substr - Substring to count
 * @returns {number} Number of occurrences
 */
function countOccurrences(str, substr) {
  if (!str || !substr || typeof str !== 'string' || typeof substr !== 'string') return 0;
  
  // Handle overlapping occurrences
  let count = 0;
  let position = 0;
  
  while ((position = str.indexOf(substr, position)) !== -1) {
    count++;
    position += 1; // Move just one character forward to catch overlapping matches
  }
  
  return count;
}

module.exports = {
  capitalize,
  reverse,
  countOccurrences
};
