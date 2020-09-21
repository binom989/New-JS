"use strict";  // используем современный режим скрипта

if (4 == 9) {
    console.log('ok!');
} else {
    console.log('Ошибка');
}

const num = 50;
(num === 50) ? console.log('ok!') : console.log('Ошибка');

const num = 50;
switch (num) {
    case 49:
        console.log('Ошибка 1');
        break;
    case 100:
        console.log('Ошибка 2');
        break;
    case 50:
        console.log('Отлично!');
        break;
    default:
        console.log('по умолчанию');
        break;
}

let num = 50;
 while (num <= 55) {
     console.log(num);
     num++;
 }

 let num = 50;
 for (let i = 1; i < 8; i++) {
     console.log(num);
     num++;
 }

 for (let i = 1; i <10; i++) {
     if (i === 6) {
         // break;
         continue; // пропустим 6
     }
     console.log(i);
 }