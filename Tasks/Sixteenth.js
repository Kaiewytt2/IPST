class Calculation{
    constructor() {
        this.calculationLine = '';
    }

    setterCalculationLine(val) {
        this.calculationLine = val;
    }

    setLastSymbolCalculationLine(sym) {
        this.calculationLine += sym;
    }

    getterCalculationLine() {
        return this.calculationLine;
    }

    lastSymbol() {
        return this.calculationLine.charAt(this.calculationLine.length - 1);
    }

    deleteLastSymbol() {
        this.calculationLine = this.calculationLine.slice(0, -1);
    }
}
let str = new Calculation();

str.setterCalculationLine('Hello');
console.log(str.getterCalculationLine());

str.setLastSymbolCalculationLine('!')
console.log(str.getterCalculationLine());

console.log(str.lastSymbol());

str.deleteLastSymbol();
console.log(str.getterCalculationLine());
