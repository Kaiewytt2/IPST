//сделать палиндромы из строк "дим" "манек" "рота" чтоб получилось "димид" "манекенам" "ротатор"

let palindrome = ["дим", "манек", "рота"]

palindrome.forEach(element =>{
    console.log(element + element.split('').reverse().slice(1).join(''))
})


