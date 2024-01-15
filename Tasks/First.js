//Данна строка 'DDADSADASDAAADS' вывести все уникальные символы в строке "DAS"

function findUnique(str) {
    // Переменная в которую будем хранить уникальные данные
    let uniq = "";

    // Цикл по строке
    for (let i = 0; i < str.length; i++) {
        // Проверка если уникальныих символов нет в строке
        if (!uniq.includes(str[i])) {
            // То добавляем в уникальные данные
            uniq += str[i]
        }
    }

    // Возвращаем строку уникальных данных
    return uniq;
}

console.log(findUnique("DDADSADASDAAADS"))