import { Link } from "react-router-dom";
import { routesList } from "../Routes/routesList";
import { useContextGlobal } from "./utils/useContextFunction";

const Navbar = () => {
  const { dispatch } = useContextGlobal();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-per">
      <div className="container-fluid">
        <img src="/DH.ico" className="rounded mx-auto d-block" alt="logo-DH" />

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={routesList.home} className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={routesList.contact} className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to={routesList.favs} className="nav-link">
                Favs
              </Link>
            </li>

            <li className="nav-item li-btn">
              <button
                onClick={() => {
                  dispatch({ type: "CHANGE-THEME" });
                }}
                className="btn btn-sm btn-info"
              >
                Change theme
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
