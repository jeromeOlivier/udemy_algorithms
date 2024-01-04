
function repeatTimes(word, times) {
  if (times === 0) return;
  console.log(word);
  repeatTimes(word, times - 1);
}

repeatTimes("hello", 4)
