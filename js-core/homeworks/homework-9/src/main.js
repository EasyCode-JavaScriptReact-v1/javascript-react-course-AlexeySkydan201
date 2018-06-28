// Отобразите достаточно ли у developers навыков ?
// Отобразите всех разработчиков и вызовете у каждого
// разработчика метод goodDev --

/*
 * Количество требований к разработчику совпадает с его навыками.
 * Используйте в задаче this
 */
let developer1 = {
    skills: ['JavaScript', 'linux', 'html', 'OOP', 'Node.js'],
    requirements: ['Node.js', 'JavaScript', 'OOP'],
    goodDev: goodDev
};
let developer2 = {
    experience: [
        { technology: 'java' },
        { technology: 'c++' },
        { technology: 'aws' },
        { technology: 'docker' }
    ],
    requirements: ['java', 'json', 'c++', 'JavaScript'],
    goodDev: goodDev
};

function goodDev(dev) {
    if (this.skills) {
        this.requirements.forEach(element1 => {
            if (this.skills.indexOf(element1) == -1) {
                console.log(`required: ${element1} ... fail`);
            } else {
                console.log(`required: ${element1} ... success`);
            }
        });
    }
    if (this.experience) {
        let arr = [];
        for (let key in this.experience) {
            let temp = this.experience[key].technology;
            arr.push(temp);
        };
        this.requirements.forEach(element1 => {
            if (arr.indexOf(element1) == -1) {
                console.log(`required: ${element1} ... fail`);
            } else {
                console.log(`required: ${element1} ... success`);
            }
        });
    }
}
console.log('developer 1')
developer1.goodDev();
console.log('developer 2')
developer2.goodDev();

/* TASK 2
 * Напишите функцию принимает 1 аргумент сортирует объект по
 * переданному значению (например age или name)
 *
 * При вызове функции используйте this
 */

let myObject = {
    database: [
        { age: 100, name: 'b' },
        { age: 15, name: 'c' },
        { age: 25, name: 'a' }
    ]
};

myObject.myFilter = function(param) {
    let tempObj = [...this.database];
    return tempObj.sort((a, b) => {
        return a[param] > b[param];
    });
};

// {age:15, name:'c'}, {age:25, name:'a'} {age:100, name:'b'}
console.log(myObject.myFilter('age'));

// {age:25, name:a}, {age:100, name: b} ...
console.log(myObject.myFilter('name'));

////// @ TODO -- LVL Strong Junior

/*
 *
 * TASK 1
 * Напишите функцию которая принимает 3 аргумента:*
 *
 *  - объект к которому привязывается метод
 *  - Имя свойства с которым связывается метод
 *  - Объявление привязываемого метода( функция )
 *
 *  Если количество аргументов у функции fn совпадает с переданными
 *  параметрами тогда сохраняет метод в замыкании
 *  и привязывает функцию к методу объекта
 *
 *  при вызове одного и того же метода с разным количеством аргументов,
 *  должно давать различный результат
 *
 * */

let junior = {};

// fn.length == arguments.length

function addMethod(object, name, fn) {
    var old = object[name];
    console.log(old);
    object[name] = function() {
        if (fn.length == arguments.length) {
            return fn.apply(this, arguments)
        } else if (typeof old == 'function') {
            return old.apply(this, arguments)
        }
    };
}

addMethod(junior, 'ok', function() {
    console.log('zero arguments');
});
addMethod(junior, 'ok', function(one) {
    console.log('one arguments');
});
addMethod(junior, 'ok', function(one, two) {
    console.log('two arguments');
});
addMethod(junior, 'ok', function(one, two, three) {
    console.log('three arguments');
});

junior.ok(1, 2, 3); // 'three arguments'
junior.ok(1, 2); // 'two arguments'
junior.ok(1); //'one arguments'
junior.ok(); //'zero arguments'