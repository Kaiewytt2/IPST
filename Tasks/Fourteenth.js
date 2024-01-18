class PrivateWorker{
    _rate = 0;
    _days = 0;
    constructor(name, surname) {
        this._name = name;
        this._surname = surname;
    }

    set changeRate(value){
        this._rate += value
    }

    set changeDays(value){
        this._days += value
    }

    getData(){
        return{
            name: this._name,
            surname: this._surname
        }
    }

    get rate(){
        return this._rate
    }
    get days(){
        return this._days
    }

    getSalary(){
        console.log(`Зарплата - ${this._rate * this._days}`);
    }
}
let worker1 = new PrivateWorker('Имя', 'Фамилия');

worker1.changeRate = 300;
worker1.changeDays = 10;


console.log(worker1.getData(), `rate - ${worker1.rate}`, `days - ${worker1.days}`);
worker1.getSalary()


