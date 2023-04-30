"use strict";
function customToString(data) {
    if (Array.isArray(data)) {
        return data.toString();
    }
    switch (typeof data) {
        case 'string':
            return data;
        case 'number':
        case 'boolean':
        case 'symbol':
        case 'bigint':
        case 'function':
            return data.toString();
        case 'object':
            if (data == null) {
                return 'null';
            }
            return JSON.stringify(data);
        default:
            return undefined;
    }
}
console.log(customToString(null));
console.log(customToString({
    name: 'ivan',
    lastname: 'smirnov'
}));
