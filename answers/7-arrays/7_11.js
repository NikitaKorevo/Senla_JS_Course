// 11 Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы и на их место вставить “три” и “четыре” соответственно.

let arr = [1, 2, 3, 4, 5];
arr.splice(1,2, '3', '4');
console.log(arr);