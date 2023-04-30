"use strict";
function getSplitedHalf(data) {
    const l = data.length / 2;
    return data.splice(0, l);
}
const split = getSplitedHalf;
const split2 = getSplitedHalf;
const logLine = {
    timeStamp: new Date(),
    data: {
        a: 2
    }
};
const logLine2 = {
    timeStamp: new Date(),
    data: {
        a: 2
    }
};
