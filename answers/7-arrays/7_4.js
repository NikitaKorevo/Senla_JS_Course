// 4 Создать такую функцию, которая принимала бы любое число массивов и удаляла из каждого массива первый элемент, 
// а возвращала массив оставшихся значений ([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])"

let arr_arrays = [];
let index = 0;

function stash_delete_first_element (arr) {
arr.splice(0,1);
arr_arrays = arr_arrays.concat(arr);
return console.log(arr_arrays);
}

stash_delete_first_element([1, 2, 3]);
stash_delete_first_element(["x", "y", "z"]);

// НУЖНО ПОЛУЧИТЬ! [[2, 3], ["y", "z"]]