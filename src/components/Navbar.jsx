import "../css/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img
            className="pokemon-logo"
            src="https://cdn.worldvectorlogo.com/logos/pokemon-23.svg"
            alt=""
          />
        </Link>
      </nav>
    </>
  );
};
