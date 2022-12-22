import axios from 'axios';

const API_KEY = '50f1c38da446101780a79b9df9405e4f';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const params = 'trending/movie/day';
  const responce = await axios.get(`${BASE_URL}${params}?api_key=${API_KEY}`);
  return responce.data.result;
};
