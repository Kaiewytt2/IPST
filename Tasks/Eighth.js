const array = [6, 1, 7, 3, 5, 8, 0, -1, 3, 2, 4, 5]

    for (let i = 0; i < array.length-1; i++){
        let minIndex = i
        for (let j = i+1; j < array.length; j++){
            if (array[minIndex] > array[j]){
                minIndex = j
            }
        }
        if (minIndex !== i){
            let buff = array[minIndex]
            array[minIndex] = array[i]
            array [i] = buff
        }
    }

    const binaryNumber = (array, item) => {
        let left = 0
        let right = array.length
        let mid;
        let found = false
        let position = -1
        while (found === false && left <= right){
           mid = Math.floor((left + right) / 2 )
            if (array[mid] === item){
                found = true
                position = mid
                return position;
            }
             if (item < array[mid]){
                 right = mid - 1
             }  else {
                 left = mid + 1
             }
        }
        return position;
}

console.log(array)
console.log(binaryNumber(array, 0))


