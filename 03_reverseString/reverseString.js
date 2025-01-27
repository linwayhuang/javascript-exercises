 const reverseString = function(text) {
    modified = '';

    for (i = text.length - 1; i >= 0; i--) {
        modified += text.charAt(i);
    }

    return modified;
};

// Do not edit below this line
module.exports = reverseString;
