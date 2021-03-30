// 2 Создать такую функцию, которая принимала бы массив [1,3,6], а возвращала новый массив с дублированными элементами [1,3,6,1,3,6].

let arr = [1, 3, 6]

function squared_array (array) {
   return array = array.concat(array);
}

console.log(squared_array(arr));