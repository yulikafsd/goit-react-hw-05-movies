import axios from 'axios';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useMemo, useEffect, Suspense } from 'react';
import { API_END, API_KEY, API_URL } from 'service/ApiService';
import { Loader } from 'components';
import NoPoster from '../../images/NoPoster.jpg';
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
  Wrapper,
} from './MovieDetails.styled';
import { notifyError } from 'service/Notifications';

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
        if (error.message !== 'canceled') {
          notifyError();
        }
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

  const vote = vote_average ? Number(vote_average).toFixed(2) : 'not available';
  const imgSrc = poster_path
    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
    : NoPoster;

  return (
    <Container>
      <BackLink to={backLink}>&#8656; Back</BackLink>
      <Wrapper>
        <Poster src={imgSrc} width="300" />
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
      </Wrapper>
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
    </Container>
  );
};
