import React, { useState, useEffect } from "react";
import Character from "./Character.jsx";
// Base URL
// useEffect -> //

const urlBase = "https://rickandmortyapi.com/api/character";

const Home = () => {
  const [characters, setCharacters] = useState();
  const [personajeActual, setPersonajeActual] = useState();
  // Buscar los personajes que estan en la base de datos
  const getCharacters = async () => {
    try {
      // fetch nos permite interactuar con la api, recibe el endpoint/url
      const response = await fetch(urlBase);
      if (response.ok === true) {
        const data = await response.json(); // Esperamos la respuesta y la traducimos a JSON(Javascript Object Notation)
        setCharacters(data.results);
      }
    } catch (error) {
      // error es el nombre que yo asigno al error
      alert("Hubo un error en el sistema");
    }
  };
  /**
   * El useEffect -> Se corre al cargar la pagina
   *
   */
  useEffect(() => {
    console.log("Hola desde el useEffect");
    getCharacters();
  }, []); // cuando activo cambie, el se ejecuta
  return (
    <div className="text-center">
      <p>Soy la lista de personajes</p>

      <div className="d-flex">
        <ul>
          {characters &&
            characters.map((character) => (
              <p
                key={character.id}
                onClick={() => setPersonajeActual(character.id)}
              >
                {character.name}
              </p>
            ))}
        </ul>
        <div>
          <Character personajeId={personajeActual} />
        </div>
      </div>
    </div>
  );
};

export default Home;
