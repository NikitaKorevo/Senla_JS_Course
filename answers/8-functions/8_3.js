// 3 Создать функцию, которая принимает строку и возвращает перевернутую строку ('test') = 'tset'.

let string = 'test';
console.log(string);

function reverse (str) {
    let arr_string = str.split('');
    arr_string.reverse();
    console.log(arr_string.join(''));
}

reverse (string);