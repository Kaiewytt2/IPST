class PrivateWorker{
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    getData(){
        return{
            name: this._name,
            surname: this._surname,
            rate: this._rate,
            days: this._days
        }
    }

    getSalary(){
        console.log(`Зарплата - ${this._rate * this._days}`);
    }
}
let worker1 = new PrivateWorker('Имя', 'Фамилия', '200', '10');


console.log(worker1.getData());
worker1.getSalary()


