/*
TASK 0
Проверьте что строка содержит все символы от "a" до "z"
  solution("wyyga") // false
  solution("qwertyuioplkjhgfdsazxcvbnm") // true
  solution("ejuxggfsts") // false
  solution("qpwoeirutyalskdjfhgmznxbcv") // true
  solution("qqqqqqqqpwoeirutyallskkdjfhgmmznxbcv") // true
  solution("0123456789abcdefghijklmnop") // false
*/
var solution = (str) => {
    let povtor = str.split('');
    let uniqueArray = povtor.filter(function(item, pos) {
        return povtor.indexOf(item) == pos;
    });
    if (uniqueArray.length < 26) {
        console.log(false);
    } else {
        let reg = /[a-z]/gmi;
        let newStr = uniqueArray.join('');
        let delet = newStr.replace(reg, '');
        if (delet.length > 0) {
            console.log(false);
        } else {
            console.log(true);
        }
    }
}
solution("wyyga");
solution("qwertyuioplkjhgfdsazxcvbnm");
solution("ejuxggfsts");
solution("qpwoeirutyalskdjfhgmznxbcv");
solution("qqqqqqqqpwoeirutyallskkdjfhgmmznxbcv");
solution("0123456789abcdefghijklmnop");

var br1 = [
    [1, 2],
    [3, [4]], 5, 10
];
var br2 = [25, 10, [10, [15]]];
var br55 = [
    [5],
    [2]
];
var br3 = [1, [2, [{ a: "b", c: 'd' }, { c: [1, 2, 5] }]]];

function flatten(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let newArr = [];
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            newArr = newArr.concat(flatten(item));
        } else {
            newArr.push(item);
        };
    });
    //console.log(newArr);
    return newArr
}

console.log(flatten(br1))
console.log(flatten(br2));
console.log(flatten(br3));