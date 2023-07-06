"use strict";
function logMiddleware(data) {
    console.log(data);
    return data;
}
const res1 = logMiddleware(10);
function getSplitedHalf(data) {
    const l = data.length / 2;
    return data.splice(0, l);
}
console.log(getSplitedHalf([1, 3, 4, 6]));
