var t = document.styleSheets;
//console.log(t[0].rules)
class Set {
    constructor() {

    }
    topStyle(class1, atribut) {
        var style = document.getElementsByTagName('style')[0];
        let atribut1 = ''
        for (let key in atribut) {
            console.log(`${key}:${atribut[key]}`);
            atribut1 += `${key}:${atribut[key]}`
        }
        var c = ' .' + class1 + ' {' + atribut1 + '};';
        style.innerHTML += c;
        //head.appendChild(style);
    }
}
var s = new Set();
//s.topStyle('fetch', { border: '4px double black;' });
s.topStyle('top', { backgroundColor: 'blue' });