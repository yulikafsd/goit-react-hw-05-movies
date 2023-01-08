import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { SearchBar, FilteredMovies } from 'components';
import { API_END, API_URL, API_KEY } from 'service/ApiService';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFirstVisit, setisFirstVisit] = useState(true);
  const filter = searchParams.get('filter') ?? '';

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMoviesByQuery() {
      const url = `${API_URL}${API_END.search}?api_key=${API_KEY}&query=${query}`;

      try {
        const response = await axios.get(url, { signal: controller.signal });
        setMovies([...response.data.results]);
      } catch (error) {
        console.log(error);
      }

      return () => {
        controller.abort();
      };
    }

    if (query !== '') {
      fetchMoviesByQuery();
    }
  }, [query]);

  useEffect(() => {
    console.log('First visit: ' + isFirstVisit);
    if (isFirstVisit) {
      setQuery(filter);
      setisFirstVisit(false);
    }
  }, [filter, isFirstVisit]);

  function changeFilter(value) {
    setSearchParams(value !== '' ? { filter: value.toLowerCase() } : {});
  }

  function changeQuery(e) {
    e.preventDefault();
    const trimmedFilter = filter.trim();
    console.log(trimmedFilter);

    if (trimmedFilter !== '') {
      setQuery(trimmedFilter);
      setSearchParams({ filter: trimmedFilter.toLowerCase() });
    } else {
      console.log(`This query is an empty string`);
    }
  }

  return (
    <main>
      <SearchBar
        value={filter}
        onChange={changeFilter}
        onSubmit={changeQuery}
      />
      {movies.length > 0 && <FilteredMovies movies={movies} />}
    </main>
  );
};

export default Movies;
