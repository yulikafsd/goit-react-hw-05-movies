import axios from 'axios';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useMemo, useEffect, Suspense } from 'react';
import { API_END, API_KEY, API_URL } from 'service/ApiService';
import { Loader } from 'components';
import {
  Container,
  Poster,
  Details,
  Title,
  Subtitle,
  Text,
  Span,
  Votes,
  BackLink,
  StyledLink,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();

  const location = useLocation();
  const backLink = useMemo(() => {
    return location.state?.from ?? '/movies';
  }, [location]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovieById() {
      const url = `${API_URL}${API_END.details}${movieId}?api_key=${API_KEY}`;

      try {
        const response = await axios.get(url, { signal: controller.signal });
        setMovie({ ...response.data });
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovieById();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  if (!movie) {
    return;
  }

  const { title, poster_path, vote_average, release_date, overview, genres } =
    movie;

  const vote = Number(vote_average).toFixed(2);

  return (
    <>
      <BackLink to={backLink}>&#8656; Back</BackLink>
      <Container>
        <Poster
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          width="300"
        />
        <Details>
          <Title>{title}</Title>
          <Subtitle>
            Released: <Span>{release_date}</Span>
          </Subtitle>
          <Subtitle>
            Average vote: <Votes>{vote}</Votes>
          </Subtitle>
          <Subtitle>Overview:</Subtitle>
          <Text>{overview}</Text>
          <Subtitle>
            Genres:
            <Text>
              {genres
                .map(({ name }) => {
                  return name;
                })
                .join(', ')}
            </Text>
          </Subtitle>
        </Details>
      </Container>
      <Subtitle>Additional Information</Subtitle>
      <StyledLink to={`/movies/${movieId}/cast`} state={{ from: backLink }}>
        &#8594; Cast
      </StyledLink>
      <StyledLink to={`/movies/${movieId}/reviews`} state={{ from: backLink }}>
        &#8594; Reviews
      </StyledLink>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
