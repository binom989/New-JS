//"use strict";  // используем современный режим скрипта

//const arr = [1, 2, 3, 6, 8];
//    //arr[99] = 0;
//    //console.log(arr.length);  // подсчет кол элементов массива
//    //console.log(arr);
//
//    arr.forEach(function(item, i, arr) {
//        console.log(`${i}: ${item} внутри массива ${arr}`);
//    }); 



//arr.pop();  // удаление последнего элемента массива
//arr.push(10); // добавление элемента в конец массива
//console.log(arr);

//for (let i = 0; i < arr.length; i++) {  //перебор массива со счетчиком
//    console.log(arr[i]);
//}

//for (let value of arr) {  //вывод массива без перебора
//    console.log(value);
//}

const str = prompt("", "");  // создание массива на основании ввода строки
const products = str.split(", ");
products.sort();    // сортировка массива строчный метод
console.log(products);
console.log(products.join('; '));  // вывод массива методом join



const arr = [2, 13, 26, 8, 10];  // сортировка числового массива
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

