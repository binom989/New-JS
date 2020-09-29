"use strict";  // используем современный режим скрипта

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
}

showFirstMessage("Hello World!");
console.log(num);

function calc(a, b) {
    return (a + b);
}
console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;
    //
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

let fruit = "Some fruit";
console.log(fruit.indexOf);


const logg = "Hello world";
console.log(logg.slice(6, 11));   //получим с 6 по 11 буквы  метод slice
console.log(logg.slice(6));   //получим с 6 по последнюю буквы
console.log(logg.substring(6, 11)); //получим с 6 по 11 буквы  метод substring
console.log(logg.substr(6, 5)); //получим с 6  длинна 5 букв  метод substr

// работа с числами

const num1 = 12.2;
console.log(Math.round(num1));  //округление числа

const test = "12.2px";
console.log(parseInt(test)); //получение количества пикселей с помощью перевода в числовой тип
console.log(parseFloat(test)); //получение количества пикселей перевод в числовой тип с плав точкой

