//"use strict";  // используем современный режим скрипта

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(options.name);

for (let key in options) {
    if (typeof(options[key]) === 'object') {
            for (let i in options[key]) {
                console.log(`свойство ${i} имеет значение ${options[key][i]}`);
            } 
    } else {
            console.log(`свойство ${key} имеет значение ${options[key]}`);  
        }
}