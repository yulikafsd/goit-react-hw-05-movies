import axios from 'axios';
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_END, API_URL, API_KEY } from 'service/ApiService';
import noProfileFoto from '../../images/NoProfileFoto.jpg';
import { List, Item, Poster, Subtitle, Text, Span } from './Cast.styled';

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
    <>
      {cast ? (
        <List>
          {cast.map(({ cast_id, name, character, profile_path }) => {
            const imgSrc = profile_path
              ? `https://image.tmdb.org/t/p/w300${profile_path}`
              : noProfileFoto;
            return (
              <Item key={cast_id}>
                <Poster src={imgSrc} alt={name} width="300" height="450" />
                <Subtitle>{name}</Subtitle>
                <Text>
                  as <Span>{character}</Span>
                </Text>
              </Item>
            );
          })}
        </List>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Cast;
