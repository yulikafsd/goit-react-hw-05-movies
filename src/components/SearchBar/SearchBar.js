import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { Form, Input, Button, Label } from './SearchBar.styled';

export const SearchBar = ({ value, onChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Label>
        <Input
          type="text"
          name="input"
          value={value}
          onChange={e => onChange(e.target.value)}
          autoComplete="off"
          placeholder="Please, enter a query"
        />
        <Button type="submit">
          <BsSearch color="#ffffff" />
        </Button>
      </Label>
    </Form>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
