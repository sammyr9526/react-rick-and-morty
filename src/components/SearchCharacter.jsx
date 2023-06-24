function SearchCharacter({ setSearch, setPage }) {
  return (
    <div className="searchbar input-group">
      <input
        className="search form-control  "
        type="text"
        name="search"
        placeholder="search a character"
        onChange={(e) => {
          setSearch(e.target.value), setPage(1);
        }}
      />
      <button className="btn btn-primary ">search</button>
    </div>
  );
}

export default SearchCharacter;
