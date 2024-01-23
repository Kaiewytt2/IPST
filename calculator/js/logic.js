import { print } from './utils/print.js'

const main = () => {
    let currentInput = ''; 
    let result = 0;
    let operator = '';

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
            result = 0;
            currentInput = '';
            operator = '';
        } else if (button === 'С') {
            currentInput = currentInput.slice(0, -1);
        } else if (button === '=' && operator) {
            calculate();
            print(result);
        } else if (['+', '-', 'x', '/'].includes(button)) {
            if (currentInput !== '') {
                calculate();
            }
            operator = button;
            print(result);
            print(operator);
            return;
        } else {
            currentInput += button;
        }

        print(currentInput || result);
    };
};

export default main;
