// Ваша функция должна вернуть новый массив, состоящий из элементов исходного массива согласно аргументам (с-по) 
// (getNewArray(“а, б, в, г, д, е”, 1,3) → [б, в, г]), не изменяя исходный массив и не используя циклы.

let arr = ['а', 'б', 'в', 'г', 'д', 'е', 1, 3];
let arr2 = [];

function cut_element (array) {
   return arr2 = array.slice(1, 4);
}

cut_element(arr);
console.log(arr);
console.log(arr2);