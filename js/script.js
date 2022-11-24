const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const film_1 = prompt("Один из последних просмотренных фильмов?", "");
const rating_1 = prompt("На сколько оцените его?", "");
personalMovieDB.movies[film_1] = rating_1;

const film_2 = prompt("Один из последних просмотренных фильмов?", "");
const rating_2 = prompt("На сколько оцените его?", "");
personalMovieDB.movies[film_2] = rating_2;

console.log(personalMovieDB.movies);
