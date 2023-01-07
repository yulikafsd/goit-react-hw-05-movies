export const API_URL = 'https://api.themoviedb.org/3';

export const API_KEY = '9ce583f6a8e715ddcf70f43e50ddfd1c';

export const API_END = {
  trending: '/trending/movie/week',
  search: '/search/movie',
  details: '/movie/',
};

// async function fetchMovies() {
//   const url = `${API_URL}${type}?api_key=${API_KEY}`;

//   try {
//     const API_SEARCH_PARAMS = newQuery ? { query: newQuery } : {};
//     const response = await axios.get(url, { params: API_SEARCH_PARAMS });
//     console.log(response.data.results);
//     console.log(typeof response.data.results);
//     return response.data.results;
//   } catch (error) {
//     console.log(error);
//   }
// }
