/*
 TASK 0
 Отобразите всех лидеров массива.
 *
 *
 * Элемент лидер если он больше чем все последующие элементы
 * после него ( элементы справа ).
 * Последний элемент всегда лидер. Например в массиве [16,17,4,3,5,2]
 * лидеры 17, 5 и 2.
 *
 * */

const solution = arr => {
    let mass = arr.filter((value, i, arr) => {
        if (i + 1 == arr.length) {
            return value;
        }
        let a = arr.slice(i + 1)
            //console.log(`a = `, a);

        function compareNumeric(a, b) {
            if (a > b) return -1;
            if (a < b) return 1;
        }
        a.sort(compareNumeric);
        if (value > a[0]) {
            return value;
        }

    });
    return mass;

};

console.log(solution([16, 17, 4, 3, 5, 2])); // === [17, 5, 2]
console.log(solution([4, 3, 7, 12, 6, 67, 5, 45, 34, 35, 2, 8])); // [67, 45, 35, 8]
console.log(solution([12, 10, 12, 8, 7, 6])); // [12, 8, 7, 6]
console.log(solution([1, 2, 3, 4, 5, 4])); // [5, 4]
console.log(solution([12, 12, 12])); // [5, 4]