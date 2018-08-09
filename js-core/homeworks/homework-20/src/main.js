/* Алгоритмы
TASK 0
Проверьте 2 строки и определите изоморфные ли они.
Две строки являются изоморфными если все их символы
s, могут быть заменены t.
Все символы одной строки могут быть заменены такими же символами другой строки, независимо от
порядка символов.
Given two strings, determine if they are isomorphic.
Two strings are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters.
No two characters may map to the same character but a character may map to itself."
arguments ["egg", "add"] => expected true
arguments ["foo", "bar"] => expected false
arguments ["paper", "title"] => expected true
arguments ["ca", "ab"] => expected true
arguments ["aa", "bb"] => expected true
arguments ["aedor", "eiruw"] => expected true
*/

var arguments = (arr) => {
    let first = arr[0];
    let second = arr[1];
    let obj = {};
    if (first.length != second.length) {
        console.log(`1 `, 'expected false');
    }
    for (let i = 0; i < first.length; i++) {
        if (obj[first.charAt(i)] == undefined) {
            obj[first.charAt(i)] = second.charAt(i)
        } else if (obj[first.charAt(i)] != second.charAt(i)) {
            console.log(`2 `, 'expected false');
            return;
        }

    }
    console.log('expected true');
}
arguments(["egg", "add"]);
arguments(["foo", "bar"]);
arguments(["paper", "title"]);
arguments(["ca", "ab"]);
arguments(["aa", "bh"]);
arguments(["aedor", "eiruw"]);