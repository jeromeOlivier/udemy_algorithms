function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(3));

/*
first: build the call stack
return 3 + sumRange(3 - 1)
      return 2 + sumRange(2 - 1)
            return 1
second: pop off each layer

return 3 + sumRange(3 - 1)
      return 2 + 1

return 3 + 3

return 6
 */