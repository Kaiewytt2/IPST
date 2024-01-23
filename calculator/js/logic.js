import { print } from './utils/print.js'

const main = () => {
    let currentInput = ''; // текущий введенный текст
    let result = 0;
    let operator = ''; // текущий оператор

    const calculate = () => {
        switch (operator) {
            case '+':
                result += parseFloat(currentInput);
                break;
            case '-':
                result -= parseFloat(currentInput);
                break;
            case 'x':
                result *= parseFloat(currentInput);
                break;
            case '/':
                const operand = parseFloat(currentInput);
                if (operand === 0) {
                    setTimeout(() => print('На ноль делить нельзя'), 10);
                    return;
                }
                result /= operand;
                break;
            default:
                result = parseFloat(currentInput);

        }
        currentInput = '';
        operator = '';
    };

    const resetCalculator = () => {
        result = 0;
        currentInput = '';
        operator = '';

    };

    return (button) => {
        if (button === 'АС') {
            // полная очистка
            result = 0;
            currentInput = '';
            operator = '';
        } else if (button === 'С') {
            // удаление последнего символа
            currentInput = currentInput.slice(0, -1);
        } else if (button === '=' && operator) {
            // выполнение вычислений при нажатии на =
            calculate();
            print(result);
        } else if (['+', '-', 'x', '/'].includes(button)) {
            // установка оператора
            if (currentInput !== '') {
                calculate();
            }
            operator = button;
            // вывод текущего оператора
            print(result);
            print(operator);
            return;
        } else {
            // добавление цифр и точки
            currentInput += button;
        }

        // вывод текущего ввода
        print(currentInput || result);
    };
};

export default main;
