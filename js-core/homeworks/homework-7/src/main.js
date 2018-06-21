/* TASK 1
 * Напишите функцию которая будет вызываться трижды и складывать
 * все передаваемые ей числа
 */

function add(x) {
    return function add2(y) {
        return function add3(z) {
            return x + y + z;
        }
    }
}
console.log(add(1)(2)(3)); // 6
console.log(add(10)(5)(15)); // 30

/* TASK 2
 * Напишите функцию которая возвращает объект и одно из свойств объекта это функция
 * После каждого нового вызова метода объекта(функции объекта) в консоле должно отображаться
 * число на 1 больше чем предыдущее
 * ---------------------------------------
 * так же у объекта должен быть метод обнуления счетчика
 * Узнать счетчик напрямую в объекте, нельзя
 */

function patternModule(nul) {
    let obj = {}
    let count = nul || 0;
    obj.method = function() {
        console.log(++count);
    };
    obj.null = function() {
        console.log(count = 0);
    };
    return obj;
}
let test = patternModule(); // 0
test.method(); //1
test.method(); //2
test.method(); //3
test.null();
test.method(); //1
test.method(); //2
test.method(); //3

/*
 * TASK 1
 *
 * Напишите функцию которая принимает 4 аргумента:
 *
 * -  Объект
 * -  Имя свойства с которым связывается метод
 * -  Сколько раз можно вызвать метод *
 * -  Объявление привязываемого метода ( функция )
 *
 *  При вызове метода отобразите сумму передаваемых
 *  параметров.
 *  Когда заканчивается счетчик, отображается ошибка
 *
 * */

let jun = {};

function methodCounter(obj, name, num, fn) {

    //	jun.logger = function(args){
    //   function(args) {
    //	let sum = 0;
    //	args.forEach(function(item, i, arr) {
    //	sum = sum + item;
    //	});
    //};

    obj[name] = function(args) {
        let mass = [];
        for (var i = 0; i < arguments.length; i++) {
            mass[i] = arguments[i];
        }
        //console.log(`f`, mass);
        if (num) {
            console.log(num + ',' + fn(mass));
            num--;
        } else {
            console.log('ERROR ! add more methods');
        }
    };

    //console.log(obj[name]);

}

methodCounter(jun, 'logger', 2, function(args) {
    //console.log(args);
    let sum = 0;
    for (var i = 0; i < args.length; i++) {
        sum = sum + args[i];
    }
    return sum;
});

jun.logger(1, 2, 3, 4); // 2, 10
jun.logger(5, 5, 5, 5); // 1, 20
jun.logger(5, 5); // ERROR ! add more methods

//jun.addCounter(10, methodName);
// @SUPER,

/*
 * Добавьте функции methodCounter, возможность увеличивать счетчик
 * на заданное число
 *
 * */