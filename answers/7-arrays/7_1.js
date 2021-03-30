// 1 Используя функцию, найти последний элемент массива, не изменяя его.

let arr = [1, 2, 3, 4, 5];


function last_element (array) {
    return array[array.length - 1];
}

console.log(last_element(arr));