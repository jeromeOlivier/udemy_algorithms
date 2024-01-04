function naiveStringSearch(longString, shortString) {
    const obj = {};
    for (let i = 0; i < (longString.length) - (shortString.length - 1); i++) {
        const substring = longString.slice(i, i + shortString.length);
        obj[substring] = (obj[substring] || 0) + 1;
    }
    return obj[shortString];
}

const long = "wowomgzomg";
const short = 'omg';

console.log(naiveStringSearch(long, short));
