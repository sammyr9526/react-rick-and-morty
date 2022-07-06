import { useState, useEffect } from "react";
import Character from "./Character";
import SearchCharacter from "./SearchCharacter";

function NavePage(props) {
  return (
    <div>
      <header>
        {props.page < 2 ? (
          ""
        ) : (
          <button
            className="button1 btn btn-primary btn-sm "
            onClick={() => props.setPage(props.page - 1)}
          >
            Back
          </button>
        )}
        <button
          className="button2 btn btn-primary btn-sm "
          onClick={() => props.setPage(props.page + 1)}
        >
          Next
        </button>
      </header>
    </div>
  );
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${search}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
      console.log(data.results);
    };
    fetchData();
  }, [url]);

  return (
    <div className="container">
      <p>Page {page}</p>
      <NavePage page={page} setPage={setPage} />
      <SearchCharacter setSearch={setSearch} />
      {loading ? (
        <h1>...Loading</h1>
      ) : (
        <div className="row">
          <Character characters={characters} />
        </div>
      )}
      <NavePage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
