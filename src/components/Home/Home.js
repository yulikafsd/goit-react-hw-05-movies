import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from 'components/Loader/Loader';
import { API_URL, API_KEY, API_END } from 'service/ApiService';
import { Heading, List, Item, Poster, Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState('true');
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchTrendMovies() {
      try {
        const url = `${API_URL}${API_END.trending}?api_key=${API_KEY}&page=${page}`;
        const response = await axios.get(url, { signal: controller.signal });
        setMovies(movies => [...movies, ...response.data.results]);

        if (page === 1) {
          setLastPage(response.data.total_pages);
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    if (page === 0) {
      setPage(prevPage => prevPage + 1);
      return;
    }

    fetchTrendMovies();
    return () => {
      controller.abort();
    };
  }, [page]);

  function increasePage() {
    if (page === lastPage) {
      setHasMore(false);
      return;
    }

    setPage(prevPage => prevPage + 1);
  }

  return (
    <main>
      <Heading>Movies of the Week</Heading>
      <InfiniteScroll
        dataLength={movies.length} //This is important field to render the next data
        next={increasePage}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <List>
          {movies.length > 0 &&
            movies.map(({ id, title, poster_path, original_title }) => {
              return (
                <Link key={id} to={`movies/${id}`} state={{ from: location }}>
                  <Item>
                    <Poster
                      src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                      alt={original_title}
                      width="200"
                      height="300"
                    />
                    <Title>{title}</Title>
                  </Item>
                </Link>
              );
            })}
        </List>
      </InfiniteScroll>
    </main>
  );
};

export default Home;
