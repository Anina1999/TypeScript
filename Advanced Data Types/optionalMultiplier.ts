function multiplyNums(
    val1?: number | string,
    val2?: number | string,
    val3?: number | string
) {
    let realValues = [val1, val2, val3]
        .filter(val => val !== undefined)
        .map(Number);
    
        if (realValues.length === 0) {
            return 1;
        }
    
        return realValues.reduce((acc, val) => acc * val);
}

console.log(multiplyNums('3', 5, '10'));
