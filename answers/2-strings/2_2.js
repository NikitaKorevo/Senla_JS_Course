// 2

// Сделать первую и последнюю буквы в верхнем регистре
let string = 'string test example';

string = string[0].toUpperCase() + string.slice(1);
string = string.slice(0, -1) + string[string.length-1].toUpperCase();
console.log(string);