import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { API_URL, API_KEY, API_END } from 'service/ApiService';
import { notifyError, notifyEndOfPage } from 'service/Notifications';
import { Loader } from 'components';
import noPoster from '../../images/NoPoster.jpg';
import { Container, Heading, List, Item, Poster, Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchTrendMovies() {
      if (page === 0) {
        setPage(1);
        return;
      }

      try {
        setIsLoading(true);

        const url = `${API_URL}${API_END.trending}?api_key=${API_KEY}&page=${page}`;
        const response = await axios.get(url, { signal: controller.signal });
        setMovies(movies => [...movies, ...response.data.results]);

        if (page === 1) {
          setLastPage(response.data.total_pages);
        }
      } catch (error) {
        console.log(error.message);
        notifyError();
      } finally {
        setIsLoading(false);
      }
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
    <Container>
      <Heading>Movies of the Day</Heading>
      {isLoading && movies.length === 0 && <Loader />}
      {movies.length > 0 && (
        <InfiniteScroll
          dataLength={movies.length} //This is important field to render the next data
          next={increasePage}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={notifyEndOfPage}
        >
          <List>
            {movies.map(({ id, title, poster_path, original_title }) => {
              const imgSrc = poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : noPoster;
              return (
                <Link key={id} to={`movies/${id}`} state={{ from: location }}>
                  <Item>
                    <Poster
                      src={imgSrc}
                      alt={original_title}
                      width="300"
                      height="450"
                    />
                    <Title>{title}</Title>
                  </Item>
                </Link>
              );
            })}
          </List>
        </InfiniteScroll>
      )}
    </Container>
  );
};

export default Home;
