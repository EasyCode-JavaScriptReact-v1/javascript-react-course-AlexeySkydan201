/*
 0 Алгоритмы
 Реализуйте функцию которая будет превращать трехмерный массив
 в двухмерный, а если массив двухмерный, тогда в трехмерный массив
 // solution([ [1, 'a'], [2, 'b'], [3, 'c'] ]) => [ [1, 2, 3], [a, b, c] ]
 // solution([ [1, 3, 5], [2, 4, 6] ]) => [ [1, 2], [3, 4], [5, 6] ]
 // solution([[]]) => []
 [ [ [ ] ] ] = [ [] ]
 ИСПОЛЬЗУЙТЕ МЕТОДЫ МАССИВОВ !
 */

// var r = []
// r[0].push(6)
// console.log(r)
const solution = arr => {
    let er = [];
    let i = 0;
    while (i < arr[0].length) {
        er[i] = []
        arr.forEach((element) => {
            er[i].push(element[i])
        });
        i++
    }
    console.log(er);
};
solution([
    [1, 3, 5],
    [2, 4, 6]
]);
solution([
    [1, 'a'],
    [2, 'b'],
    [3, 'c']
]);
var body = document.body;
const navigation = [
    { name: 'Главная' },
    {
        name: 'Каталог',
        children: [{
            name: 'Компьютеры',
            children: [{ name: 'Ноутбуки' }, { name: 'Ноутбуки' }]
        }]
    },
    { name: 'Профиль' }
];
/*
   Визуализируйте массив, если в коллекции есть свойство
   children,
   тогда создайте вложенный лист
   name - свойство h1
   children ul -> li
   Используйте innerHTML
*/
/*
<h1>Главная</h1>
    <ul>
        <h1>Каталог</h1>
        <li>
            <ul>
                <h1>Компьютеры</h1>
                <ul>
                    <li>
                        <h1>Ноутбуки</h1>
                    </li>
                    <li>
                        <h1>Ноутбуки</h1>
                    </li>
                </ul>
            </ul>
        </li>
    </ul>
<h1>Профиль</h1>
*/
var ezjQuery = {
    str: ' ',
    open: [],
    close: [],
    add: function(tag, text) {
        text = text || '';
        if (typeof(tag) == 'string') {
            let tempO = '';
            let tempC = '';
            if (tag == 'h1') {
                tempO = `<${tag}>${text}</${tag}>`;
            } else {
                tempO = `<${tag}>${text}`;
                tempC = `</${tag}>`
            }

            this.open.push(tempO);
            this.close.unshift(tempC);
        } else {
            this.str = `not string`
        }
        let array = this.open.concat(this.close);
        this.str = array.join('');
        // console.log(this.str);
        return this;
    },
    render: function() {
        this.open = [];
        this.close = [];
        return this.str;
    }
};
var str = '';
var main = ezjQuery
    .add('h1', 'Главная') //<body></body>
    .render();
str += main;
var catalog = ezjQuery
    .add('ul')
    .add('h1', 'Каталог')
    .add('li')
    .add('ul')
    .add('h1', 'Компьютеры')
    .add('ul')
    .add('li', '<h1>Ноутбуки</h1>')
    .add('li', '<h1>Ноутбуки</h1>')
    .render();
str += catalog;
var prof = ezjQuery
    .add('h1', 'Профиль') //<body></body>
    .render();
str += prof;
body.innerHTML += str