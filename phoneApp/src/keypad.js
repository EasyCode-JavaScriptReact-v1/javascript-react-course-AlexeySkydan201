class Keypad {
    constructor() {
        this.lol = document.getElementById('lol');
        this.arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', "'*'", '0', "'#'"];
        this.strNumber = `<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
        <span class="numbers" id = "monitor"></span>
        <span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>`;
        this.buttonCall = `<button class="key"> <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>`;
        this.memory = '';
    }
    render() {
        this.lol.innerHTML += this.header();
        this.lol.innerHTML += this.main();
        this.number = document.getElementById('number');
        this.monitor = document.getElementById('monitor');
        console.log(this.monitor)
    }
    header() {
        return `<header class="header">
        <div class="container top-radius">
            <h2>Keypad</h2>
        </div>
        </header>`
    }
    main() {
        return ` <main class="main">
        <div class="container">
            <div class="number" id="number">
            ${this.strNumber}
            </div>
            <div class="keypad-holder" id="key">
            ${this.strKey()}
            ${this.buttonCall}
            </div>
    </main>`
    }
    strKey() {
        return this.arr.reduce(function(sum, current) {
            return sum + `<button class="key" onclick = "app.pages.keypad.keyOut(${current})">${current}</button>`;
        }, '');
    }
    keyOut(num) {
        this.memory += `${num}`;
        if (this.memory === '#' || this.memory === '*') {
            this.memory = this.memory;
        } else if (this.memory.length == 1) {
            this.memory = '(' + this.memory;
        } else if (this.memory.length == 4) {
            this.memory = this.memory + ')';
        } else if (this.memory.length == 8) {
            this.memory = this.memory + '-';
        } else if (this.memory.length == 11) {
            this.memory = this.memory + '-';
        }

        this.number.children[1].textContent = this.memory;
    }


}
var key = new Keypad();
//key.render();

// var number = document.getElementById('number');
// var strNumber = `<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
// <span class="numbers" >(050)5005050</span>
// <span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>`;
// number.innerHTML += strNumber;

//var arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', "'*'", '0', "'#'"];
// var memory = '';
// var keyOut = (num) => {
//     memory += `${num}`;
//     //console.log(memory.length)
//     if (memory === '#' || memory === '*') {
//         memory = memory;
//     } else if (memory.length == 1) {
//         memory = '(' + memory;
//     } else if (memory.length == 4) {
//         memory = memory + ')';
//     } else if (memory.length == 8) {
//         memory = memory + '-';
//     } else if (memory.length == 11) {
//         memory = memory + '-';
//     }

//     number.children[1].textContent = memory;
//     //console.log(number.children[1].textContent);
// }
//var key = document.getElementById('key');
// var strKey = arr.reduce(function(sum, current) {

//     return sum + `<button class="key" onclick = "keyOut(${current})">${current}</button>`;
// }, '');
// var buttonCall = `<button class="key"> <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>`
// var t = strKey + buttonCall;

// key.innerHTML += t;
//console.log(number)