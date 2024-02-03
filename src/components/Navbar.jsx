/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import ThemeIcon from "./ThemeIcon";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow-lg" data-bs-theme="dark">
        <div className="container ">
          <a className="navbar-brand" href="#">
            Context API
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <NavLink to="/" className="nav-link active">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
              <ThemeIcon/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
