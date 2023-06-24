function Character({ characters }) {
  if (!characters) return "  Not Characters founded :/";
  else
    return (
      <>
        {characters.map((char) => {
          return (
            <div className="col-md-4" key={char.id}>
              <div className="text-center h-100 p-5">
                <div className="name">
                  <h3>{char.name}</h3>
                </div>

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
