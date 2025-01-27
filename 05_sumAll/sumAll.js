const sumAll = function(a, b) {
    let n;
    if (Number.isInteger(a) && a > 0 && Number.isInteger(b) && b > 0) {
        if (a > b) [a, b] = [b, a];
        n = (b * (a + b)) / 2;
        return n;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
