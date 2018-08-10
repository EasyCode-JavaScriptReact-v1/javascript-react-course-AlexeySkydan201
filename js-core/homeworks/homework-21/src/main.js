﻿/* TASK 0
 Сделайте валидацию кредитной карты, валидация происходит
 используя алгоритм Луна.
  Простое описание:
   1. Начиная с последнего правого числа, двигаясь влево,
   умножайте каждое второе число на 2,
   если результат умножения больше 9
   (например 8 х 2 = 16),
   тогда сумируйте получившиеся число
   (например 16: 1+6 = 7, 18: 1+8 = 9).
   2. Получите сумму всех чисел.
   3. Если сумма всех чисел кратно 10, тогда число является подходящим,
      иначе нет.
P.S. -> проверьте на свой карте.
arguments ["4408041234567893"] => expected true
arguments ["1234567890123456"] => expected false
arguments ["4408042234567893"] => expected false
arguments ["38520000023237"] => expected true
arguments ["4222222222222"] => expected true
*/
var arguments = str => {
    var arr = str.split('');
    let arr1 = arr.map((value, i) => {
        if (i % 2 == 0) {
            let temp = value * 2;
            if (temp > 9) {
                temp = '' + temp;
                temp = +temp.charAt(0) + +temp.charAt(1);
                return temp;
            } else {
                return temp;
            }
        } else {
            return +value;
        }
    });
    var result = arr1.reduce(function(sum, current) {
        return sum + current;
    }, 0);
    let t = ('' + result).charAt(1) == 0 ? 'expected true' : 'expected false';
    console.log(t)
}
arguments("4408041234567893");
arguments("1234567890123456");
arguments("4408042234567893");
arguments("38520000023237");
arguments("4222222222222");