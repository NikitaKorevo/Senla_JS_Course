// 1 Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: 
// multiplay(1,2,3) = 6. Если нет ни одного аргумента вернуть ноль.

function multiply () {
    let multiply = arguments[0];
    for (let index = 1; index < arguments.length; index++) {

        multiply = multiply * arguments[index];
        
    }
    if (arguments[0] == undefined) {
        multiply = 0;
        console.log(multiply);
        console.log('Нет чисел для произведения!')
    } else {console.log('Произведение чисел: ' + multiply);}
}
multiply();
multiply(1, 2, 3);
