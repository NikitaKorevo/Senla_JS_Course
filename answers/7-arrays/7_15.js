/* 15 Написать функцию, которая принимает массив услуг и два числа, представляющих собой время исполнения услуг, 
а также возвращает все услуги, находящиеся в диапазоне времени исполнения и отсортированные от меньшего времени
исполнения к большему. const services = [ {service: "service1", executionTime: 56}, {service: "service2", executionTime: 97}, 
{service: "service3", executionTime: 23}, {service: "service4", executionTime: 65}, {service: "service5", executionTime: 2}, 
{service: "service6", executionTime: 73}, {service: "service7", executionTime: 82}, {service: "service8", executionTime: 19}, 
{service: "service9", executionTime: 33}, {service: "service10", executionTime: 42}, ]
Например, filterServices(services, 20, 60). */

const services = [
    {service: "service1", executionTime: 56},
    {service: "service2", executionTime: 97},
    {service: "service3", executionTime: 23},
    {service: "service4", executionTime: 65},
    {service: "service5", executionTime: 2},
    {service: "service6", executionTime: 73},
    {service: "service7", executionTime: 82},
    {service: "service8", executionTime: 19},
    {service: "service9", executionTime: 33},
    {service: "service10", executionTime: 42},
]
//console.log(services);

for (let j = 0; j < services.length; j++) {
    for (let index = 0; index < services.length - 1; index++) {
        if (services[index].executionTime > services[index + 1].executionTime) {
            [services[index], services[index + 1]] = [services[index + 1], services[index]];
        }
    } 
}
//console.log(services);

function filterServices(arr, min, max) {
    for (let index = arr.length - 1; index >= 0; index--) {
       if( arr[index].executionTime < min || arr[index].executionTime > max) {
           arr.splice(index, 1);
       }
    
    }
    console.log(arr);
}

filterServices(services, 20, 60);