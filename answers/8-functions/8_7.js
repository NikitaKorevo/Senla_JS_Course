/* // Создать две функции и дать им осмысленные названия:
первая функция принимает массив и callback, возвращая строку из обработанного массива.
вторая функция (callback) обрабатывает каждый элемент массива */

let array = [10, 20, 30, 40, 50];

function increment (arr, callback) {
    callback(arr);
    console.log(array);
}

function callback (arr) {
    for (let index = 0; index < arr.length; index++) {
       arr[index] ++;
    }
}

increment(array, callback);