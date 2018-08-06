var number = document.getElementById('number');
var strNumber = `<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
<span class="numbers" >(050)5005050</span>
<span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>`;
number.innerHTML += strNumber;

var arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', "'*'", '0', "'#'"];
var memory = '';
var keyOut = (num) => {
    memory += `${num}`;
    console.log(memory.length)
    if (memory === '#' || memory === '*') {
        memory = memory;
    } else if (memory.length == 1) {
        memory = '(' + memory;
    } else if (memory.length == 4) {
        memory = memory + ')';
    } else if (memory.length == 8) {
        memory = memory + '-';
    } else if (memory.length == 11) {
        memory = memory + '-';
    }

    number.children[1].textContent = memory;
    console.log(number.children[1].textContent);
}
var key = document.getElementById('key');
var strKey = arr.reduce(function(sum, current) {

    return sum + `<button class="key" onclick = "keyOut(${current})">${current}</button>`;
}, '');
var buttonCall = `<button class="key"> <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>`
var t = strKey + buttonCall;

key.innerHTML += t;
console.log(number)