//5 спользуя конструктор switch, записать следующее условие:
/* if(a == 'котик') {
    console.log('котик');
  } else if(a == 'собака') {
    console.log('собака');
  } else if(a == 'хомячок') {
    console.log('хомячок');
  } else {
    console.log('неизвестное науке животное');
  } */

let a = 'котик';

switch (a) {
    case 'котик':
        console.log('котик');
        break;
  
    case 'собака':
        console.log('собака');
        break;

    case 'хомячок':
        console.log('хомячок');
        break;

    default:
        console.log('неизвестное науке животное');
        break;
  }