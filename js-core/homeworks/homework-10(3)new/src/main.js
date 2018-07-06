/* TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий
 * тэг помещался внутри предыдущего !
 ---
 * И добавьте объекту ezjQuery метод render, который будет возвращать
 * сгенерированную строку
 -----
 * Методу add - второй параметр, который будет размещать
 * информацию внутри тэга
 *
 */
var ezjQuery = {
    str: ' ',
    open: [],
    close: [],
    add: function(tag, text) {
        text = text || '';
        if (typeof(tag) == 'string') {
            let tempO = `<${tag}>${text}`;
            let tempC = `</${tag}>`
            this.open.push(tempO);
            this.close.unshift(tempC);
        } else {
            this.str = `not string`
        }
        let array = this.open.concat(this.close);
        this.str = array.join('');
        console.log(this.str);
        return this;
    },
    render: function() {
        this.open = [];
        this.close = [];
        return this.str;
    }
};
var helloList = ezjQuery
    .add('body') // <body></body>
    .add('div') // <body><div></div></body>
    .add('ul') // <body><div><ul></ul></div></body>
    .add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
    .render();
console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
//  Обратите внимание, что после вызова render создание строки началось сначала

var bodyDiv = ezjQuery
    .add('body') //<body></body>
    .add('div') //<body><div></div></body>
    .render();
console.log(bodyDiv); //<body><div></div></body>