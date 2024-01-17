const array = [1,2,3,6,8,1,6,3,2,1,0,4]
const number = ['one', 'two','three']

for (let n = 0; n < array.length; n++)
for (let i = 0; i < array.length - 1 - n; i++){
    if (array[i] > array[i + 1]){
        const tmp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = tmp
    }
}
array.push(...number);
console.log(array)