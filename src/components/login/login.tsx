import "./login.css";

interface props {
  user: string;
  contraseña: string;
  cambiarARegistro: () => void;
}

export const Login = ({ user, contraseña, cambiarARegistro }: props) => {
  return (
    <div className="container">
      <div className="loginContainer">
        <div className="loginForm">
          <h2 className="loginTitle">Inicio De Sesión</h2>
          <input type="text" className="loginFormInput" placeholder="Usuario" />
          <input
            type="text"
            className="loginFormInput"
            placeholder="Contraseña"
          />
          <button className="loginFormButton">Iniciar Sesión</button>
        </div>
        <div className="loginWelcome">
          <h2 className="loginTitle">¡Bienvenido devuelta!</h2>
          <p>¿Aún no tienes cuenta?</p>
          <button className="loginWelcomeButton" onClick={cambiarARegistro}>
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
};
