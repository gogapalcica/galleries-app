export const GalleriesFilter = ({
  filter,
  handleSearch,
  handleSearchChange
}) => {
  return (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        name="filter"
        value={filter}
        onChange={handleSearchChange}
      />
      <button type="submit">Filter</button>
    </form>
  );
};
