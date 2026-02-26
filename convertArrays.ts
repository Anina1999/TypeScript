function convertArrays(arg: string[]): [string, number] {
    const concatenatedArr: string = arg.join('');

    return [
        concatenatedArr,
        concatenatedArr.length
    ];
}

console.log(convertArrays(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));