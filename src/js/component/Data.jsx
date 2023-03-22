import React, { useEffect } from "react";

const baseUrl = "https://rickandmortyapi.com/api/character";

const Data = () => {
  const [characters, setCharacters] = React.useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(baseUrl);
      const data = await response.json();
      console.log(data);
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
};

export default Data;
