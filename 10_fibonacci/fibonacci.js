const fibonacci = function(end) {
    let arr = [0, 1];
    if (end >= 0) {
        for (let i = 2; i <= end; i++) {
            sum = arr[i - 2] + arr[i - 1];
            arr.push(sum);
        }
        return arr[end];
    }
    else {
        return 'OOPS';
    }
};

// Do not edit below this line
module.exports = fibonacci;
