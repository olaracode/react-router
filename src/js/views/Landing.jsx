import React from "react";
import { Link } from "react-router-dom";
export const LandingPage = () => {
  return (
    <p>
      <img src="https://picsum.photos/200/300" alt="" />
      Hola soy el landing page
      <Link to="/personajes">Ver acerca de nosotros</Link>
    </p>
  );
};
