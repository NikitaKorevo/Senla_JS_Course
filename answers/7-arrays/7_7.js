// 7 Создать функцию, которая принимает 3 аргумента: любой произвольный массив 
// начальный номер элемента в массиве 
// конечный номер

arr1 = [1, 2, 3, 4, 5]
arr2 = [6, 7, 8, 9, 10]
arr3 = [11, 12, 13, 14, 15]

function take(arr1, arr2, arr3) {
arr1 = arr1;
arr2 = arr2[0];
arr3 = arr3[arr3.length - 1];
return console.log(arr1 + '\n' + arr2 + '\n' + arr3);
}

take(arr1, arr2, arr3);