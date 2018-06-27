/* TASK 1
 * Создайте функцию которая будет запоминать переданные
 * ей аргументы, и прибавлять их в строку
 * и отображать в консоле всю строку
 */

function solution1(someString) {
    let str = ' ';
    return function(someString) {
        str = str + ' ' + someString;
        console.log(str);
    }
}

let stringBuffer = solution1();

stringBuffer('Замыкания'); // Замыкания
stringBuffer('Использовать нужно'); // Замыкания Использовать нужно
stringBuffer('Привет'); // Замыкания Использовать нужно Привет вызываем много раз

/* TASK 2
 * Напишите функцию которая принимает в качестве аргумента строку
 * из скобочек и посчитайте, * что все скобочки закрываются корректно
 */

function validBraces(str) {
    let stek = [];
    let massStr = str.split('');
    let temp = '';
    //console.log(massStr);
    massStr.forEach(function(value, i, arr) {
        if (value == '(') {
            stek.push('a')
        }
        if (value == '{') {
            stek.push('b')
        }
        if (value == '[') {
            stek.push('c')
        }
        if (value == ')') {
            temp = 'a';
            if (stek[stek.length - 1] == temp) {
                stek.pop();
            }
        }
        if (value == '}') {
            temp = 'b';
            if (stek[stek.length - 1] == temp) {
                stek.pop();
            }
        }
        if (value == ']') {
            temp = 'c';
            if (stek[stek.length - 1] == temp) {
                stek.pop();
            }
        }
    });
    if (stek.length > 0) {
        console.log(false);
    } else { console.log(true); }


}

validBraces('(){}[]'); // => returns true
validBraces('(}'); // => returns false
validBraces('[(])'); // => returns false
validBraces('([{}])'); // => returns true
validBraces('({[]})'); // => returns true

// @SUPER

/*
 *
 * Напишите функцию которая будет принимать одно число и выводить сумму
 * всех натуральных чисел
 * sum(5) // 5+4+3+2+1
 *
 * Вычисления должны кешироваться, если в функцию попадает закешированное
 * значение, в консоле должно отобразиться
 * Значение взято из кэша
 *
 * Нельзя использовать внешние значения/переменные/функции
 *
 * */


//или так 
var num = 0;
let summa = 0;

function sum(r) {

    if (num == r) {
        console.log(summa + ` Значение взято из кэш`);
    } else {
        summa = 0;
        num = 0
        num = num + r;
        num2 = num;
        while (num2 > 0) {
            summa = summa + num2;
            num2--;
        }
        console.log(summa + ` значение закешировано`);
        //return s1 + ` значение закешировано`;
    }

}
sum(5);
sum(5);
sum(6);
sum(6);

//или так
function sum2() {
    var num = 0;
    let summa = 0;

    return function(r) {

        if (num == r) {
            console.log(summa + ` Значение взято из кэш`);
        } else {
            summa = 0;
            num = 0
            num = num + r;
            num2 = num;
            while (num2 > 0) {
                summa = summa + num2;
                num2--;
            }
            console.log(summa + ` значение закешировано`);
            //return s1 + ` значение закешировано`;
        }

    }
}
var sum = sum2();
sum(5); // 15 Значение кешировано
sum(5); // 15 Значение взято из кэш
sum(6); // 21 Кешировано
sum(6); // 21 Значение взято из кэша