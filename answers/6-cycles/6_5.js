// 5 На основе строки "теперь я мастер циклов javascript" создать новую строку, 
//где первые буквы каждого слова будут в верхнем регистре и будут отсутствовать пробелы.

let string = 'теперь я мастер циклов javascript';
let string2 = string;

for (let index = 0; index < string2.length; index++) {
    if (index == 0) {
        string2 = string2[index].toUpperCase() + string2.slice( index + 1);
    }
    if(string2[index] == ' ') {
        string2 = string2.slice(0, index) + string2[index + 1].toUpperCase() + string2.slice( index + 2);
       }
}
console.log(string2);