function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key]; // создание копии обьекта
    }
    return objCopy;   // возвращение значений objCopy из функции
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);  // клонитуем обьект

newNumbers.a = 10;

console.log(numbers);
console.log(newNumbers);




const add = {
    d: 17,
    e: 20
};

//console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add); // делаем поверхносную копию обьекта add

clone.d = 20;  // изменяем свойство d

console.log(add);   // проверяем что внутри
console.log(clone);

// создание копии массива
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // копируем методом slice

newArray[1] = 'qweqweqwe';
console.log(newArray);
console.log(oldArray);

// создание копии массива методом разворота
const video = ['youtube', 'video', 'rutube'],
        blogs = ['wordpress', 'livejornal', 'blogger'],
        internet = [...video, ...blogs, 'vk', 'facebook'];

        console.log(internet);

// третий способ создания поверхносной копии обьектов

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);  //передаем знач num в log

// четвертый способ

const array = ["a", "b"];

const newaArray = [...array];
console.log(array);
console.log(newaArray);

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
