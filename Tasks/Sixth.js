//вывести числа фибаначи до 200

let result = [0,1];
let current = 1;
let prev = 1;

while (current <= 200){
    result.push(current)
    let i = current + prev
    prev = current
    current = i;
}

console.log(result)