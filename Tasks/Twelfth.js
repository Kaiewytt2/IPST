class Worker{
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        console.log(`Зарплата - ${this.rate * this.days}`);
    }
}
let worker1 = new Worker('Имя', 'Фамилия', '200', '10');

console.log(worker1)
worker1.getSalary()
