// 4

// Найти положение второго пробела
let string = 'string test example';
let position_space = 0;
let i = 0;

for (let index = 0; index < string.length; index++) {
    if ( string[index] == ' '){
        i++
        if (i === 2) {
            position_space = index;
            console.log('Второй пробел находится на ' + position_space + ' индексе');
        }
    }
} 
if (position_space === 0) {
    console.log('Не найден индекс второго положения пробела!')
}    




