// 3 Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"

let string = 'Просветление наступит через: '; 
let number = 10;

for (let index = number; index > 0; index--) {

    if (index == 1) {
        string = string + index;
        break; 
    }
    string = string + index + ', ';
}

console.log(string);