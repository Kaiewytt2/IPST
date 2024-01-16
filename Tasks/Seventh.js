let month = Math.floor(Math.random() * 12) + 1
let year = 2022
const season = () =>{
    if(month == 12 || month < 3){
        return 'Зима'
    }
    else if (month < 6){
        return 'Весна'
    }
    else if (month < 9){
        return 'Лето'
    }
    else return 'Осень'
}
const leapYear = () =>{
    if (year % 4 === 0){
        return 'Это високосный год'
    }
    else return 'Это не високосный год'
}

console.log(month, season(month), year, leapYear(year))