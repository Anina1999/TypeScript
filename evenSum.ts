function isEvenOrOdd (a: number, b: number, c: number): boolean {
    return (a + b + c) % 2 === 0;
}

console.log(isEvenOrOdd(1, 2, 3));
console.log(isEvenOrOdd(2, 2, 3));