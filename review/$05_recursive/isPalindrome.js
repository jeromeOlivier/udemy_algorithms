/*
 Write a recursive function called isPalindrome which returns true if the string
 passed to it is a palindrome (reads the same forward and backward). Otherwise,
 it returns false.
 */

function isPalindrome(string, bool = true) {
  if (string.length <= 1) return bool;
  if (string[0] !== string[string.length - 1]) {
    bool = false;
    return bool;
  }
  const newString = string.slice(1, string.length - 1)
  return isPalindrome(newString);
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

console.log(isPalindrome('awesome'))
console.log(isPalindrome('foobar'))
console.log(isPalindrome('tacocat'))
console.log(isPalindrome('amanaplanacanalpanama'))
console.log(isPalindrome('amanaplanacanalpandemonium'))
