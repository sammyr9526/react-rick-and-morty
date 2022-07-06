function SearchCharacter({ setSearch }) {
  return (
    <div className="searchbar input-group">
      <input
        className="search form-control  "
        type="text"
        name="search"
        placeholder="search a character"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-primary ">search</button>
    </div>
  );
}

export default SearchCharacter;
