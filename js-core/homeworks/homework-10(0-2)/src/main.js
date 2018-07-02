let y = 5;
let x = () => y;

let z = t => {
    let y = 5;
    t();
};
console.log(y);
z(x);

/* TASK 1
 * Создайте функцию которая будет превращать
 * передаваемую строку в html тэг
 */
//console.log(document.createElement('div'));
let $ = function(tag) {
    return document.createElement(tag);
}
let createBODY = $('body');
let createDIV = $('div');
console.log(createBODY); // <body></body>
console.log(createDIV); // <div></div>


/* TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
  // obj.method().method().method()
  ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
*/
var ezjQuery = {
    result: ' ',
    add: function(tag) {
        let elem = document.createElement(tag);
        this.result = this.result + elem.outerHTML;
        console.log(this.result);
        return this;
    },
};
ezjQuery
    .add('body') // <body></body>
    .add('div') // <body></body><div></div>
    .add('h1'); // <body></body><div></div><h1></h1>