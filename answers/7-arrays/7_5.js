// 5 Создать функцию, которая упорядочит буквы в строке "екважбигёзд" в алфавитном порядке и возвратит строку в обратном порядке ("кизжёедгвба").

let string_alphabet = 'екважбигёзд'

function sort_reverse(string) {
    let arr = string.split('');
    arr.sort();
    arr = arr.slice (0,-1); // удаление ё
    let index_e = arr.indexOf('е');
    arr.splice(index_e + 1, 0, 'ё')
    arr.reverse();
    return string = arr.join('');
}

console.log(sort_reverse(string_alphabet));