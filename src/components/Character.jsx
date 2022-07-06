function Character({ characters }) {
  if (!characters) return "  Not Characters founded :/";
  else
    return (
      <>
        {characters.map((char) => {
          return (
            <div className="col-md-4" key={char.id}>
              <div className="text-center  p-5">
                <h2>{char.name}</h2>
                <img
                  src={char.image}
                  className="img-fluid rounded-pill"
                  alt={char.image}
                />
              </div>
            </div>
          );
        })}
      </>
    );
}
export default Character;
