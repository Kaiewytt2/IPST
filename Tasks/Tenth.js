const array = [[1,4,5],[1,3,4],[2,6]]
const numbers = [1,4,5,1,3,4,2,6]

const result= array.reduce(function(a, b) {
    return a.concat(b);
});

result.push(...numbers);

result.sort()

console.log(result)


