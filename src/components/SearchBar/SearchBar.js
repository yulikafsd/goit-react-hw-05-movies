export const SearchBar = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="input"
        value={value}
        onChange={e => onChange(e.target.value)}
        autoComplete="off"
      />
    </form>
  );
};
