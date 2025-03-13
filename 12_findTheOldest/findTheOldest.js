const findTheOldest = function(array) {
    const addAge = array.map(item => ({
        name: item.name,
        yearOfBirth: item.yearOfBirth,
        yearOfDeath: (!item.yearOfDeath) ? (new Date()).getFullYear() : item.yearOfDeath, //you can use either "!"
        //or "item.yearOfDeath == 'undefined'" to check if it's the property exists
        age: (!item.yearOfDeath) ? (new Date()).getFullYear() - item.yearOfBirth : item.yearOfDeath - item.yearOfBirth
    }))
    const sortByAge = addAge.toSorted((a, b) => (b.age - a.age));
    const oldestPerson = sortByAge[0];
    return oldestPerson;
}
// Do not edit below this line
module.exports = findTheOldest;
