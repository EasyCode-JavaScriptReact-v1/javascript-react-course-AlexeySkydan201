/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 // concat
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
let arr2 = [
    'a',
    0,
    0,
    'b',
    null,
    'c',
    'd',
    0,
    1,
    false,
    0,
    1,
    0,
    3, [],
    0,
    1,
    9,
    0,
    0,
    {},
    0,
    0,
    9
];

function moveZeroToEnd(arr) {
    let newArr = [];
    let zeroArr = [];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 0) {
            zeroArr.push(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr.concat(zeroArr);

}
//console.log(moveZeroToEnd(arr1));
//console.log(moveZeroToEnd(arr2));


/*
 2. Верните сумму двух найменьших чисел в массиве
 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 */
var arr11 = [10, 20, 30, 1, 31, 11, 10];
var arr21 = [-1, 0, 25];
var arr31 = [-4, -10, 25, 10];
var arr41 = [0, 200, 10, 25, 15];

function minimalNumber(arr) {
    let mewArr = [];
    newArr = arr.sort();
    //console.log(newArr[0] + newArr[1]);
}
minimalNumber(arr11);
minimalNumber(arr21);
minimalNumber(arr31);
minimalNumber(arr41);


/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */
var name1 = 'john McClane';
var name2 = 'Arnold Schwarzenegger';
var name3 = 'James Bond';

function nameShuffler(str) {
    let newStr = [];
    newStr = str.split(' ');
    //console.log(`${newStr[1]} ${newStr[0]}`);
}
nameShuffler(name1);
nameShuffler(name2);
nameShuffler(name3);


/*
4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */
var mass1 = ['jo', 'nelson', 'jurie'];
var mass2 = ['KARLY', 'DANIEL', 'KELSEY'];

function capMe(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase();
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    //console.log(arr);
}
capMe(mass1);
capMe(mass2);


// @SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности
 example:
  [1,3,5,9] => 7 (9-1) / 4 == 2
  [0,8,16,32] => 24
  [4, 6, 8, 10] => 2 // число сначала
  [0,16,24,32] => 8
 */

function random(arr) {
    for (let i = 0; i < arr.length; i++) {
        let x = 2;
        if (true) {

        }
    }

}

random([1, 3, 5, 9]);
random([0, 8, 16, 32]);
random([0, 16, 24, 32]);
random([4, 6, 8, 10]);


/*
 Задача с собеседований*
 2. Напишите функция которая преобразовывает/открывает скобки всех
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов
 example:
  [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
  [25,10,[10,[15]]] => [25,10,10,15]
 */
var br1 = [
    [1, 2],
    [3, [4]], 5, 10
];
var br2 = [25, 10, [10, [15]]];
var br55 = [
    [5],
    [2]
];
//console.log(br1);

//openBraces(br1);


function openBraces(arr) {

    console.log(`уровень `, arr.length);
    if (arr.length <= 0) {
        return arr;
    }

    if (Array.isArray(arr[0])) {
        let temp = arr.shift();
        let newArr11 = temp + openBraces(temp);
    }
    let newArr11 = arr.shift() + ' ' + openBraces(arr);
    return newArr11.split(' ');

}
console.log(openBraces(br2));
// let arr0 = arr[0];
// if (Array.isArray(arr0)) {
//     openBraces(arr0);
// } else {
//     newArr.push(arr[0]);
//     arr.shift();
//     newArr.concat(openBraces(arr));
//     console.log(`newArr `, newArr);
//     return newArr;

// }
//newArr.push(arr[0]);