import "./leftLateralMenu.css";
interface props {
  name: string;
  photo: string;
}

export const LeftLateralMenu = ({ name, photo }: props) => {
  return (
    <div className="leftLateralMenu-container">
      <ul className="leftLateralMenu-items">
        <li>
          <img className="leftLateralMenu-user-photo" src={photo} alt="" />
          <p>{name}</p>
        </li>
        <li>
          <p>Amigos</p>
        </li>
        <li>
          <p>Grupos</p>
        </li>
        <li>
          <p>Marketplace</p>
        </li>
      </ul>
      <ul className="leftLateralMenu-items">
        <li>
          <p>Eventos</p>
        </li>
        <li>
          <p>Gaming</p>
        </li>
        <li>
          <p>Galeria</p>
        </li>
        <li>
          <p>Videos</p>
        </li>
        <li>
          <p>Mensajes</p>
        </li>
      </ul>
      <ul className="leftLateralMenu-items">
        <li>
          <p>Soporte</p>
        </li>
        <li>
          <p>Ayuda</p>
        </li>
      </ul>
    </div>
  );
};
