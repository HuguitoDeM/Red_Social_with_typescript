import "./registro.css";

interface props {
  nombre: string;
  usuario: string;
  email: string;
  phone: string;
  contraseña: string;
  cambiarALogin: () => void;
}

export const Registro = ({
  nombre,
  usuario,
  email,
  phone,
  contraseña,
  cambiarALogin,
}: props) => {
  return (
    <div className="container">
      <div className="containerRegistro">
        <div className="registroWelcome">
          <h2 className="registroTitle">Bienvenido, nuevo ser de luz</h2>
          <h2 className="registroTitle">¿Listo para ser uno de nosotros?</h2>
          <p>¿Ya tienes cuenta?</p>
          <button className="registroWelcomeButton" onClick={cambiarALogin}>
            Iniciar sesión
          </button>
        </div>

        <div className="registroForm">
          <h2 className="registroTitle">Crear Cuenta</h2>
          <input
            type="text"
            className="registroFormInput"
            placeholder="Nombre"
          />
          <input
            type="text"
            className="registroFormInput"
            placeholder="Usuario"
          />
          <input
            type="text"
            className="registroFormInput"
            placeholder="Email"
          />
          <input
            type="text"
            className="registroFormInput"
            placeholder="Telefono"
          />
          <input
            type="text"
            className="registroFormInput"
            placeholder="Contraseña"
          />
          <button className="registroFormButton">Registrarse</button>
        </div>
      </div>
    </div>
  );
};
