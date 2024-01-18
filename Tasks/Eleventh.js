function convertToArray(value) {
    let result = [];
    for (let key in value) {
        result.push([key, value[key]]);
    }
    return result;
}

console.log(convertToArray({ a: 1, b: 2 }));