function sumArray(array) {
    if (!Array.isArray(array) || array.length <= 2) {
        return 0;
    }
    const sorted = array.slice().sort((a, b) => a - b);
    let result = 0;
    for (let i = 1; i < sorted.length - 1; i++) {
        result += sorted[i];
    }
    return result;
}

console.log(sumArray([6, 2, 1, 8, 10]));