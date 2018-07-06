// var inp = document.createElement('input');
// var XMLS = new XMLSerializer();
// var inp_xmls = XMLS.serializeToString(inp); // Конвертируем DOM эелемент в сторку


// // Вставляет вновь созданный элемент в тело документа
// let elem = document.body.insertAdjacentHTML('afterbegin', inp_xmls);
// console.log(elem);
var ezjQuery = {
    temp: [],
    temp3: document.getElementById("list"),
    add: function(tag, text) {
        text = text || '';
        let elem = document.createElement(tag);
        elem.innerHTML = text;
        this.temp.push(elem);
        this.temp3 = this.temp3.appendChild(elem);
        //console.log(`temp3 `, this.temp3);
        this.result = '';
        let h = []
        h[0] = this.temp[0];
        console.log(`- `, h[0].outerHTML);
        return this;
    },
    render: function() {
        let m = [];
        m[0] = this.temp[0].outerHTML;
        this.temp = [];
        delete this.temp3;
        this.temp3 = document.getElementById("list");
        return m[0];
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

//document.write(helloList);
// var body = document.createElement('body');
// var div = document.createElement('div');
// var h1 = document.createElement('h1');
// let e = document.getElementById("list");

// e = e.appendChild(body);
// e = e.appendChild(div);
// e = e.appendChild(h1);

// console.log(body.outerHTML);