/* EASY
Алгоритмы !
TASK 0
Вам дано предложение, верните массив из слов,
которые длинее чем средняя длина всех слов.
Слова разделены пробелами, если в предложении запятые,они должны быть пропущены
solution(["This is a sample string"]) expected ["This" "sample" "string"]
solution(["Some another sample"]) expected ["another" "sample"]
solution(["Do, do, do, do... do it!"]) expected []
*/
var solution = (arr) => {
    var str = arr[0];
    str = str.replace(/[,.!]/gmi, '').split(' ');
    var result = str.reduce((sum, value) => {
        return sum = sum + value.length;
    }, 0);
    var midle = result / str.length;
    var pos = str.filter((value) => {
        return value.length > midle;
    });
    console.log(pos);
}
solution(["This is a sample string"]);
solution(["Some another sample"]);
solution(["Do, do, do, do... do it!"]);