const isAnagram = (first, second) => {
    if (first.length !== second.length) {
        return false;
    }
    const firstObj = {};
    const secondObj = {};

    for (const char of first) {
        firstObj[char] = (firstObj[char] || 0) + 1;
    }
    for (const char of second) {
        secondObj[char] = (secondObj[char] || 0) + 1;
    }
    console.log(firstObj);
    console.log(secondObj);
    for (const [key, value] of Object.entries(firstObj)) {
        if (value !== secondObj[key]) {
            return false;
        }
    }
    return true;
}

console.log(isAnagram('abbc', 'abcc'));