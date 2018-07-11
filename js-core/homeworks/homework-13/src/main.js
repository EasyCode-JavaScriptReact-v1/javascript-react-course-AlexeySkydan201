class Human {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.pol = options.pol;
        this.height = options.height;
        this.weight = options.weight;
    }
}

class Worker extends Human {
    constructor(options) {
        super(options);
    };
    //work4() { console.log(`работать`); }
}
Worker.prototype.work4 = () => { console.log(`работать`); }

class Student extends Human {
    constructor(options) {
        super(options);
    };
    //visionTV() { console.log(`смотреть сериалы`); }
}
Student.prototype.visionTV = () => { console.log(`смотреть сериалы`); }

var alexWorker = new Worker({ name: 'alex', age: 38, pol: 'm', height: 180, weight: 110 });
var vasyaWorker = new Worker({ name: 'vasya', age: 47, pol: 'm', height: 170, weight: 120 });
var alfredStudent = new Student({ name: 'alfred', age: 47, pol: 'm', height: 197, weight: 80 });
var annaStudent = new Student({ name: 'anna', age: 18, pol: 'w', height: 190, weight: 62 });

console.log(alexWorker);
console.log(vasyaWorker);
console.log(alfredStudent);
annaStudent.visionTV();

/* Вы должны создать имитацию медленной базы данных.
 * TASK - 1 Сделайте Класс Database с методами
 *  query
 *  При запуске метода query запустите внутренний таймаут, который будет длиться 5 секунд.
 *  При поступлении еще 1 запроса(если вызвать метод еще раз),
 *  таймаут должен стартануть сначала
 *  и ответ должен прийти снова через 5 секунд
 *
 */
class DataBase {
    constructor() {
        this.num = 6;
    };
    set() {
        this.seti = setInterval(() => {
            console.log(this.num = this.num - 1);
            if (this.num <= 1) {
                console.log('The web server is down');
                clearInterval(this.y);
            }
        }, 1000);
    }
    query() {
        if (!this.seti) {
            this.set();
        } else {
            clearInterval(this.y);
            this.num = 6;
            this.set();
        }
    }
}

const dataBase = new DataBase();
dataBase.query();