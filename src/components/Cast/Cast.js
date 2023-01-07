import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_END, API_URL, API_KEY } from 'service/ApiService';
import noPoster from '../../images/NoPoster.jpg';
import { Container, List, Item, Poster, Subtitle, Span } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchCastById() {
      const url = `${API_URL}${API_END.details}${movieId}/credits?api_key=${API_KEY}`;

      try {
        const response = await axios.get(url, { signal: controller.signal });
        setCast([...response.data.cast]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCastById();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <Container>
      {cast && (
        <List>
          {cast.map(({ cast_id, name, character, profile_path }) => {
            const imgSrc = profile_path
              ? `https://image.tmdb.org/t/p/w200${profile_path}`
              : noPoster;
            return (
              <Item key={cast_id}>
                <Poster src={imgSrc} alt={name} width="200" height="300" />
                <Subtitle>
                  {name} as <Span>{character}</Span>
                </Subtitle>
              </Item>
            );
          })}
        </List>
      )}
    </Container>
  );
};

export default Cast;
