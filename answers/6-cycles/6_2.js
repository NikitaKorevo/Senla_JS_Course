// 6 Вычислить факториал числа 9 (факториал числа - это произведение всех натуральных чисел от 1 до n включительно. 
// например, 2! = 21 или 6! = 654321) .

let number = 6;
let string = number + '! = ';

for (let index = number; index > 0; index--) {
    string = string + index;
    
}

console.log(string);