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

var moveZeroToEnd = arr => {
    let newArr = [];
    let zeroArr = [];

    newArr = arr.filter(number => {
        return number !== 0;
    });
    zeroArr = arr.filter(number => {
        return number === 0;
    });
    return newArr.concat(zeroArr);
}
console.log(moveZeroToEnd(arr1));
console.log(moveZeroToEnd(arr2));


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

var minimalNumber = arr => {
    arr.sort(compareNumeric)
    console.log(arr[0] + arr[1]);
}

var compareNumeric = (a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
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

var nameShuffler = str => {
    let newStr1 = [];
    let newStr = [];
    newStr1 = str.split(' ');
    newStr1.forEach(item => {
        newStr.unshift(item);
    });
    console.log(newStr.join(' '));
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

var capMe = arr => {
    var bigWord = arr.map(value => {
        value = value.toLowerCase();
        value = value.charAt(0).toUpperCase() + value.slice(1);
        return value;
    });
    console.log(bigWord);
}
capMe(mass1);
capMe(mass2);


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

var openBraces = arr => {
        if (arr.length <= 1) {
            return arr;
        }
        let newArr11 = arr.shift() + ',' + openBraces(arr);
        return newArr11.split(',');
    }
    //console.log(openBraces(br2));
    //console.log(openBraces(br1));