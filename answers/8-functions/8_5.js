let string = 'hello';
let string_unicode = '';

// 5 Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, 
// где каждый символ разделен пробелом и заменён на значение символа из юникода. ((hello) => "104 101 108 108 111")

function transform_string_unicode (string) {

    for (let index = 0; index < string.length; index++) {
        string_unicode = string_unicode + string.charCodeAt(index) + ' ';
    }
    console.log(string_unicode);
}

transform_string_unicode(string);