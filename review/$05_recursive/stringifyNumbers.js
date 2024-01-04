/*
 Write a function called stringifyNumbers which takes in an object and finds all
 the values which are numbers and converts them to strings. Recursion would
 be a great way to solve this!
 */

/*
 from this:

 let obj = {
 num: 1,
 test: [],
 data: {
 value: 4,
 info: {
 isRight: true,
 random: 66
 }
 }
 }

 to this:

 {
 num: "1",
 test: [],
 data: {
 value: "4",
 info: {
 isRight: true,
 random: "66"
 }
 }
 }
 */

function stringifyNumbers(obj) {
  let newObj = {};
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = JSON.stringify(obj[key]);
    } else if (typeof obj[key] === "boolean") {
      newObj[key] = obj[key];
    } else if (typeof obj[key] === "object") {
      if (Array.isArray(obj[key])) {
        newObj[key] = obj[key];
        if (obj[key].length > 0) {
          for (const key of obj) {
            newObj[key].push(stringifyNumbers(key));
          }
        }
      } else {
        newObj[key] = stringifyNumbers(obj[key]);
      }
    }
  }
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));