import axios from 'axios';

const API_KEY = '50f1c38da446101780a79b9df9405e4f';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const params = 'trending/movie/day';
  const responce = await axios.get(`${BASE_URL}${params}?api_key=${API_KEY}`);
  return responce.data.results;
};

export const getMovieDetails = async id => {
  const params = `movie/${id}`;
  const responce = await axios.get(`${BASE_URL}${params}?api_key=${API_KEY}`);
  return responce.data;
};

export const getMovieCredits = async id => {
  const params = `movie/${id}/credits`;
  const responce = await axios.get(`${BASE_URL}${params}?api_key=${API_KEY}`);
  return responce.data;
};

export const getMovieReviews = async id => {
  const params = `movie/${id}/reviews`;
  const responce = await axios.get(`${BASE_URL}${params}?api_key=${API_KEY}`);
  return responce.data;
};

export const getSearchMovie = async query => {
  const params = `search/movie`;
  const responce = await axios.get(
    `${BASE_URL}${params}?api_key=${API_KEY}&query=${query}`
  );
  return responce.data.results;
};
