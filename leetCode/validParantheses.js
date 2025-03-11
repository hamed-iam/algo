/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const matchingBracket = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of s) {
    if (matchingBracket[char]) {
      if (
        stack.length > 0 &&
        stack[stack.length - 1] === matchingBracket[char]
      ) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};
