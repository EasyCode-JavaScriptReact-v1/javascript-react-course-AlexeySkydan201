/*
TASK 0. Найдите числа которые повторяются нечетное количество раз
в массиве
  solution([12, 23, 34, 12, 12, 23, 12, 45]) -> [34 45]
  solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]) -> [4 100 5000]
  solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]) -> [6 5 9 21]
  solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]) -> [8 16 23 42]
  solution([2, 2, 44, 44]) => []
*/
var povtorNechet = (mass) => {
    let povtor = mass.filter(function(number, i, arr) {
        let counter = 0;
        let j = 0;
        while (j < mass.length) {
            if (number == mass[j]) {
                counter++;
            }
            j++;
        }
        if (counter % 2 != 0) {
            return number;
        }
    });
    let uniqueArray = povtor.filter(function(item, pos) {
        return povtor.indexOf(item) == pos;
    });
    return uniqueArray;
}
console.log(povtorNechet([12, 23, 34, 12, 12, 23, 12, 45]));
console.log(povtorNechet([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100, ]));
console.log(povtorNechet([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]));
console.log(povtorNechet([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]));
console.log(povtorNechet([2, 2, 44, 44]));

const someWebpackModule = `module.exports = {
    context: %%HOMEDIR%%,
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

/* TASK - 1
Распарсите строку и замените
 %%HOMEDIR%% -> './JavaScript-Basic'
 %%APP_DIR%% -> 'fixtures/src'
 %%APPNAME%% -> 'app.js'
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 Сделайте несколько вызовов данной функции
*/
var replacement = (str, what, forWath) => {
    var first = new RegExp(what, "g", "m", "i");
    let newStr = str.replace(first, forWath);
    console.log(newStr);
}
replacement(someWebpackModule, '%%HOMEDIR%%', './JavaScript-Basic');
replacement(someWebpackModule, '%%APP_DIR%%', 'fixtures/src');
replacement(someWebpackModule, '%%APPNAME%%', 'app.js');