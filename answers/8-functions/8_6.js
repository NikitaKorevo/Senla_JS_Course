// 6 Написать функцию-рекурсию, которая выведет каждый символ строки в конcоль ('test') => 't' 'e' 's' 't'

string = 'test';

function output_letter (str) {
    if (str.length == 0) {
        return 0;
    } else {
        console.log(str[0]);
        output_letter(str = str.slice(0, 0)+ str.slice(1, str.length));
    }
}

output_letter (string);