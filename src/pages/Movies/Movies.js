import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { SearchBar, FilteredMovies, Loader } from 'components';
import { API_END, API_URL, API_KEY } from 'service/ApiService';
import {
  notifyError,
  notifyEmptyString,
  notifyNoResults,
} from 'service/Notifications';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [isNewVisit, setIsNewVisit] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMoviesByQuery() {
      const url = `${API_URL}${API_END.search}?api_key=${API_KEY}&query=${query}`;

      try {
        setIsLoading(true);
        const response = await axios.get(url, { signal: controller.signal });
        setMovies([...response.data.results]);

        if (response.data.results.length === 0) {
          notifyNoResults();
        }
      } catch (error) {
        console.log(error);
        notifyError();
      } finally {
        setIsLoading(false);
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
    if (isNewVisit) {
      setQuery(filter);
      setIsNewVisit(false);
    }
  }, [filter, isNewVisit]);

  function changeFilter(value) {
    setSearchParams(value !== '' ? { filter: value.toLowerCase() } : {});
  }

  function changeQuery(e) {
    e.preventDefault();
    const trimmedFilter = filter.trim();

    if (trimmedFilter !== '') {
      setQuery(trimmedFilter);
      setSearchParams({ filter: trimmedFilter.toLowerCase() });
    } else {
      notifyEmptyString();
    }
  }

  return (
    <>
      <SearchBar
        value={filter}
        onChange={changeFilter}
        onSubmit={changeQuery}
      />
      {isLoading && movies.length === 0 && <Loader />}
      {movies.length > 0 && <FilteredMovies movies={movies} />}
    </>
  );
};

export default Movies;
