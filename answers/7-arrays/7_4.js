// 4 Создать такую функцию, которая принимала бы любое число массивов и удаляла из каждого массива первый элемент, 
// а возвращала массив оставшихся значений ([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])"

let arr_arrays = [];

function stash_delete_first_element (...[]) {
    for (let index = 0; index < arguments.length; index++) {
        arguments[index].shift();
        arr_arrays[index] = arguments[index];
    }
    console.log(arr_arrays);
}

stash_delete_first_element([1, 2, 3], ["x", "y", "z"]);