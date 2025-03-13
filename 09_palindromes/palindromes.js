const palindromes = function (str) {
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); //'/s' represents spacebar, with '^' you want to keep
    // the characters, without '^' you don't want to keep the characters,'g' indicates you want to remove all instances
    const arr = cleanStr.split('');
    const reversedArr = arr.slice();
    reversedArr.reverse();
    // console.log(arr);
    // console.log(reversedArr);
    return arr.every((value, index) => value === reversedArr[index]);
};

// Do not edit below this line
module.exports = palindromes;
