import { BASE_URL, API_KEY } from '../constants/moviedb';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from '../constants/refs';
import axios from 'axios';
import { getGenre, changeGenreIDtoName } from './genreIdToName.js';

export const moviedbApi = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY },
});

// main submit function
export async function onFormSubmit(event) {
  event.preventDefault();
  const query = refs.searchInput.value;
  if (query === '') {
    Notify.failure('Please input a value');
    return;
  }
  const listOfMovies = await getMovies(query);
  if (!listOfMovies?.results?.length) {
    refs.errorMessage.classList.add('header__error-visible');
    setTimeout(function () {
      refs.errorMessage.classList.remove('header__error-visible');
    }, 5000);
    return;
  }

  // to remove previously searched movies
  refs.mainList.innerHTML = '';

  // change genreID to genreName
  await changeGenreIDtoName(listOfMovies.results);

  // adding markup for new movies
  listOfMovies.results.forEach(movie => {
    const markup = `<li class='film-card film-list__item' data-action='${movie.id}' data-modal-open>

    <img
      class='film-card__img'
      src='https://image.tmdb.org/t/p/w500${movie.poster_path}'
      alt='${movie.original_title} '
      width='100%'
      data-id='${movie.imdb_id}'
      onerror="this.onerror=null;this.src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-';"
    />

    <div class='film-card__wrapper'>
      <h2 class='film-card__title'>${movie.title} ${name}</h2>
      <p class='film-card__discription'>
        <span class='film-card__genres'>${movie.genre_ids}
        </span>
        |
        <span class='film-card__release-date'> ${movie.release_date} </span>
        <span class='card__vote_average'> ${movie.vote_average} </span>
      </p>
    </div>

  </li>`;
    refs.mainList.insertAdjacentHTML('beforeend', markup);
  });
}

// to search for movies
export async function getMovies(data, page = 1) {
  try {
    const res = await axios.get(
      `${BASE_URL}search/movie?query=${data}&api_key=${API_KEY}&page=${page}`
    );
    return res.data;
  } catch {
    console.error();
  }
}
