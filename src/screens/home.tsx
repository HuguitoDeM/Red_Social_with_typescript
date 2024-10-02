import { useState } from "react";
import { Registro } from "../components/registro/registro";
import { Login } from "../components/login/login";

export const Home = () => {
  const [cambioSesion, setCambioSesion] = useState(true);

  function handleCambioSesion() {
    setCambioSesion(!cambioSesion);
  }

  return (
    <>
      {cambioSesion ? (
        <Login
          user="hugo"
          contraseña="1234"
          cambiarARegistro={handleCambioSesion}
        />
      ) : (
        <Registro
          usuario="huguito123"
          nombre="hugo desiderio"
          email="hugo@gmail.com"
          phone="091226128"
          contraseña="12345"
          cambiarALogin={handleCambioSesion}
        />
      )}
    </>
  );
};
