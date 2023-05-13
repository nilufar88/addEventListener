'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
    const movieDB = {
        movies: [
            'Titanic',
            'Guardians of the Galaxy',
            'Thor',
            'Prometheus'
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
         poster = document.querySelector('.promo__bg'),
         genre = poster.querySelector(',promo__genre'),
         movieList = document.querySelector('.promo__interactive-list'),
         addForm = document.querySelector('form.add'),
         addInput = addForm.querySelector('.adding__input'),
         checkbox = addForm.querySelector('[type="checkbox"]');

addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newFilm = addInput.value;
    const favoutire = checkbox.checked;

    if (newFilm) {
        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
        
        createMovieList(movieDB.movies, movieList);
    }

    event.target.reset();
    
    });

const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
};

deleteAdv(adv);

const makeChanges = () => {
    genre.textContent = 'fantasy';

    poster.style.backgroundImage = 'url("img/bg.jpg")';
};

makeChanges();

const sortArr = (arr) => {
    arr.sort();
}

sortArr(movieDB.movies);

function createMovieList(films, parent) {
    parent.innerHTML = "";

     films.forEach((film, i) => {
     parent.innerHTML += `
     <li class="promo__interactive-item">${i + 1} ${film}
         <div class="delete"></div>
         </li>
          `;
     });
}

createMovieList(movieDB.movies, movieList);

});