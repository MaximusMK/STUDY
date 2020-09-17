'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмтрели', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмтрели', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последний просмотренный фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов.');
        } else { if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log('Вы классичечкий зритель.');
        } else { if (personalMovieDB.count >= 30) {
                    console.log('Вы киноман.');
                } else {
                    console.log('Произошла ошибка.');
                }
            }
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log('Данные');
            console.log(personalMovieDB);
    
        }else{
            console.log('Данные скрыты');
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
        console.log(personalMovieDB.privat);
    },

    writeYourGenre: function() { //не переписал другим способом ( в конце урока 24)
        for (let i = 1; i <= 3; i++) { 
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if ( genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }            
        }     
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
        
    },    
};
