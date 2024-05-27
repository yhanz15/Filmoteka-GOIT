import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'add7393009d30185561651a8e7e3f1c4';

export async function getTrending(page = 1) {
    const url = `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US&page=${page}`;
    return await axios
        .get(url)
        .then(reponse => {
            return response.data;
        })
        .catch(error => console.log(error));
}

export async function getByKeyword(query, page) {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}`;
    return await axios
        .get(url)
        .then(response => {
            return response.data;
        })
        .catch(error => console.log(error));
}

export async function getInfoMovie(movie_id) {
    const url = `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
    return await axios
        .get(url)
        .then(response => {
            return response.data;
        })
        .catch(error => { });
}

export async function getVideos(movie_id) {
    const url = `${BASE_URL}/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`;
    return await axios
        .get(url)
        .then(response => {
            return response.data.results;
        })
        .catch(error => { });
}

export async function getArrayofMovies(array) {
    const arrayofMovies = array.map(async movie_id => {
        return await axios
            .get(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
            .then(response => {
                return response.data;
            })
            .catch(error => console.log(error));
    });

    const resultData = await Promise.all(arrayofMovies);
    return resultData;
}