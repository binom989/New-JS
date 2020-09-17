"use strict";  // используем современный режим скрипта

let number = 5;
const leftBorderWidth = 1;
number = 10;
console.log(number);

const person = "Alex";


const obj = {
    name: "John",
    age: 25,
    isMarried: false   //женат
};
console.log(obj.name);
console.log(obj["name"]);

//массив
let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);

// alert('Hello!');

// const result = confirm("Вы здесь?");
// console.log(result);

//const answer = +prompt("Вам есть 18?", "18"); // если поставить + то получим числовое значение
//console.log(typeof(answer));

//const answers = [];  // создали массив
//answers[0] = prompt('Как Ваше имя?', '');  // присвоение первого элемента
//answers[1] = prompt('Как Ваше фамилия?', '');
//answers[2] = prompt('Сколько Вам лет?', '');
//document.write(answers);  // вывод массива


// Интерполяция
const category = 'toys';
console.log(`https://someurl.com/${category}/5`);
alert(`https://someurl.com/${category}/5`);



const user = "Ivan";
alert(`Привет, ${user}`);