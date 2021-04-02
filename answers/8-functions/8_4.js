// 4 Написать функцию, которая проверяет является ли слово палиндромом

let string = 'казак';

function is_palindrom (str) {
    let arr_string = str.split('');
    arr_string.reverse();
    arr_string = arr_string.join('');

    if (string === arr_string) {
        console.log('Слово ' + arr_string + ' является палиндромом')
    } else {
        console.log('Слово ' + arr_string + ' не является палиндромом')
    }
}

is_palindrom (string);