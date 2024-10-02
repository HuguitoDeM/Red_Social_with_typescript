import "./navbar.css";

interface props {
  name: string;
  photo: string;
}

export const Navbar = ({ name, photo }: props) => {
  return (
    <div className="containerNavbar">
      <div className="content-left-navbar">
        <h1>RedSocial</h1>

        <img className="navbar-icons" src="/public/homeIcon.png" alt="" />
        <img className="navbar-icons" src="/public/moon_icon.png" alt="" />
        <img className="navbar-icons" src="/public/squares-icon.png" alt="" />

        <input
          className="navbar-buscador"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="content-right-navbar">
        <img className="navbar-icons" src="/public/mail_Icon.png" alt="" />
        <img
          className="navbar-icons"
          src="/public/notification_icon.png"
          alt=""
        />
        <img className="navbar-icons" src="/public/profile_icon.png" alt="" />
        <div className="navbar-user-info">
          <img src={photo} alt="" />
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};
