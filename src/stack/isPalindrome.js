/**
 * A palindrome is a word, phrase, or number that is spelled the same forward and backward.
 * For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation;
 * and 1,001 is a numeric palindrome.
 *
 * Use a stack to determine whether or not a given string is a palindrome.
 *
 * The implementation should have O(n) performance.
 *
 * @param text
 *  a possibly empty string that may be a palindrome.
 */

const Stack = require("../stack/stack");
// TODO: Write an O(n) algorithm that uses a stack to determine whether the given input text is palindrome or not.

function isPalindrome(text) {
  const cleanText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  if (cleanText.length === 0) {
    return false;
  }
  if (cleanText.length === 1) {
    return true;
  }
  let stack = new Stack();
  let middle = Math.floor(cleanText.length / 2);
  let index = cleanText.length % 2 === 0 ? middle : middle + 1;
  for (let i = 0; i < middle; i++) {
    stack.push(cleanText[i]);
  }
  for (let i = index; i < cleanText.length; i++) {
    let char = cleanText[i];
    let popped = stack.pop();
    if (char !== popped) {
      return false;
    }
  }
  let res = stack.isEmpty();

  return res;
}

module.exports = isPalindrome;
