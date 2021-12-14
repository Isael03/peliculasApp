import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '2f23dfdad747836a2083aa1f806b0cde',
    language: 'es-ES',
  },
});

export default movieDB;
