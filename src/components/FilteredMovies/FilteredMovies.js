import { Link, useLocation } from 'react-router-dom';
import { List, Item, Poster, Title } from './FilteredMovies.styled';
import PropTypes from 'prop-types';
import noPoster from '../../images/NoPoster.jpg';

export const FilteredMovies = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title, poster_path, original_title }) => {
        const imgSrc = poster_path
          ? `https://image.tmdb.org/t/p/w300${poster_path}`
          : noPoster;
        return (
          <Link key={id} to={`${id}`} state={{ from: location }}>
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
  );
};

FilteredMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      original_title: PropTypes.string.isRequired,
    })
  ),
};
