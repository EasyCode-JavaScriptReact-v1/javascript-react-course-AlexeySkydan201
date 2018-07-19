/* Task 0
 * Создайте функцию конструктор Http, которая будет иметь 2 метода
 * createServer() - принимает один аргумент функцию с двумя параметрами ctx и next
 * ctx: Object {
 *   req: Object
 *   PORT: number
 *   url: string
 *   res: Object
 *   status: number,
 *   message: string,
 *   header: Object {
 *      content-type:application/json
 *   }
 * }
 * next: Function
 * при вызове listen(PORT, host) - в консоле должна отобразится надпись
 * "Server running on https://host:port"
 * и вызваться переданная в createServer функция
 * методы нужно вызывать через chain
 * после вызова метода listen() - должна вызываться переданная в createServer
 * первая функция и возвращать объект и функцию
 */
var ctx = {
    req: {
        PORT: 'number',
        url: 'string',
    },
    res: {
        status: 'number',
        message: 'string',
        header: {
            content_type: 'application / json'
        }
    }
}
var next = function() { console.log(0); };

function Http() {}
Http.prototype.createServer = function(fn) {
    this.fn = fn; //function(ctx, next) { console.log(ctx); }
    return this;
}
Http.prototype.listen = function(PORT, host) {
    console.log(`"Server running on https://${host}:${PORT}"`);
    this.fn(ctx, next);

}
const server = new Http().createServer(function(ctx, next) {
    console.log(ctx);
}).listen(3000, 'localhost');

// TASK 1
// Создать класс Human, у которого будут свойства обычного человека:
// имя, возраст, пол, рост, вес.
// Используя прототипное наследование создать дочерние классы Worker
// (дописать в них поля места работы, зарплата, метод "работать")
// и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
// Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human

var Human = function(name, age, pol, height, weight) {
    this.name = name;
    this.age = age;
    this.pol = pol;
    this.height = height;
    this.weight = weight;
}
var Worker = function(name, age, pol, height, weight) {
    this.placeOfWork = 'stok';
    this.salary = 6500;
    Human.call(this, name, age, pol, height, weight);
}
var Student = function(name, age, pol, height, weight) {
    this.colledge = 'easy';
    this.stipendia = '300$';
    Human.call(this, name, age, pol, height, weight);
}

Worker.prototype = Object.create(Human.prototype);
Student.prototype = Object.create(Human.prototype);

Worker.prototype.work4 = () => { console.log(`работать`); }
Student.prototype.visionTV = () => { console.log(`смотреть сериалы`); }

var alexWorker = new Worker('alex', 38, 'm', 180, 110);
var vasyaWorker = new Worker('vasya', 47, 'm', 170, 120);

var alfredStudent = new Student('alfred', 47, 'm', 197, 80);
var annaStudent = new Student('anna', 18, 'w', 190, 62);

console.log(alexWorker);
console.log(vasyaWorker);
console.log(alfredStudent);
annaStudent.visionTV();