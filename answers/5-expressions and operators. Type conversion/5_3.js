// 3 Если переменная равна “маленький”, присвоить ей значение “большой”, иначе “маленький”. 
// Сделать тоже самое, используя тернарный оператор.

let string = 'маленький';

if ( string == 'маленький'){
    string = 'большой';
} else {
    string = 'маленький';
}

console.log(string);


let string2 = 'маленький';
( string2 == 'маленький') ? string2 = 'большой': string2 = 'маленький';
console.log(string2);