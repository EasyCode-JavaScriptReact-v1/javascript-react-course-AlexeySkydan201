var object1 = {
    mass: [3, 4, 5],
    categ1: {
        categ11: 'a1',
        categ12: 'a2',
        categ13: 'a3'
    },
    categ2: {
        categ21: 's1',
        categ22: 's2',
        categ23: 's3'
    }
}
for (let categ in object1) {
    console.log(categ);
    for (let vnu in object1[categ]) {
        console.log(`   ${object1[categ][vnu]}`);
    }
}
/*
 * Напишите функцию которая будет принимать 1 аргумент и в зависимости от типа аргумента
 *
 * Если тип аргумента число или объект -> возвращать true
 * Если тип аргумента функция -> возвращать false
 * Если тип аргумента Строка и длина этой строки не равна 10 -> возвращать "длина вашей строки: <длина строки>
 *                            Если длина 10 -> 'you win'
 */
function typeArgument(type) {
    if (typeof(type) === 'number' || typeof(type) === 'object') {
        return 'true';
    } else if (typeof(type) === 'function') {
        return 'false';
    } else if (typeof(type) === 'string') {
        if (type.length === 10) {
            return 'you win';
        } else {
            return "длина вашей строки: " + type.length;
        }

    }
}
console.log(typeArgument(3));
console.log(typeArgument({ a: 'ee' }));
console.log(typeArgument(function() {}));
console.log(typeArgument('qwertyuiop'));
console.log(typeArgument('qwer'));


/*
 1. Напишите функцию которая принимает 2 числа
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */
function numbersBetween(a, b) {
    for (let i = a; i <= b; i++) {
        //console.log(i);
    }
}
numbersBetween(3, 5); // 3, 4, 5
numbersBetween(10, 12); // 10, 11, 12


/*
 2. Перепишите задачу FizzBuzz, но с использованием цикла.
 Расчет чисел должен идти до 100
 */
function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log('FizzBuzz');
    } else {
        if (num % 3 == 0) {
            console.log('Fizz');
        } else if (num % 5 == 0) {
            console.log('Buzz');
        } else {
            console.log(num);
        }
    }
}

function fizzBuzz100(number) {
    let n = 1;
    while (n <= number) {
        fizzBuzz(n);
        n++;
    }
}
fizzBuzz100(30);


/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

let arr = [1, null, undefined, 'str', {},
    [],
    function() {}
];

function typeMass(mas) {
    let newMass = [];
    for (let i = 0; i < mas.length; i++) {
        newMass[i] = typeof(mas[i])
    }
    return newMass;
}
console.log(typeMass(arr));
console.log(arr);


/*
 1. @@SUPER@@. Вам дан массив array, содержащий внутри объекты.
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если тип данных NaN,
 тогда добавляет данному объекту свойство unknownAge: true
 2. На основании нового массива, создайте новую функцию, которая вернет новый массив
  содержащий все объекты содержащие свойство unknownAge: true
 */

let array = Array.from({ length: 35 },
    (value, index) => (index % 2 ? { age: index + 2 } : { age: NaN }),
);


function solution(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i].age)) {
            arr[i].unknownAge = 'true';
        }
        //console.log(arr[i]);
    }
    return unknownAge(arr);
}

function unknownAge(arr) {
    let newMass = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].unknownAge) {
            newMass.push(arr[i]);
        }
    }
    return newMass;
}
console.log(solution(array));
//console.log(unknownAge(solution(array)));