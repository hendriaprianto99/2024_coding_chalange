const reverseSeq = (n) => {
    result = [];
    for(let i=n; i>0; i--) {
        console.log(i);
        result.push(i);
    }
    return result;
};

console.log(reverseSeq(5));