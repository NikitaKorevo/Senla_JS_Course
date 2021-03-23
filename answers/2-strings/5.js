// 5 

//Получить строку со 2-ого символа длинной 6 букв
let string = 'string test example';
console.log(string);

string = string.replace(/\s/g, '');
console.log(string);

console.log(string.substring(1,6));

//удалить пробелы с помощью replace и потом получить строку с 2 по 6 символ;