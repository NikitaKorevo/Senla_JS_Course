// 1 В строке "Я стану крутым программистом" сделать первую букву каждого слова в верхнем регистре"

let string = 'Я стану крутым программистом';

for (let index = 0; index < string.length; index++) {
    if(string[index] == ' ') {
        string = string.slice(0, index + 1) + string[index + 1].toUpperCase() + string.slice( index + 2);
       }
}
console.log(string);