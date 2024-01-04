/*
 Write a recursive function called reverse which accepts a string and returns a
 new string in reverse.
 */

function reverse(string) {
  if (string === "") {
    return "";
  } else {
    return reverse(string.slice(1)) + string.charAt(0);
  }
}

console.log(reverse("abide"));
