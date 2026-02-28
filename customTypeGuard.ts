function customTypeGuard (arg: unknown): arg is string[] {
    let validArg = Array.isArray(arg) &&
        arg.length > 0 && 
        arg.every(el => typeof el === 'string');

    return validArg;
}

let arr: unknown = ['a', 'b', 'c'];

if(customTypeGuard(arr)) {
console.log(arr.length);
}