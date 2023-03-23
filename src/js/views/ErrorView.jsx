import React from "react";
import { Link } from "react-router-dom";
export const ErrorView = () => {
  return (
    <>
      <p>404 Pagina no encontrada</p>
      <Link to="/">Regresa a home</Link>
    </>
  );
};
