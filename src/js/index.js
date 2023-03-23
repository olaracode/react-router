//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { ErrorView } from "./views/ErrorView.jsx";
import { LandingPage } from "./views/Landing.jsx";
import About from "./views/About.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//render your react application

// Path, la direccion en el navegador("/")
ReactDOM.render(
  <>
    {/* El proveedor del router */}
    <BrowserRouter>
      {/* las rutas de mi aplicacion */}
      <Routes>
        {/* La ruta del landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* La ruta del ABOUT */}
        <Route path="/about" element={<About />} />

        {/* La vista 404 siempre va al final de las rutas */}
        <Route path="*" element={<ErrorView />} />
      </Routes>
    </BrowserRouter>
  </>,
  document.querySelector("#app")
);
