// 13 Отсортировать массив массив таким образом, чтобы вначале шли массивы с наименьшей длиной. Создать копию произвольного массив"

let arr = ['qwerty', 'qwer', 'q', 'qw']
let arr_copy = arr.slice();

arr_copy.sort(function (b,a) {
    return b.length - a.length;
});
console.log(arr);
console.log(arr_copy);