import axios from 'axios';
import { API_KEY, BASE_URL } from '../constants/moviedb';

export async function getGenre() {
  const movieRes = await axios.get(
    `${BASE_URL}genre/movie/list?api_key=${API_KEY}`
  );
  const movieGenres = movieRes.data.genres;
  const tvRes = await axios.get(
    `${BASE_URL}genre/movie/list?api_key=${API_KEY}`
  );
  const tvGenres = tvRes.data.genres;
  genres = movieGenres.concat(tvGenres);
  return genres;
}

export async function changeGenreIDtoName(movies) {
  const genreList = await getGenre();
  movies.forEach(element => {
    const array = element.genre_ids;
    if (!array) return 'Other';
    const newArr = array.map(elem => {
      if (genreList.find(x => x.id === elem)) {
        return genreList.find(x => x.id === elem).name;
      } else {
        return 'Other';
      }
    });

    element.genre_ids = newArr;
  });
}
