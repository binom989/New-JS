"use strict";

let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));


//
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};
const jonh = Object.create(soldier);  // создание обьекта от протатипа 

//const jonh = {
//    health: 100
//};

//  jonh.__proto__ = soldier;  старый метод

// Object.setPrototypeOf(jonh, soldier);  // установили протатип от солдата

console.log(jonh.armor);  
jonh.sayHello();  // установили протатип от солдата
