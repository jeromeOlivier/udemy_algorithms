const isPalindrome = (word) => {
    const length = word.length % 2 === 0 ? word.length / 2 : (word.length - 1) / 2;
    const ending = word.length - 1;
    for (let i = 0; i <= length; i++) {
        if (word[i] !== word[ending - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("abbba"));
