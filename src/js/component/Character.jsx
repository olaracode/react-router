import React, { useEffect, useState } from "react";

const personajeUrl = "https://rickandmortyapi.com/api/character/";
const Character = ({ personajeId }) => {
  const [personaje, setPersonaje] = useState();
  const getPersonajeData = async (id) => {
    try {
      const response = await fetch(personajeUrl + id);
      const data = await response.json();
      setPersonaje(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPersonajeData(personajeId);
  }, [personajeId]);
  return (
    <>
      {!personajeId ? (
        <p>Noy hay personaje</p>
      ) : (
        <div>
          Si hay un personaje{" "}
          {personaje && (
            <div>
              <p>{personaje.name}</p>
              <p>{personaje.gender}</p>
              <img src={personaje.image} alt="" />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Character;
