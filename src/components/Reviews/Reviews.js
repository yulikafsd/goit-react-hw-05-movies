import axios from 'axios';
import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API_END, API_URL, API_KEY } from 'service/ApiService';
// import noPoster from '../../images/NoPoster.jpg';
import { List, Item, Subtitle, Text, Message } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchReviewsById() {
      const url = `${API_URL}${API_END.details}${movieId}/reviews?api_key=${API_KEY}`;

      try {
        const response = await axios.get(url, { signal: controller.signal });
        setReviews([...response.data.results]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchReviewsById();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      {!reviews && <Loader />}
      {reviews && !reviews.length > 0 && (
        <Message>
          Sorry, there are no available reviews for this movie...
        </Message>
      )}
      {reviews && reviews.length > 0 && (
        <List>
          {reviews.map(({ id, author, content, created_at }) => {
            const localDate = new Date(created_at).toLocaleString();
            return (
              <Item key={id}>
                <Subtitle>{author}</Subtitle>
                <Text>{localDate}</Text>
                <Text>{content}</Text>
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
};

export default Reviews;
