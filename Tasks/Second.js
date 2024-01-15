//Данна строка 'hello alexandr!' сделать из нее 'hhhhh aaaaaaaaa'

let testRow = 'hello alexandr!'
let row = []
testRow = testRow.split(' ')

testRow.forEach(element =>{
    row.push(element.slice(0, 1).repeat(element.length))
})

console.log(row.join(' '))