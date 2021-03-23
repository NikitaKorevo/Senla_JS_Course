// 3 

// Найти положение слова string в строке
let string = 'string test example';
let what_search = 'string';
let sum_strings = string.split(' ').length;
let position_what_search;
let arr = new Array ();
arr = (string.split(' '));

for (let index = 0; index < sum_strings; index++) {
    if ('string' == arr[index]) {
        position_what_search = index + 1;
        break;
    }
}

console.log("Положение слова " + what_search + " " + position_what_search + " из " + sum_strings);