// 3 С помощью Math.random:
// получить случайное число и округлить его до двух цифр после запятой

let random_number;
random_number = Math.random().toFixed(2);
console.log(random_number);

// получить случайное число от 0 до Х
let min_random_number = 0;
let max_random_number = 100; // X 
random_number = Math.random() * (max_random_number - min_random_number) + min_random_number;
console.log(random_number);