import "../css/Navbar.css";
import { Link } from "react-router-dom";
// import { Switch } from "./Switch";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/">
            <img
              className="pokemon-logo"
              src="https://cdn.worldvectorlogo.com/logos/pokemon-23.svg"
              alt=""
            />
          </Link>

          {/* <Switch /> */}
        </div>
      </nav>
    </>
  );
};
