"use strict";  // используем современный режим скрипта

// Задание на урок:

// 1) Первую часть задания повторить по уроку

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms, //сюда передается ответ на первый вопрос
    movies: {},  // в это свойство поместить пустой объект
    actors: {},  //тоже поместить пустой объект
    genres: [], //сюда поместить пустой массив
    privat: false  //в это свойство поместить boolean(логическое) значение false
};
console.log(personalMovieDB.count);





function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ''),
            b = prompt("На сколько оцените его?", '');
        if (a != null && b != null && a !='' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
        personalMovieDB.movies[a] = b;
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
}

detectPersonalLevel();

console.log(personalMovieDB);



/* 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы */

function showMyDB (hidden) {
    if (!hidden) {
    console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

/* 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres */

function writeYourGenres() {
    for (let i = 0; i <= 2; i++) {
    let d = prompt("Ваш любимый жанр под номером $(i)", '');
    personalMovieDB.genres[i] = d;
    }

}
writeYourGenres();


//P.S. Функции вызывать не обязательно*/