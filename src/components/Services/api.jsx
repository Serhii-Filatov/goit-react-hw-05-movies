import axios from 'axios';
// Мой клю
const API_KEY = '3df770cbcce42751a371232778d32a4f';
const BASE_URL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}trending/all/day`);
  return data;
};

export const getMovieById = async id => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}`);
  return data;
};

export const getMovieCredits = async id => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}/reviews`);
  return data;
};

export const getMoviesbySearchQuery = async query => {
  const { data } = await axios.get(`${BASE_URL}search/movie?query=${query}`);
  return data;
};
