class MyString{
    reserve(str){
        return str.split('').reverse().join('');
    }

    ucFirst(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    ucWords(str){
        return str.split(' ')
            .map(str => str.charAt(0).toUpperCase() + str.slice(1))
            .join(' ')
    }
}

let str = new MyString();

console.log(str.reserve('что случилось?'))

console.log(str.ucFirst('что случилось?'))

console.log(str.ucWords('что случилось?'))

