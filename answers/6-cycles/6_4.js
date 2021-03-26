// 4 Найти и вывести в консоль все нечетные числа от 1 до 20 включительно.

let min_number = 1;
let max_number = 20;
let string = 'Все нечетные числа от ' + min_number + ' до '+ max_number + ' : ';

for (let index = min_number; index <= max_number; index++) {
    if ( index % 2 != 0) {
        string = string + index + ' ';
    }
    
}

console.log(string);