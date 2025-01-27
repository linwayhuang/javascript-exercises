//compare the first argument and cycle through all the element in the provided array
//remove the match element in the array
//return the shortened array
//repeat the steps for subsequent arguments

const removeFromArray = function(items, ...value) {
    for (j = 0; j < value.length; j++) {
        for (i = 0; i < items.length; i++) {
            if (items[i] === value[j]) {
                items.splice(i, 1);
                i--;
            }
        }
    }
    return items ;
};

// Do not edit below this line
module.exports = removeFromArray;
