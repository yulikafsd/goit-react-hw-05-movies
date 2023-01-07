import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import { API_END, API_KEY, API_URL } from 'service/ApiService';
import {
  Container,
  Poster,
  Details,
  Title,
  Votes,
  BackLink,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  // const [searchParams] = useSearchParams();
  const location = useLocation();
  const movieId = Number(location.pathname.slice(8));

  const backLink = useMemo(() => {
    return location.state?.from ?? '/movies';
  }, [location]);

  useEffect(() => {
    async function fetchMovieById(movieId) {
      const url = `${API_URL}${API_END.details}${movieId}?api_key=${API_KEY}`;

      try {
        const response = await axios.get(url);
        setMovie({ ...response.data });
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieById(movieId);
  }, [movieId]);

  // const params = useMemo(
  //   () => Object.fromEntries([...searchParams]),
  //   [searchParams]
  // );
  // console.log(params);

  if (!movie) {
    return;
  }

  const { title, poster_path, vote_average, release_date, overview } = movie;

  const vote = Number(vote_average).toFixed(2);

  return (
    <main>
      <BackLink to={backLink}>&#8656; Back</BackLink>
      {movie && (
        <Container>
          <Poster
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            width="300"
          />
          <Details>
            <Title>{title}</Title>
            <p>
              <b>Released:</b> {release_date}
            </p>
            <p>
              <b>Average vote:</b> <Votes>{vote}</Votes>
            </p>
            <p>{overview}</p>
          </Details>
        </Container>
      )}
    </main>
  );
};
