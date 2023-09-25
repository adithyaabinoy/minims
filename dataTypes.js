//Create a function called dataType that takes in one argument and returns a string indicating the data type of the input. The function should be able to handle strings, numbers, undefined, null, and boolean in javascript .
function dataType(value) {
    if (typeof value === 'string') {
        return 'string';
    } else if (typeof value === 'number') {
        return 'number';
    } else if (typeof value === 'undefined') {
        return 'undefined';
    } else if (value === null) {
        return 'null';
    } else if (typeof value === 'boolean') {
        return 'boolean';
    } else {
        return 'unknown';
    }
}

console.log(dataType("Hello"))