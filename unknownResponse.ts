function checkResponse (arg: unknown): string {
    let validObj = typeof arg === 'object' &&
        arg !== null &&
        'value' in arg &&
        typeof arg['value'] === 'string'?
        arg.value : 
        '-';

    return validObj;
}

console.log(checkResponse({ code: 201, text: 'Created', value: 'Object Created'}));