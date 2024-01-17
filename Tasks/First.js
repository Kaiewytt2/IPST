//Данна строка 'DDADSADASDAAADS' вывести все уникальные символы в строке "DAS"

const findUnique = (str)=> {
    let uniq =''
    str.split('').forEach((item)=>{
        if (!uniq.includes(item))
            uniq += item
    })
    return uniq;
}

console.log(findUnique("DDADSADASDAAADS"))