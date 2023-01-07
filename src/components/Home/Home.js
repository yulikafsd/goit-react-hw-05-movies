import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { API_URL, API_KEY, API_END } from 'service/ApiService';
import { Heading, List, Item, Poster, Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        const url = `${API_URL}${API_END.trending}?api_key=${API_KEY}`;
        const response = await axios.get(url);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchTrendMovies();
  }, []);

  return (
    <main>
      <Heading>Movies of the Week</Heading>
      <List>
        {movies.length > 0 &&
          movies.map(({ id, title, poster_path, original_title }) => {
            return (
              <Link key={id} to={`movies/${id}`} state={{ from: location }}>
                <Item>
                  <Poster
                    src={`https://image.tmdb.org/t/p/w300${poster_path}`}
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
    </main>
  );
};

export default Home;
