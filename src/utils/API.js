import axios from 'axios';

axios.defaults.baseURL = 'https://swapi.dev/api';

export default {
  getPeople: (pageNumber) => axios.get(`/people/?page=${pageNumber}`)
    .then(((response) => response.data)),
  searchPeople: (query) => axios.get(`/people/?search=${query}`)
    .then(((response) => response.data)),
  getStarships: pageNumber => axios.get(`/starships/?page=${pageNumber}`)
    .then(((response) => response.data)),
  searchStarships: (query) => axios.get(`/starships/?search=${query}`)
    .then(((response) => response.data)),
};
