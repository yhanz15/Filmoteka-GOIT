export const API_KEY = '3ea9e05bf615fb8d96f57aa463f7f68d';
export const BASE_URL = 'https://api.themoviedb.org/3/';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './refs';
import axios from 'axios';

export const moviedbApi = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY },
});

// export async function renderSearchListSetup(q, page = 1) {
//   search.pagination = false;

//   renderMovieList(page);
// }

// export async function onSearchFormSubmit(e) {
//   e.preventDefault();
//   const q = refs.searchInput.value;
//   if (!q) {
//     Notify.failure('Please input a keyword or movie');
//     return;
//   }

//   try {
//     page = 1;
//     const res = await axios.get(
//       `${BASE_URL}search/movie?query=${q}&api_key=${API_KEY}&page=${page}`
//     );
//     return res.data;
//     console.log('error');
//   } catch (error) {
//     Notify.failure('Something went wrong');

//     const listOfMovies = res.data;
//     console.log(listOfMovies);
//     if (listOfMovies.result.length === 0) {
//       Notify.warning('Sorry, there is no result. Please try another keyword');

//       setTimeout(function () {
//         refs.errorMessage.classList.remove('header__error-visible');
//       }, 5000);
//     }
//     console.log('AAAAA');
//   }
//   console.error(error);
//   return;
//   //   } finally {
//   //     setTimeout(() => {
//   //       loader();
//   //     }, 100);
// }

// export async function renderMovieList(q, page = 1) {
//   const listOfMovies = await searchMovies(q);
//   // if (!listOfMovies?.results?.length) {
//   //     refs.errorMessage.classList.add('header__error-visible');

//   //     Notify.warning('Sorry, there is no result. Please try another keyword');

//   //     setTimeout(function () {
//   //         refs.errorMessage.classList.remove('header__error-visible');
//   //     }, 5000);
//   // }
// }
