// 3 Создать такую функцию, которая принимала бы любое число, а возвращала массив, заполненный числами от 1 до n.

let array_numbers = [];

function stash_numbers(number) {
    array_numbers[array_numbers.length] = number;
    return console.log(array_numbers);
}

stash_numbers(123);
stash_numbers(412);
stash_numbers(1453);
stash_numbers(32);